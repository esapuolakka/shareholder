package com.example.shareholder.service;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.shareholder.model.SharePrice;
import com.example.shareholder.repository.SharePriceRepository;

@Service
public class SharePriceDifferenceCalculator {

  @Autowired
  private SharePriceRepository sharePriceRepository;

  public BigDecimal calculateDifference(SharePrice newSharePrice) {
    Optional<SharePrice> sharePriceOptional = sharePriceRepository.findFirstByOrderByIdDesc();
    if (sharePriceOptional.isPresent()) {
      SharePrice sharePrice = sharePriceOptional.get();
      BigDecimal previousPrice = sharePrice.getPrice();
      BigDecimal currentPrice = newSharePrice.getPrice();
      BigDecimal difference = currentPrice.subtract(previousPrice);
      return difference.setScale(2, RoundingMode.HALF_UP);
    }
    return BigDecimal.ZERO;
  }
}
