package com.example.shareholder.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import com.example.shareholder.model.Company;
import com.example.shareholder.service.CompanyService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/companies")
public class CompanyController {

    private final CompanyService companyService;

    public CompanyController(CompanyService companyService) {
        this.companyService = companyService;
    }

    @GetMapping
    public ResponseEntity<List<Company>> getCompanies() {
        List<Company> companies = companyService.getCompanies();
        return ResponseEntity.ok().body(companies);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Company> getCompanyById(@PathVariable Long id) {
        Company company = companyService.getCompanyById(id);
        return ResponseEntity.ok().body(company);
    }

    @PostMapping("/add")
    public ResponseEntity<Company> addCompany(@RequestBody Company company) {
        Company newCompany = companyService.addCompany(company);
        return ResponseEntity.ok().body(newCompany);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Company> updateCompany(@PathVariable Long id, @RequestBody Company company) {
        Company updatedCompany = companyService.updateCompany(id, company);
        return ResponseEntity.ok().body(updatedCompany);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCompany(@PathVariable Long id) {
        companyService.deleteCompany(id);
        return ResponseEntity.ok().body("Yhtiö poistettu onnistuneesti");
    }
}