package com.example.shareholder.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.PrimaryKeyJoinColumn;
import jakarta.persistence.Table;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "osakas")
public class Shareholder {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  private Long id;

  @Column(name = "saanto_pvm")
  private LocalDate collectionDate;

  @Column(name = "maksu_pvm")
  private LocalDate term;

  @PrimaryKeyJoinColumn(name = "myyja_id")
  @OneToOne
  private Person seller;

  @PrimaryKeyJoinColumn(name = "ostaja_id")
  @OneToOne
  private Person buyer;

  @Column(name = "varainsiirtovero_maksettu")
  private boolean transferTaxPaid;

  @Column(name = "osakkeiden_lukumaara")
  private int numberOfShares;

  @Column(name = "osakkeen_hinta")
  private BigDecimal pricePerShare;

  @Column(name = "hinta_yhteensa")
  private BigDecimal totalAmount;

  @Column(name = "huom")
  private String notes;

  public Shareholder() {
  }

  public Shareholder(Long id, LocalDate collectionDate, LocalDate term, Person seller, Person buyer,
      boolean transferTaxPaid, int numberOfShares, BigDecimal pricePerShare, BigDecimal totalAmount, String notes) {
    this.id = id;
    this.collectionDate = collectionDate;
    this.term = term;
    this.seller = seller;
    this.buyer = buyer;
    this.transferTaxPaid = transferTaxPaid;
    this.numberOfShares = numberOfShares;
    this.pricePerShare = pricePerShare;
    this.totalAmount = totalAmount;
    this.notes = notes;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public LocalDate getCollectionDate() {
    return collectionDate;
  }

  public void setCollectionDate(LocalDate collectionDate) {
    this.collectionDate = collectionDate;
  }

  public LocalDate getTerm() {
    return term;
  }

  public void setTerm(LocalDate term) {
    this.term = term;
  }

  public Person getSeller() {
    return seller;
  }

  public void setSeller(Person seller) {
    this.seller = seller;
  }

  public Person getBuyer() {
    return buyer;
  }

  public void setBuyer(Person buyer) {
    this.buyer = buyer;
  }

  public boolean isTransferTaxPaid() {
    return transferTaxPaid;
  }

  public void setTransferTaxPaid(boolean transferTaxPaid) {
    this.transferTaxPaid = transferTaxPaid;
  }

  public int getNumberOfShares() {
    return numberOfShares;
  }

  public void setNumberOfShares(int numberOfShares) {
    this.numberOfShares = numberOfShares;
  }

  public BigDecimal getPricePerShare() {
    return pricePerShare;
  }

  public void setPricePerShare(BigDecimal pricePerShare) {
    this.pricePerShare = pricePerShare;
  }

  public BigDecimal getTotalAmount() {
    return totalAmount;
  }

  public void setTotalAmount(BigDecimal totalAmount) {
    this.totalAmount = totalAmount;
  }

  public String getNotes() {
    return notes;
  }

  public void setNotes(String notes) {
    this.notes = notes;
  }
}
