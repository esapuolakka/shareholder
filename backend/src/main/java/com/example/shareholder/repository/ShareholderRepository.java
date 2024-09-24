package com.example.shareholder.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.shareholder.model.Shareholder;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ShareholderRepository extends JpaRepository<Shareholder, Long> {

    @Query("SELECT s FROM Shareholder s JOIN s.seller seller WHERE LOWER(seller.firstname) LIKE LOWER(CONCAT('%', ?1, '%')) OR LOWER(seller.lastname) LIKE LOWER(CONCAT('%', ?1, '%'))")
    List<Shareholder> findBySellerFirstnameContainingIgnoreCaseOrSellerLastnameContainingIgnoreCase(String firstname,
            String lastname);
}
