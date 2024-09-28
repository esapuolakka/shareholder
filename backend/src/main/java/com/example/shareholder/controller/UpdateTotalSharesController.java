package com.example.shareholder.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/updatetotalshares")
public class UpdateTotalSharesController {

  public String updateTotalShares() {
    return "Total shares updated";
  }
}
