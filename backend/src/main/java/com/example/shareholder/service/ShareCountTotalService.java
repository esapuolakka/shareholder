package com.example.shareholder.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;
import java.util.Map;

import com.example.shareholder.model.ShareCountTotal;
import com.example.shareholder.repository.ShareCountTotalRepository;

@Service
public class ShareCountTotalService {

  @Autowired
  private ShareCountTotalRepository shareCountTotalRepository;

  public List<ShareCountTotal> getAllTotalCounts() {
    return shareCountTotalRepository.findAll();
  }

  public ShareCountTotal getLatestTotalCount() {
    return shareCountTotalRepository.findFirstByOrderByIdDesc()
      .orElseThrow(() -> new RuntimeException("Osakkeiden kokonaismäärää ei löydy"));
  }
  
  public Integer addTotalShareCount(Integer shareCount) {
    Optional<ShareCountTotal> oldCountOptional = shareCountTotalRepository.findFirstByOrderByIdDesc();
    if (oldCountOptional.isPresent()) {
      ShareCountTotal oldTotal = oldCountOptional.get();
      ShareCountTotal newTotal = new ShareCountTotal(oldTotal.getTotalShares() + shareCount);
      shareCountTotalRepository.save(newTotal);
      return newTotal.getTotalShares();
    } else {
      ShareCountTotal newTotal = new ShareCountTotal(0);
      shareCountTotalRepository.save(newTotal);
      return newTotal.getTotalShares();
    }
  }

  public Map<Integer, Integer> getLatestTotalSharesPerYear() {
    List<Object[]> result = shareCountTotalRepository.findLatestTotalSharesPerYear();
    Map<Integer, Integer> sharesPerYear = new HashMap<>();

    for (Object[] row : result) {
      Integer year = (Integer) row[0];
      Integer totalShares = (Integer) row[1];
      sharesPerYear.put(year, totalShares);
    }

    return sharesPerYear;
  }
}
