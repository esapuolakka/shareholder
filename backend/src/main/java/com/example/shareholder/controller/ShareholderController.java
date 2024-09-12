package com.example.shareholder.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

import com.example.shareholder.model.Shareholder;
import com.example.shareholder.service.ShareholderService;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/shareholders")
public class ShareholderController {

  private ShareholderService shareholderService;

  public ShareholderController(ShareholderService shareholderService) {
    this.shareholderService = shareholderService;
  }

  @GetMapping("/search")
  public ResponseEntity<List<Shareholder>> searchShareholders(@RequestParam(required = false) String search) {
    List<Shareholder> shareholders = shareholderService.searchShareholders(search);
    return ResponseEntity.ok().body(shareholders);
  }

  @GetMapping("/home")
  public ResponseEntity<String> home() {
    return ResponseEntity.ok("Welcome to Shareholder API");
  }

  @GetMapping
  public ResponseEntity<List<Shareholder>> getShareholders() {
    List<Shareholder> shareholders = shareholderService.getShareholders();
    return ResponseEntity.ok().body(shareholders);
  }

  @GetMapping("/{id}")
  public ResponseEntity<Shareholder> getShareholderById(@PathVariable Long id) {
    Shareholder shareholder = shareholderService.getShareholderById(id);
    return ResponseEntity.ok().body(shareholder);
  }

  @PostMapping("/add")
  public ResponseEntity<Shareholder> addShareholder(@RequestBody Shareholder shareholder) {
    Shareholder newShareholder = shareholderService.addShareholder(shareholder);
    return ResponseEntity.ok().body(newShareholder);
  }

}
