package com.example.shareholder.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.shareholder.model.ShareOwnership;

public interface ShareOwnershipRepository extends JpaRepository<ShareOwnership, Long> {
  
  @Query("SELECT MAX(s.endingShareNumber) FROM ShareOwnership s")
  Optional<Integer> findMaxEndingShareNumber();

  List<ShareOwnership> findByOwnerId(Long id);
}
