package com.example.shareholder.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "transaktio")
public class ShareTransaction {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  private Long id;

  @Column(name = "saanto_pvm")
  private LocalDate collectionDate;

  @Column(name = "maksu_pvm")
  private LocalDate term;

  @JoinColumn(name = "myyja_id", nullable = false)
  @ManyToOne
  private Person seller;

  @JoinColumn(name = "ostaja_id", nullable = false)
  @ManyToOne
  private Person buyer;

  @Column(name = "varainsiirtovero_maksettu")
  private boolean transferTaxPaid;

  @Column(name = "osakkeiden_lukumaara", nullable = false)
  private int numberOfShares;

  @Column(name = "osakkeen_hinta")
  private BigDecimal pricePerShare;

  @Column(name = "hinta_yhteensa")
  private BigDecimal totalAmount;

  @Column(name = "huom")
  private String notes;

  @Column(name = "status")
  private String status;

  public ShareTransaction() {
  }

  public ShareTransaction(LocalDate collectionDate, LocalDate term, Person seller, Person buyer,
      boolean transferTaxPaid, int numberOfShares, BigDecimal pricePerShare, BigDecimal totalAmount, String notes) {
    this.collectionDate = collectionDate;
    this.term = term;
    this.seller = seller;
    this.buyer = buyer;
    this.transferTaxPaid = transferTaxPaid;
    this.numberOfShares = numberOfShares;
    this.pricePerShare = pricePerShare;
    this.totalAmount = totalAmount;
    this.notes = notes;
    this.status = "pending";
  }

  public Long getId() {
    return id;
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

  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }
}
