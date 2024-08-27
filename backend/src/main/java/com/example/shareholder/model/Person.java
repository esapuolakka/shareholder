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
}
