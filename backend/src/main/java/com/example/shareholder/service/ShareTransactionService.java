package com.example.shareholder.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;
import java.util.ArrayList;

import com.example.shareholder.model.SharePrice;
import com.example.shareholder.model.ShareTransaction;
import com.example.shareholder.repository.PersonRepository;
import com.example.shareholder.repository.SharePriceRepository;
import com.example.shareholder.repository.ShareTransactionRepository;

@Service
public class ShareTransactionService {

  @Autowired
  private ShareTransactionRepository shareTransactionRepository;

  @Autowired
  private PersonRepository personRepository;

  @Autowired
  private SharePriceRepository sharePriceRepository;

  public List<ShareTransaction> getShareTransactions() {
    String status = "approved";
    return shareTransactionRepository.findByStatus(status);
  }

  public ShareTransaction getShareTransactionById(Long id) {
    return shareTransactionRepository.findById(id)
        .orElseThrow(() -> new IllegalArgumentException("Osakkeenomistajaa ei löytynyt id:llä " + id));
  }

  public ShareTransaction addShareTransaction(ShareTransaction shareTransaction) {
    if (!personRepository.existsById(shareTransaction.getBuyer().getId())) {
      throw new IllegalArgumentException("Ostajaa ei löydy annetulla ID:llä: " + shareTransaction.getBuyer().getId());
    }
    if (!personRepository.existsById(shareTransaction.getSeller().getId())) {
      throw new IllegalArgumentException("Myyjää ei löydy annetulla ID:llä: " + shareTransaction.getSeller().getId());
    }
    if (shareTransaction.getCollectionDate() == null || shareTransaction.getTerm() == null
        || shareTransaction.getNumberOfShares() == 0) {
      throw new IllegalArgumentException("Kentät ovat pakollisia");
    }
    if (shareTransaction.getNumberOfShares() < 0) {
      throw new IllegalArgumentException("Osakkeiden lukumäärä ei voi olla negatiivinen");
    }
    if (shareTransaction.getBuyer().getId() == shareTransaction.getSeller().getId()) {
      throw new IllegalArgumentException("Myyjä ja ostaja eivät voi olla sama henkilö");
    }

    // Set price per share
    Optional<SharePrice> optionalSharePrice = sharePriceRepository.findFirstByOrderByIdDesc();
    if (optionalSharePrice.isPresent()) {
      BigDecimal latestPrice = optionalSharePrice.get().getPrice();
      shareTransaction.setPricePerShare(latestPrice);
    } else {
      shareTransaction.setPricePerShare(BigDecimal.ZERO);
    }

    if (shareTransaction.getStatus() == null || shareTransaction.getStatus().isEmpty()) {
      shareTransaction.setStatus("pending");
    }

    if ((!shareTransaction.getStatus().equals("pending") && !shareTransaction.getStatus().equals("approved")
            && !shareTransaction.getStatus().equals("rejected"))) {
      throw new IllegalArgumentException("Status on pakollinen, joko 'pending', 'approved' tai 'rejected'");
    }

    // Calculate total amount
    BigDecimal numberOfShares = BigDecimal.valueOf(shareTransaction.getNumberOfShares());
    shareTransaction.setTotalAmount(numberOfShares.multiply(shareTransaction.getPricePerShare()));

    ShareTransaction newShareTransaction = shareTransactionRepository.save(shareTransaction);
    return newShareTransaction;
  }

  public void deleteShareTransaction(Long id) {
    shareTransactionRepository.deleteById(id);
  }

  public ShareTransaction updateShareTransaction(Long id, ShareTransaction shareTransaction) {
    ShareTransaction existingShareTransaction = shareTransactionRepository.findById(id)
        .orElseThrow(() -> new IllegalArgumentException("Osaketransaktiota ei löytynyt id:llä " + id));

    existingShareTransaction.setCollectionDate(shareTransaction.getCollectionDate());
    existingShareTransaction.setTerm(shareTransaction.getTerm());
    existingShareTransaction.setSeller(shareTransaction.getSeller());
    existingShareTransaction.setBuyer(shareTransaction.getBuyer());
    existingShareTransaction.setTransferTaxPaid(shareTransaction.isTransferTaxPaid());
    existingShareTransaction.setNumberOfShares(shareTransaction.getNumberOfShares());

    // Set price per share
    Optional<SharePrice> optionalSharePrice = sharePriceRepository.findFirstByOrderByIdDesc();
    if (optionalSharePrice.isPresent()) {
      BigDecimal latestPrice = optionalSharePrice.get().getPrice();
      existingShareTransaction.setPricePerShare(latestPrice);
    } else {
      existingShareTransaction.setPricePerShare(BigDecimal.ZERO);
    }

    if (shareTransaction.getStatus() == null || shareTransaction.getStatus().isEmpty()
        || (!shareTransaction.getStatus().equals("pending") && !shareTransaction.getStatus().equals("approved")
            && !shareTransaction.getStatus().equals("rejected"))) {
      throw new IllegalArgumentException("Status on pakollinen, käytä 'pending', 'approved' tai 'rejected'");
    }

    BigDecimal numberOfShares = BigDecimal.valueOf(existingShareTransaction.getNumberOfShares());
    existingShareTransaction.setTotalAmount(numberOfShares.multiply(existingShareTransaction.getPricePerShare()));

    ShareTransaction updatedShareTransaction = shareTransactionRepository.save(existingShareTransaction);

    return updatedShareTransaction;
  }

  public List<ShareTransaction> searchShareTransactions(String search) {
    if (search == null || search.isEmpty()) {
      return getShareTransactions(); // Return all shareTransactions if search is empty
    }
    return shareTransactionRepository.findBySellerFirstnameContainingIgnoreCaseOrSellerLastnameContainingIgnoreCase(
        search,
        search);
  }

  public List<ShareTransaction> getTransactionsByStatus(String status) {
    if (status == null || status.isEmpty()) {
      return new ArrayList<>();
    }
    return shareTransactionRepository.findByStatus(status);
  }
}
