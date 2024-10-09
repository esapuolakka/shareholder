package com.example.shareholder.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;
import java.util.List;

import com.example.shareholder.model.ShareCountTotal;

public interface ShareCountTotalRepository extends JpaRepository<ShareCountTotal, Long> {
  
  Optional<ShareCountTotal> findFirstByOrderByIdDesc();

  @Query("SELECT YEAR(s.date), s.totalShares FROM ShareCountTotal s " +
         "WHERE s.date = (SELECT MAX(sub.date) FROM ShareCountTotal sub WHERE YEAR(sub.date) = YEAR(s.date)) " +
         "GROUP BY YEAR(s.date), s.totalShares " +
         "ORDER BY YEAR(s.date)")
  List<Object[]> findLatestTotalSharesPerYear();
}
