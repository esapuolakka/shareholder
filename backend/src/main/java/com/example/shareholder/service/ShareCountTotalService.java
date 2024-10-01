package com.example.shareholder.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.shareholder.model.ShareCountTotal;
import com.example.shareholder.repository.ShareCountTotalRepository;

@Service
public class ShareCountTotalService {

  @Autowired
  private ShareCountTotalRepository shareCountTotalRepository;
  
  public Integer updateTotalShareCount(Integer shareCount) {

    ShareCountTotal total = shareCountTotalRepository.findById(1L).orElse(null);

    if (total == null) {
      total = new ShareCountTotal();
      total.setTotalShares(0);
    }
    
    total.setTotalShares(total.getTotalShares() + shareCount);
    shareCountTotalRepository.save(total);

    return total.getTotalShares();
  }
}
