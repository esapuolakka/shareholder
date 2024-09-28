package com.example.shareholder.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GenerationType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import java.math.BigDecimal;

@Entity
@Table(name = "osake_omistus")
public class ShareOwnership {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "osakkeiden_lukumaara")
  private BigDecimal numberOfShares;

  @Column(name = "osake_numero_alkaen")
  private int startingLotNumber;

  @Column(name = "osake_numero_loppuen")
  private int endingLotNumber;

  @Column(name = "osaketyyppi")
  private String shareClass;

  @ManyToOne
  @JoinColumn(name = "henkilo_id")
  private Person owner;

  public ShareOwnership() {
  }

  public ShareOwnership(BigDecimal numberOfShares, int startingLotNumber, int endingLotNumber, Person owner) {
    this.numberOfShares = numberOfShares;
    this.startingLotNumber = startingLotNumber;
    this.endingLotNumber = endingLotNumber;
    this.owner = owner;
    this.shareClass = "A";
  }

  public Long getId() {
    return id;
  }

  public BigDecimal getNumberOfShares() {
    return numberOfShares;
  }

  public void setNumberOfShares(BigDecimal numberOfShares) {
    this.numberOfShares = numberOfShares;
  }

  public int getStartingLotNumber() {
    return startingLotNumber;
  }

  public void setStartingLotNumber(int startingLotNumber) {
    this.startingLotNumber = startingLotNumber;
  }

  public int getEndingLotNumber() {
    return endingLotNumber;
  }

  public void setEndingLotNumber(int endingLotNumber) {
    this.endingLotNumber = endingLotNumber;
  }

  public Person getPrimaryOwner() {
    return owner;
  }

  public void setPrimaryOwner(Person owner) {
    this.owner = owner;
  }

  public String getShareClass() {
    return shareClass;
  }

  public void setShareClass(String shareClass) {
    this.shareClass = shareClass;
  }
}
