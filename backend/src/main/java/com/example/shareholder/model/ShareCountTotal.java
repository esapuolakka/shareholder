package com.example.shareholder.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "osakkeita_yhteensa")
public class ShareCountTotal {
  
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "osakkeiden_maara")
  private Integer totalShares;

  public ShareCountTotal() {
  }

  public ShareCountTotal(Integer totalShares) {
    this.totalShares = totalShares;
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
}
