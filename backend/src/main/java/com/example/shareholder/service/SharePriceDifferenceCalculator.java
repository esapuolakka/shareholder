package com.example.shareholder.service;

import java.math.BigDecimal;
import java.math.RoundingMode;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.shareholder.model.SharePrice;
import com.example.shareholder.repository.SharePriceRepository;

@Service
public class SharePriceDifferenceCalculator {

  @Autowired
  private SharePriceRepository sharePriceRepository;

  public BigDecimal calculateDifference(SharePrice newSharePrice) {
    SharePrice sharePrice = sharePriceRepository.findLatestSharePrice();

    if (sharePrice == null) {
      return BigDecimal.ZERO;
    }
    
    BigDecimal previousPrice = sharePrice.getPrice();
    BigDecimal currentPrice = newSharePrice.getPrice();
    BigDecimal difference = currentPrice.subtract(previousPrice);

    return difference.setScale(2, RoundingMode.HALF_UP);
  }
}
