package com.example.shareholder.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

import com.example.shareholder.service.ReportService;

import jakarta.servlet.http.HttpServletResponse;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/report")
public class ReportController {

    @Autowired
    ReportService reportService;

    @GetMapping("/persons")
    public void exportToExcel(HttpServletResponse response) throws IOException {
        this.reportService.exportToExcel(response);
    }
}
