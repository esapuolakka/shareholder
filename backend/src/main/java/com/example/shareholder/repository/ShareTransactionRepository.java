package com.example.shareholder.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.shareholder.model.ShareTransaction;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ShareTransactionRepository extends JpaRepository<ShareTransaction, Long> {

    @Query("SELECT s FROM ShareTransaction s JOIN s.seller seller WHERE LOWER(seller.firstname) LIKE LOWER(CONCAT('%', ?1, '%')) OR LOWER(seller.lastname) LIKE LOWER(CONCAT('%', ?1, '%')) AND s.status = 'approved'")
    List<ShareTransaction> findBySellerFirstnameContainingIgnoreCaseOrSellerLastnameContainingIgnoreCase(String firstname,
            String lastname);
    
    List<ShareTransaction> findByStatus(String status);
}
