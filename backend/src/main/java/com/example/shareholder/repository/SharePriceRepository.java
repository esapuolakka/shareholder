package com.example.shareholder.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;
import com.example.shareholder.model.SharePrice;

public interface SharePriceRepository extends JpaRepository<SharePrice, Long> {

  @Query("SELECT sp FROM SharePrice sp WHERE sp.id = (SELECT MAX(sp2.id) FROM SharePrice sp2)")
  SharePrice findLatestSharePrice();

  Optional<SharePrice> findFirstByOrderByIdDesc();
}
