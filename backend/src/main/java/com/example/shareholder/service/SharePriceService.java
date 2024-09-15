package com.example.shareholder.service;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.shareholder.model.SharePrice;
import com.example.shareholder.repository.SharePriceRepository;

@Service
public class SharePriceService {

  @Autowired
  private SharePriceRepository sharePriceRepository;

  @Autowired
  private SharePriceDifferenceCalculator sharePriceDifferenceCalculator;

  public Iterable<SharePrice> getAllSharePrices() {
    return sharePriceRepository.findAll();
  }

  public SharePrice getSharePrice(Long id) {
    return sharePriceRepository.findById(id)
        .orElseThrow(() -> new RuntimeException("Osakkeen hintaa ei löytynyt id:llä " + id));
  }

  public SharePrice addSharePrice(SharePrice sharePrice) {
    double difference = sharePriceDifferenceCalculator.calculateDifference(sharePrice);
    sharePrice.setDifference(difference);
    return sharePriceRepository.save(sharePrice);
  }

  public SharePrice updateSharePrice(Long id, SharePrice newSharePrice) {
    SharePrice existingSharePrice = sharePriceRepository.findById(id)
        .orElseThrow(() -> new RuntimeException("Osakkeen hintaa ei löytynyt id:llä " + id));

    existingSharePrice.setPrice(newSharePrice.getPrice());

    // Calculate difference
    double difference = sharePriceDifferenceCalculator.calculateDifference(newSharePrice);
    existingSharePrice.setDifference(difference);

    // Update date
    existingSharePrice.setDate(LocalDate.now());

    return sharePriceRepository.save(existingSharePrice);
  }

  public void deleteSharePrice(Long id) {
    sharePriceRepository.deleteById(id);
  }
}
