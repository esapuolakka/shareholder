package com.example.shareholder.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.shareholder.model.Company;

import java.util.List;

public interface CompanyRepository extends JpaRepository<Company, Long> {
    List<Company> findByBusinessIdContainingIgnoreCase(String businessId);
}
