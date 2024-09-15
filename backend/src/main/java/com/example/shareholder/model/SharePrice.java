package com.example.shareholder.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "osakkeen_hinta")
public class SharePrice {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "hinta")
  private double price = 0.0;

  @Column(name = "paivamaara")
  private LocalDate date = LocalDate.now();

  @Column(name = "muutos_edelliseen")
  private double difference = 0.0;

  public SharePrice() {
  }

  public SharePrice(double price) {
    this.price = price;
    this.date = LocalDate.now();
    this.difference = 0.0;
  }

  public SharePrice(double price, LocalDate date, double difference) {
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

  public double getPrice() {
    return price;
  }

  public void setPrice(double price) {
    this.price = price;
  }

  public LocalDate getDate() {
    return date;
  }

  public void setDate(LocalDate date) {
    this.date = date;
  }

  public double getDifference() {
    return difference;
  }

  public void setDifference(double difference) {
    this.difference = difference;
  }
}
