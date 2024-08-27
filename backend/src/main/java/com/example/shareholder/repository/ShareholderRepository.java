package com.example.shareholder.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.shareholder.model.Shareholder;

public interface ShareholderRepository extends JpaRepository<Shareholder, Long> {
  
}
