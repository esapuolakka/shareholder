package com.example.shareholder.service;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.shareholder.model.SharePrice;
import com.example.shareholder.repository.SharePriceRepository;

@Service
public class SharePriceDifferenceCalculator {

  @Autowired
  private SharePriceRepository sharePriceRepository;

  public BigDecimal calculateDifference(SharePrice newSharePrice) {
    List<SharePrice> sharePrices = sharePriceRepository.findAll();
    List<SharePrice> sortedSharePrices = sharePrices.stream()
        .sorted(Comparator.comparing(SharePrice::getDate).reversed())
        .collect(Collectors.toList());

    if (sortedSharePrices.size() < 1) {
      return BigDecimal.ZERO;
    }

    BigDecimal previousPrice = BigDecimal.valueOf(sortedSharePrices.get(0).getPrice().longValue());

    if (sortedSharePrices.size() > 1) {
      previousPrice = BigDecimal.valueOf(sortedSharePrices.get(1).getPrice().longValue());
    }

    BigDecimal newPrice = BigDecimal.valueOf(newSharePrice.getPrice().longValue());
    BigDecimal difference = newPrice.subtract(previousPrice);
    BigDecimal roundedDifference = difference.setScale(2, RoundingMode.HALF_UP);

    return roundedDifference;
  }
}
