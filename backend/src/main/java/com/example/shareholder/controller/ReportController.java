package com.example.shareholder.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;
import java.util.Map;
import java.util.HashMap;

import com.example.shareholder.model.Person;
import com.example.shareholder.model.ShareTransaction;
import com.example.shareholder.repository.PersonRepository;
import com.example.shareholder.service.ReportService;
import com.example.shareholder.service.ShareTransactionService;

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
    private ShareTransactionService shareTransactionService;
    
    @GetMapping("/persons")
    public void exportPersonsToExcel(HttpServletResponse response) throws IOException {
        String title = "Osakasluettelo";
        String[] fields = new String[]{"id", "firstname", "lastname", "numberOfShares", "ssn", "city", "address", "email", "phone"};
        // get all user
        List<Person> data = personRepository.findAll();

        List<Map<String, Object>> excelData = data.stream()
        .<Map<String, Object>>map(person -> {
            Map<String, Object> map = new HashMap<>();
            map.put("id", person.getId());
            map.put("firstname", person.getFirstname().toString());
            map.put("lastname", person.getLastname().toString());
            map.put("numberOfShares", Integer.toString(person.getNumberOfShares()));
            map.put("ssn", person.getSsn().toString());
            map.put("city", person.getCity().toString());
            map.put("address", person.getAddress().toString());
            map.put("email", person.getEmail().toString());
            map.put("phone", person.getPhone().toString());
            return map;
        })
        .collect(Collectors.toList());
        reportService.exportToExcel(response, excelData, fields, title);
    }

    @GetMapping("/transactions")
    public void exportShareholdersToExcel(HttpServletResponse response) throws IOException {
        String title = "Merkintähistoria";
        String[] fields = new String[]{"id", "collectionDate", "term", "seller_name", "buyer_name", "transferTaxPaid", "numberOfShares", "pricePerShare", "totalAmount", "notes", "status"};
        // get all history
        List<ShareTransaction> data = shareTransactionService.getShareTransactions();
        
        List<Map<String, Object>> excelData = data.stream()
        .<Map<String, Object>>map(transaction -> {
            Map<String, Object> map = new HashMap<>();
            map.put("id", transaction.getId());
            map.put("collectionDate", transaction.getCollectionDate().toString());
            map.put("term", transaction.getTerm().toString());
            map.put("seller_name", transaction.getSeller().getFirstname() + " " + transaction.getSeller().getLastname()); // Flatten seller name
            map.put("buyer_name", transaction.getBuyer().getFirstname() + " " + transaction.getBuyer().getLastname());    // Flatten buyer name
            map.put("transferTaxPaid", transaction.isTransferTaxPaid());
            map.put("numberOfShares", transaction.getNumberOfShares());
            map.put("pricePerShare", transaction.getPricePerShare());
            map.put("totalAmount", transaction.getTotalAmount());
            map.put("notes", transaction.getNotes());
            map.put("status", transaction.getStatus());
            return map;
        })
        .collect(Collectors.toList());

        reportService.exportToExcel(response, excelData, fields, title);
    }
    
}
