package com.example.shareholder.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.time.LocalDate;


@Entity
@Table(name = "osakkeita_yhteensa")
public class ShareCountTotal {
  
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "osakkeiden_maara")
  private Integer totalShares;

  @Column(name = "paivamaara")
  private LocalDate date = LocalDate.now();

  public ShareCountTotal() {
  }

  public ShareCountTotal(Integer totalShares) {
    this.totalShares = totalShares;
  }

  public ShareCountTotal(Integer totalShares, LocalDate date) {
    this.totalShares = totalShares;
    this.date = date;
  }

  public Long getId() {
    return id;
  }

  public Integer getTotalShares() {
    return totalShares;
  }

  public void setTotalShares(Integer totalShares) {
    this.totalShares = totalShares;
  }

  public LocalDate getDate() {
    return this.date;
  }

  public void setDate(LocalDate date) {
    this.date = date;
  }
}
