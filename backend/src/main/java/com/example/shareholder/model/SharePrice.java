package com.example.shareholder.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.math.BigDecimal;

@Entity
@Table(name = "osakkeen_hinta")
public class SharePrice {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "hinta")
  private BigDecimal price = BigDecimal.ZERO;

  @Column(name = "paivamaara")
  private LocalDate date = LocalDate.now();

  @Column(name = "muutos_edelliseen")
  private BigDecimal difference = BigDecimal.ZERO;

  public SharePrice() {
  }

  public SharePrice(BigDecimal price) {
    this.price = price;
    this.date = LocalDate.now();
    this.difference = BigDecimal.ZERO;
  }

  public SharePrice(BigDecimal price, LocalDate date, BigDecimal difference) {
    this.price = price;
    this.date = date;
    this.difference = difference;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public BigDecimal getPrice() {
    return price;
  }

  public void setPrice(BigDecimal price) {
    this.price = price;
  }

  public LocalDate getDate() {
    return date;
  }

  public void setDate(LocalDate date) {
    this.date = date;
  }

  public BigDecimal getDifference() {
    return difference;
  }

  public void setDifference(BigDecimal difference) {
    this.difference = difference;
  }
}
