package com.example.shareholder.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import com.example.shareholder.model.SharePrice;

public interface SharePriceRepository extends JpaRepository<SharePrice, Long> {

  Optional<SharePrice> findFirstByOrderByIdDesc();
}
