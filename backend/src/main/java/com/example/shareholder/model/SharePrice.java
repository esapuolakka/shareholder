package com.example.shareholder.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "osakkeen_hinta")
public class SharePrice {

  @Id
  private Long id;

  @Column(name = "hinta")
  private double price;

  public SharePrice() {
  }

  public SharePrice(Long id, double price) {
    this.id = id;
    this.price = price;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public double getPrice() {
    return price;
  }

  public void setPrice(double price) {
    this.price = price;
  }
}
