package com.example.shareholder.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

import com.example.shareholder.model.Person;
import com.example.shareholder.repository.PersonRepository;
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
    
    @GetMapping("/persons")
    public void exportToExcel(HttpServletResponse response) throws IOException {
        // get all user
        String title = "Osakasluettelo";
        String[] fields = new String[]{"id", "firstname", "lastname", "numberOfShares", "ownershipPercentage", "ssn", "city", "address", "email", "phone"};
        List<Person> data = personRepository.findAll();
        reportService.exportToExcel(response, data, fields, title);
    }
}
