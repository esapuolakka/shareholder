package com.example.shareholder.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.shareholder.repository.ShareCountTotalRepository;

@Service
public class OwnerPercentageCalculator {

  @Autowired
  private ShareCountTotalRepository shareCountTotalRepository;
  
  public double calculateOwnerPercentage(Integer numberOfShares) {
    Integer totalShares = shareCountTotalRepository.findById(1L).get().getTotalShares();
    double ownersPercentage = ((double) numberOfShares / totalShares) * 100;
    ownersPercentage = Math.round(ownersPercentage * 100.00) / 100.00;
    return ownersPercentage;
  }
}
