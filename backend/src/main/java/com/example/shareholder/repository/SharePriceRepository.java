package com.example.shareholder.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

import com.example.shareholder.model.SharePrice;

public interface SharePriceRepository extends JpaRepository<SharePrice, Long> {

  Optional<SharePrice> findFirstByOrderByIdDesc();

  @Query("SELECT YEAR(sp.date), AVG(sp.price) FROM SharePrice sp GROUP BY YEAR(sp.date)")
  List<Object[]> findAveragePricePerYear();

}
