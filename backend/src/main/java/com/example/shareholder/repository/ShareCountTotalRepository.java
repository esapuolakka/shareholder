package com.example.shareholder.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import com.example.shareholder.model.ShareCountTotal;

public interface ShareCountTotalRepository extends JpaRepository<ShareCountTotal, Long> {
  
  Optional<ShareCountTotal> findFirstByOrderByIdDesc();
}
