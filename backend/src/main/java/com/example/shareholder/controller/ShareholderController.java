package com.example.shareholder.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ShareholderController {

  @GetMapping("/home")
  public ResponseEntity<String> home() {
    return ResponseEntity.ok("Welcome to Shareholder API");
  }
}
