package com.example.shareholder.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import java.io.IOException;

import com.example.shareholder.model.Person;
import com.example.shareholder.repository.PersonRepository;

import jakarta.servlet.http.HttpServletResponse;

@Service
public class ReportService {

    @Autowired
    private PersonRepository personRepository;

    @Autowired
    private ExportToExcelService exportToExcelService;

    public void exportToExcel(HttpServletResponse response) throws IOException {
        // get all user
        List<Person> data = personRepository.findAll();

        // export to pdf
        exportToExcelService.exportToExcel(response, data);

    }
}