package com.example.shareholder.model;

import jakarta.persistence.*;

@Entity
@Table(name = "henkilo")
public class Person {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  private Long id;

  @Column(name = "etunimi")
  private String firstname;

  @Column(name = "sukunimi")
  private String lastname;

  @Column(name = "sahkoposti")
  private String email;

  @Column(name = "puhelin")
  private String phone;

  @Column(name = "osoite")
  private String address;

  @Column(name = "postinumero")
  private String postalCode;

  @Column(name = "kotikunta")
  private String city;

  @Column(name = "hetu")
  private String ssn;

  @Column(name = "osakkeiden_maara")
  private Integer numberOfShares;

  @Column(name = "omistusosuus")
  private double ownershipPercentage;

  @Column(name = "pankkitili")
  private String bankAccount;

  public Person() {
  }

  public Person(Long id, String firstname, String lastname, String email, String phone) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.phone = phone;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getFirstname() {
    return firstname;
  }

  public void setFirstname(String firstname) {
    this.firstname = firstname;
  }

  public String getLastname() {
    return lastname;
  }

  public String getBankAccount() {
    return bankAccount;
  }

  public void setBankAccount(String bankAccount) {
    this.bankAccount = bankAccount;
  }

  public void setLastname(String lastname) {
    this.lastname = lastname;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPhone() {
    return phone;
  }

  public void setPhone(String phone) {
    this.phone = phone;
  }

  public String getAddress() {
    return address;
  }

  public void setAddress(String address) {
    this.address = address;
  }

  public String getPostalCode() {
    return postalCode;
  }

  public void setPostalCode(String postalCode) {
    this.postalCode = postalCode;
  }

  public String getCity() {
    return city;
  }

  public void setCity(String city) {
    this.city = city;
  }

  public String getSsn() {
    return ssn;
  }

  public void setSsn(String ssn) {
    this.ssn = ssn;
  }

  public int getNumberOfShares() {
    return numberOfShares;
  }

  public void setNumberOfShares(int numberOfShares) {
    this.numberOfShares = numberOfShares;
  }

  public double getOwnershipPercentage() {
    return ownershipPercentage;
  }

  public void setOwnershipPercentage(double ownershipPercentage) {
    this.ownershipPercentage = ownershipPercentage;
  }
}
