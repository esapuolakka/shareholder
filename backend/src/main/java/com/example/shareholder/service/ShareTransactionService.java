package com.example.shareholder.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

import com.example.shareholder.model.SharePrice;
import com.example.shareholder.model.ShareTransaction;
import com.example.shareholder.repository.PersonRepository;
import com.example.shareholder.repository.SharePriceRepository;
import com.example.shareholder.repository.ShareTransactionRepository;

@Service
public class ShareTransactionService {

  @Autowired
  private ShareTransactionRepository shareholderRepository;

  @Autowired
  private PersonRepository personRepository;

  @Autowired
  private SharePriceRepository sharePriceRepository;


  public List<ShareTransaction> getShareholders() {
    return shareholderRepository.findAll();
  }

  public ShareTransaction getShareholderById(Long id) {
    return shareholderRepository.findById(id)
        .orElseThrow(() -> new IllegalArgumentException("Osakkeenomistajaa ei löytynyt id:llä " + id));
  }

  public ShareTransaction addShareholder(ShareTransaction shareholder) {
    if (!personRepository.existsById(shareholder.getBuyer().getId())) {
      throw new IllegalArgumentException("Ostajaa ei löydy annetulla ID:llä: " + shareholder.getBuyer().getId());
    }
    if (!personRepository.existsById(shareholder.getSeller().getId())) {
      throw new IllegalArgumentException("Myyjää ei löydy annetulla ID:llä: " + shareholder.getSeller().getId());
    }
    if (shareholder.getCollectionDate() == null || shareholder.getTerm() == null || shareholder.getNumberOfShares() == 0) {
      throw new IllegalArgumentException("Kentät ovat pakollisia");
    }
    if (shareholder.getNumberOfShares() < 0) {
      throw new IllegalArgumentException("Osakkeiden lukumäärä ei voi olla negatiivinen");
    }
    if (shareholder.getBuyer().getId() == shareholder.getSeller().getId()) {
      throw new IllegalArgumentException("Myyjä ja ostaja eivät voi olla sama henkilö");
    }

    // Set price per share
    Optional<SharePrice> optionalSharePrice = sharePriceRepository.findFirstByOrderByIdDesc();
    if (optionalSharePrice.isPresent()) {
      BigDecimal latestPrice = optionalSharePrice.get().getPrice();
      shareholder.setPricePerShare(latestPrice);
    } else {
      shareholder.setPricePerShare(BigDecimal.ZERO);
    }

    // Calculate total amount
    BigDecimal numberOfShares = BigDecimal.valueOf(shareholder.getNumberOfShares());
    shareholder.setTotalAmount(numberOfShares.multiply(shareholder.getPricePerShare()));

    ShareTransaction newShareholder = shareholderRepository.save(shareholder);
    return newShareholder;
  }

  public void deleteShareholder(Long id) {
    shareholderRepository.deleteById(id);
  }

  public ShareTransaction updateShareholder(Long id, ShareTransaction shareholder) {
    ShareTransaction existingShareholder = shareholderRepository.findById(id)
        .orElseThrow(() -> new IllegalArgumentException("Osakkeenomistajaa ei löytynyt id:llä " + id));

    existingShareholder.setCollectionDate(shareholder.getCollectionDate());
    existingShareholder.setTerm(shareholder.getTerm());
    existingShareholder.setSeller(shareholder.getSeller());
    existingShareholder.setBuyer(shareholder.getBuyer());
    existingShareholder.setTransferTaxPaid(shareholder.isTransferTaxPaid());
    existingShareholder.setNumberOfShares(shareholder.getNumberOfShares());

    // Set price per share
    Optional<SharePrice> optionalSharePrice = sharePriceRepository.findFirstByOrderByIdDesc();
    if (optionalSharePrice.isPresent()) {
      BigDecimal latestPrice = optionalSharePrice.get().getPrice();
      existingShareholder.setPricePerShare(latestPrice);
    } else {
      existingShareholder.setPricePerShare(BigDecimal.ZERO);
    }

    BigDecimal numberOfShares = BigDecimal.valueOf(existingShareholder.getNumberOfShares());
    existingShareholder.setTotalAmount(numberOfShares.multiply(existingShareholder.getPricePerShare()));

    ShareTransaction updatedShareholder = shareholderRepository.save(existingShareholder);

    return updatedShareholder;
  }

  public List<ShareTransaction> searchShareholders(String search) {
    if (search == null || search.isEmpty()) {
      return getShareholders(); // Return all shareholders if search is empty
    }
    return shareholderRepository.findBySellerFirstnameContainingIgnoreCaseOrSellerLastnameContainingIgnoreCase(search,
        search);
  }
}
