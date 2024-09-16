package com.example.shareholder.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

import com.example.shareholder.model.SharePrice;
import com.example.shareholder.model.Shareholder;
import com.example.shareholder.repository.ShareholderRepository;
import com.example.shareholder.repository.PersonRepository;
import com.example.shareholder.repository.SharePriceRepository;

@Service
public class ShareholderService {

  @Autowired
  private ShareholderRepository shareholderRepository;

  @Autowired
  private PersonRepository personRepository;

  @Autowired
  private ShareTransactionService shareTransactionService;

  @Autowired
  private SharePriceRepository sharePriceRepository;

  public List<Shareholder> getShareholders() {
    return shareholderRepository.findAll();
  }

  public Shareholder getShareholderById(Long id) {
    return shareholderRepository.findById(id)
        .orElseThrow(() -> new IllegalArgumentException("Osakkeenomistajaa ei löytynyt id:llä " + id));
  }

  public Shareholder addShareholder(Shareholder shareholder) {
    if (!personRepository.existsById(shareholder.getBuyer().getId())) {
      throw new IllegalArgumentException("Ostajaa ei löydy annetulla ID:llä: " + shareholder.getBuyer().getId());
    }
    if (!personRepository.existsById(shareholder.getSeller().getId())) {
      throw new IllegalArgumentException("Myyjää ei löydy annetulla ID:llä: " + shareholder.getSeller().getId());
    }
    if (shareholder.getCollectionDate() == null || shareholder.getTerm() == null || shareholder.getNumberOfShares() == 0
        || shareholder.getPricePerShare() == null) {
      throw new IllegalArgumentException("Kentät ovat pakollisia");
    }
    if (shareholder.getNumberOfShares() < 0) {
      throw new IllegalArgumentException("Osakkeiden lukumäärä ei voi olla negatiivinen");
    }
    if (shareholder.getPricePerShare().compareTo(BigDecimal.ZERO) < 0) {
      throw new IllegalArgumentException("Osakkeen hinta ei voi olla negatiivinen");
    }
    if (shareholder.getBuyer().getId() == shareholder.getSeller().getId()) {
      throw new IllegalArgumentException("Myyjä ja ostaja eivät voi olla sama henkilö");
    }

    // Set price per share
    Optional<SharePrice> optionalSharePrice = sharePriceRepository.findFirstByOrderByIdDesc();
    if (optionalSharePrice.isPresent()) {
      // Get the price from the SharePrice object
      BigDecimal latestPrice = optionalSharePrice.get().getPrice();
      shareholder.setPricePerShare(latestPrice);
    } else {
      shareholder.setPricePerShare(BigDecimal.ZERO);
    }

    // Calculate total amount
    BigDecimal numberOfShares = BigDecimal.valueOf(shareholder.getNumberOfShares());
    shareholder.setTotalAmount(numberOfShares.multiply(shareholder.getPricePerShare()));

    Shareholder newShareholder = shareholderRepository.save(shareholder);
    // Update total share count
    shareTransactionService.updateTotalShareCount();
    return newShareholder;
  }

  public void deleteShareholder(Long id) {
    shareholderRepository.deleteById(id);
    // Update total share count
    shareTransactionService.updateTotalShareCount();
  }

  public Shareholder updateShareholder(Long id, Shareholder shareholder) {
    Shareholder existingShareholder = shareholderRepository.findById(id)
        .orElseThrow(() -> new IllegalArgumentException("Osakkeenomistajaa ei löytynyt id:llä " + id));

    existingShareholder.setCollectionDate(shareholder.getCollectionDate());
    existingShareholder.setTerm(shareholder.getTerm());
    existingShareholder.setSeller(shareholder.getSeller());
    existingShareholder.setBuyer(shareholder.getBuyer());
    existingShareholder.setTransferTaxPaid(shareholder.isTransferTaxPaid());
    existingShareholder.setNumberOfShares(shareholder.getNumberOfShares());
    existingShareholder.setPricePerShare(shareholder.getPricePerShare());

    BigDecimal numberOfShares = BigDecimal.valueOf(existingShareholder.getNumberOfShares());
    existingShareholder.setTotalAmount(numberOfShares.multiply(existingShareholder.getPricePerShare()));

    Shareholder updatedShareholder = shareholderRepository.save(existingShareholder);

    // Update total share count
    shareTransactionService.updateTotalShareCount();
    return updatedShareholder;
  }

  public List<Shareholder> searchShareholders(String search) {
    if (search == null || search.isEmpty()) {
      return getShareholders(); // Return all shareholders if search is empty
    }
    return shareholderRepository.findBySellerFirstnameContainingIgnoreCaseOrSellerLastnameContainingIgnoreCase(search,
        search);
  }
}
