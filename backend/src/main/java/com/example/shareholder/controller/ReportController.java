package com.example.shareholder.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

import com.example.shareholder.model.Person;
import com.example.shareholder.model.Shareholder;
import com.example.shareholder.repository.PersonRepository;
import com.example.shareholder.repository.ShareholderRepository;
import com.example.shareholder.service.ReportService;

import jakarta.servlet.http.HttpServletResponse;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/report")
public class ReportController {

    @Autowired
    private ReportService reportService;

    @Autowired
    private PersonRepository personRepository;

    @Autowired
    private ShareholderRepository shareholderRepository;
    
    @GetMapping("/persons")
    public void exportPersonsToExcel(HttpServletResponse response) throws IOException {
        String title = "Osakasluettelo";
        String[] fields = new String[]{"id", "firstname", "lastname", "numberOfShares", "ownershipPercentage", "ssn", "city", "address", "email", "phone"};
        // get all user
        List<Person> data = personRepository.findAll();
        reportService.exportToExcel(response, data, fields, title);
    }

    @GetMapping("/shareholders")
    public void exportShareholdersToExcel(HttpServletResponse response) throws IOException {
        String title = "Merkintähistoria";
        String[] fields = new String[]{"id", "collectionDate", "term", "seller", "buyer", "transferTaxPaid", "numberOfShares", "pricePerShare", "totalAmount", "notes"};
        // get all history
        List<Shareholder> data = shareholderRepository.findAll();
        reportService.exportToExcel(response, data, fields, title);
    }
    
}
