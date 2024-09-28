package com.example.shareholder.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.shareholder.model.SharePrice;
import com.example.shareholder.service.SharePriceService;

@Controller
@RequestMapping("/api/shareprice")
public class SharePriceController {

  @Autowired
  private SharePriceService sharePriceService;

  @GetMapping("/all")
  public ResponseEntity<Iterable<SharePrice>> getAllSharePrices() {
    Iterable<SharePrice> sharePrices = sharePriceService.getAllSharePrices();
    return ResponseEntity.ok().body(sharePrices);
  }

  @GetMapping("/{id}")
  public ResponseEntity<SharePrice> getSharePrice(@PathVariable Long id) {
    SharePrice sharePrice = sharePriceService.getSharePrice(id);
    return ResponseEntity.ok().body(sharePrice);
  }

  @PostMapping("/add")
  public ResponseEntity<SharePrice> addSharePrice(@RequestBody SharePrice sharePrice) {
    SharePrice newSharePrice = sharePriceService.addSharePrice(sharePrice);
    return ResponseEntity.ok().body(newSharePrice);
  }
  
  @PutMapping("/{id}")
  public ResponseEntity<SharePrice> updateSharePrice(@PathVariable Long id, @RequestBody SharePrice newSharePrice) {
    SharePrice updatedSharePrice = sharePriceService.updateSharePrice(id, newSharePrice);
    return ResponseEntity.ok().body(updatedSharePrice);
  };

  @DeleteMapping("/{id}")
  public ResponseEntity<?> deleteSharePrice(@PathVariable Long id) {
    sharePriceService.deleteSharePrice(id);
    return ResponseEntity.ok().build();
  }
}
