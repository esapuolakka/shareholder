package com.example.shareholder.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;
import java.util.List;

import com.example.shareholder.model.ShareCountTotal;

public interface ShareCountTotalRepository extends JpaRepository<ShareCountTotal, Long> {
  
  Optional<ShareCountTotal> findFirstByOrderByIdDesc();

  @Query("SELECT YEAR(s.date), SUM(s.totalShares) FROM ShareCountTotal s GROUP BY YEAR(s.date)")
  List<Object[]> findTotalSharesPerYear();
}
