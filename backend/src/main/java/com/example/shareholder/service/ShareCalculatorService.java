package com.example.shareholder.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.shareholder.repository.ShareTransactionRepository;

@Service
public class ShareCalculatorService {
  
  @Autowired
  private ShareTransactionRepository shareholderRepository;

  public Integer calculateTotalShares() {
    return shareholderRepository.findAll().stream().mapToInt(shareholder -> shareholder.getNumberOfShares()).sum();
  }
}
