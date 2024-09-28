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
import org.springframework.web.bind.annotation.RequestParam;
import java.util.List;

import com.example.shareholder.model.ShareTransaction;
import com.example.shareholder.service.ShareTransactionService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/shareholders")
public class ShareTransactionController {

  private ShareTransactionService shareholderService;

  public ShareTransactionController(ShareTransactionService shareholderService) {
    this.shareholderService = shareholderService;
  }

  @GetMapping("/search")
  public ResponseEntity<List<ShareTransaction>> searchShareholders(@RequestParam(required = false) String search) {
    List<ShareTransaction> shareholders = shareholderService.searchShareholders(search);
    return ResponseEntity.ok().body(shareholders);
  }

  @GetMapping("/home")
  public ResponseEntity<String> home() {
    return ResponseEntity.ok("Welcome to Shareholder API");
  }

  @GetMapping
  public ResponseEntity<List<ShareTransaction>> getShareholders() {
    List<ShareTransaction> shareholders = shareholderService.getShareholders();
    return ResponseEntity.ok().body(shareholders);
  }

  @GetMapping("/{id}")
  public ResponseEntity<ShareTransaction> getShareholderById(@PathVariable Long id) {
    ShareTransaction shareholder = shareholderService.getShareholderById(id);
    return ResponseEntity.ok().body(shareholder);
  }

  @PostMapping("/add")
  public ResponseEntity<ShareTransaction> addShareholder(@RequestBody ShareTransaction shareholder) {
    ShareTransaction newShareholder = shareholderService.addShareholder(shareholder);
    return ResponseEntity.ok().body(newShareholder);
  }

  @PutMapping("/{id}")
  public ResponseEntity<ShareTransaction> updateShareholder(@PathVariable Long id, @RequestBody ShareTransaction shareholder) {
    ShareTransaction updatedShareholder = shareholderService.updateShareholder(id, shareholder);
    return ResponseEntity.ok().body(updatedShareholder);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<String> deleteShareholder(@PathVariable Long id) {
    shareholderService.deleteShareholder(id);
    return ResponseEntity.ok().body("Osakkeenomistaja poistettu onnistuneesti");
  }
}
