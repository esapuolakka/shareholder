package com.example.shareholder.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

import java.io.IOException;

import jakarta.servlet.http.HttpServletResponse;

@Service
public class ReportService {

    @Autowired
    private ExportToExcelService exportToExcelService;

    public void exportToExcel(HttpServletResponse response, List<Map<String, Object>> data, String[] fields, String title) throws IOException {
        // export to pdf
        exportToExcelService.exportToExcel(response, data, fields, title);

    }
}