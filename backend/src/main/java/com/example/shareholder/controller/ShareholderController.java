package com.example.shareholder.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import com.example.shareholder.model.Shareholder;
import com.example.shareholder.service.ShareholderService;

@RestController
@RequestMapping("/api")
public class ShareholderController {

  private ShareholderService shareholderService;

  public ShareholderController(ShareholderService shareholderService) {
    this.shareholderService = shareholderService;
  }

  @GetMapping("/home")
  public ResponseEntity<String> home() {
    return ResponseEntity.ok("Welcome to Shareholder API");
  }

  @GetMapping("/shareholders")
  public ResponseEntity<List<Shareholder>> getShareholders() {
    List<Shareholder> shareholders = shareholderService.getShareholders();
    return ResponseEntity.ok().body(shareholders);
  }
}
