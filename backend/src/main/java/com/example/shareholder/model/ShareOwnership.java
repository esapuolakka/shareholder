package com.example.shareholder.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GenerationType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "osake_omistus")
public class ShareOwnership {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "osakkeiden_lukumaara")
  private int numberOfShares;

  @Column(name = "osake_numero_alkaen")
  private int startingShareNumber;

  @Column(name = "osake_numero_loppuen")
  private int endingShareNumber;

  @Column(name = "osaketyyppi")
  private String shareClass;

  @ManyToOne
  @JoinColumn(name = "henkilo_id")
  private Person owner;

  public ShareOwnership() {
  }

  public ShareOwnership(int numberOfShares, int startingShareNumber, int endingShareNumber, Person owner) {
    this.numberOfShares = numberOfShares;
    this.startingShareNumber = startingShareNumber;
    this.endingShareNumber = endingShareNumber;
    this.owner = owner;
    this.shareClass = "A";
  }

  public Long getId() {
    return id;
  }

  public int getNumberOfShares() {
    return numberOfShares;
  }

  public void setNumberOfShares(int numberOfShares) {
    this.numberOfShares = numberOfShares;
  }

  public int getStartingShareNumber() {
    return startingShareNumber;
  }

  public void setStartingShareNumber(int startingShareNumber) {
    this.startingShareNumber = startingShareNumber;
  }

  public int getEndingShareNumber() {
    return endingShareNumber;
  }

  public void setEndingShareNumber(int endingShareNumber) {
    this.endingShareNumber = endingShareNumber;
  }

  public Person getOwner() {
    return owner;
  }

  public void setOwner(Person owner) {
    this.owner = owner;
  }

  public String getShareClass() {
    return shareClass;
  }

  public void setShareClass(String shareClass) {
    this.shareClass = shareClass;
  }
}
