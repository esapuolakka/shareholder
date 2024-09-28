package com.example.shareholder.model;


public class ShareClass {
  private String name = "A";
  private String description = "Normaali osake";

  public ShareClass() {
  }

  public ShareClass(String name, String description) {
    this.name = name;
    this.description = description;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }
}
