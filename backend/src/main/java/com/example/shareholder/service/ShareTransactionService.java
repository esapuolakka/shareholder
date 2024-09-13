package com.example.shareholder.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.shareholder.model.ShareCountTotal;
import com.example.shareholder.repository.ShareCountTotalRepository;

@Service
public class ShareTransactionService {
  
  @Autowired
  private ShareCalculatorService shareCalculatorService;

  @Autowired
  private ShareCountTotalRepository shareCountTotalRepository;

  public void updateTotalShareCount() {
    Integer newShareCount = shareCalculatorService.calculateTotalShares();
    ShareCountTotal shareCountTotal = shareCountTotalRepository.findById(1L).orElse(new ShareCountTotal());
    shareCountTotal.setTotalShares(newShareCount);
    shareCountTotalRepository.save(shareCountTotal);
  } 
}
