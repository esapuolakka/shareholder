package com.example.shareholder.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.shareholder.model.ShareOwnership;

public interface ShareOwnershipRepository extends JpaRepository<ShareOwnership, Long> {
  
}
