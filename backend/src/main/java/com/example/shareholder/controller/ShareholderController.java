package com.example.shareholder.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

import com.example.shareholder.model.Person;
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

  @GetMapping("/shareholders/{id}")
  public ResponseEntity<Shareholder> getShareholderById(@PathVariable Long id) {
    Shareholder shareholder = shareholderService.getShareholderById(id);
    return ResponseEntity.ok().body(shareholder);
  }

  @PostMapping("/shareholders/add")
  public ResponseEntity<Shareholder> addShareholder(@RequestBody Shareholder shareholder) {
    Shareholder newShareholder = shareholderService.addShareholder(shareholder);
    return ResponseEntity.ok().body(newShareholder);
  }

  // Development only
  @PostMapping("/shareholders/add-many")
  public ResponseEntity<List<Shareholder>> addManyShareholders(@RequestBody List<Shareholder> shareholders) {
    List<Shareholder> newShareholders = shareholderService.addManyShareholders(shareholders);
    return ResponseEntity.ok().body(newShareholders);
  }

  @PutMapping("/shareholders/{id}")
  public ResponseEntity<Shareholder> updateShareholder(@PathVariable Long id, @RequestBody Shareholder shareholder) {
    Shareholder updatedShareholder = shareholderService.updateShareholder(id, shareholder);
    return ResponseEntity.ok().body(updatedShareholder);
  }

  @DeleteMapping("/shareholders/{id}")
  public ResponseEntity<String> deleteShareholder(@PathVariable Long id) {
    shareholderService.deleteShareholder(id);
    return ResponseEntity.ok().body("Osakkeenomistaja poistettu onnistuneesti");
  }

  @GetMapping("/persons")
  public ResponseEntity<List<Person>> getPersons() {
    List<Person> persons = shareholderService.getPersons();
    return ResponseEntity.ok().body(persons);
  }

  @GetMapping("/persons/{id}")
  public ResponseEntity<Person> getPersonById(@PathVariable Long id) {
    Person person = shareholderService.getPersonById(id);
    return ResponseEntity.ok().body(person);
  }

  @PostMapping("/persons/add")
  public ResponseEntity<Person> addPerson(@RequestBody Person person) {
    Person newPerson = shareholderService.addPerson(person);
    return ResponseEntity.ok().body(newPerson);
  }

  @PutMapping("/persons/{id}")
  public ResponseEntity<Person> updatePerson(@PathVariable Long id, @RequestBody Person person) {
    Person updatedPerson = shareholderService.updatePerson(id, person);
    return ResponseEntity.ok().body(updatedPerson);
  }

  @DeleteMapping("/persons/{id}")
  public ResponseEntity<String> deletePerson(@PathVariable Long id) {
    shareholderService.deletePerson(id);
    return ResponseEntity.ok().body("Henkilö poistettu onnistuneesti");
  }
}
