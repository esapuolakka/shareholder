package com.example.shareholder.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.shareholder.model.Company;

public interface CompanyRepository extends JpaRepository<Company, Long> {

}