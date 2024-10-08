package com.example.shareholder.service;

import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.HorizontalAlignment;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.xssf.usermodel.XSSFFont;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.List;
import java.io.IOException;

import jakarta.servlet.ServletOutputStream;
import jakarta.servlet.http.HttpServletResponse;

import java.text.SimpleDateFormat;
import java.util.Date;  

@Service
public class ExportToExcelService {

  public XSSFWorkbook workbook;
  public XSSFSheet sheet;

  public void newReportExcel() {
    workbook = new XSSFWorkbook();
  }

  public HttpServletResponse initResponseForExportExcel(HttpServletResponse response, String fileName) {
    response.setContentType("application/octet-stream");

    SimpleDateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    String currentDateTime = dateFormatter.format(new Date());

    String headerKey = "Content-Disposition";
    String headerValue = "attachment; filename=" + fileName + "_" + currentDateTime + ".xlsx";
    response.setHeader(headerKey, headerValue);
    return response;
  }

  public void writeTableHeaderExcel(String sheetName, String titleName, String[] fields) {
    // sheet
    sheet = workbook.createSheet(sheetName);
    org.apache.poi.ss.usermodel.Row row = sheet.createRow(0);
    CellStyle style = workbook.createCellStyle();
    XSSFFont font = workbook.createFont();
    font.setBold(true);
    font.setFontHeight(20);
    style.setFont(font);
    style.setAlignment(HorizontalAlignment.CENTER);

    // title
    createCell(row, 0, titleName, style);
    sheet.addMergedRegion(new CellRangeAddress(0, 0, 0, fields.length - 1));
    font.setFontHeightInPoints((short) 10);

    // header
    row = sheet.createRow(1);
    font.setBold(true);
    font.setFontHeight(16);
    style.setFont(font);

    int i = 0; 
    for (String field : fields) {
        createCell(row, i, field, style);
        i++;
    }
  }

  public void createCell(org.apache.poi.ss.usermodel.Row row, int columnCount, Object value, CellStyle style) {
      sheet.autoSizeColumn(columnCount);
      org.apache.poi.ss.usermodel.Cell cell = row.createCell(columnCount);
      if (value instanceof Integer) {
          cell.setCellValue((Integer) value);
      } else if (value instanceof Double) {
          cell.setCellValue((Double) value);
      } else if (value instanceof Boolean) {
          cell.setCellValue((Boolean) value);
      } else if (value instanceof Long) {
          cell.setCellValue((Long) value);
      } else {
          cell.setCellValue((String) value.toString());
      }
      cell.setCellStyle(style);
  }

  public CellStyle getFontContentExcel() {
      CellStyle style = workbook.createCellStyle();
      XSSFFont font = workbook.createFont();
      font.setFontHeight(14);
      style.setFont(font);
      style.setAlignment(HorizontalAlignment.LEFT);
      return style;
  }

public void writeTableData(List<Map<String, Object>> records, String[] fields) {

      // font style content
      CellStyle style = getFontContentExcel();

      // starting write on row
      int startRow = 2;

      // write content
      for (Map<String, Object> record : records) {
        Row row = sheet.createRow(startRow++);
        int columnCount = 0;
        for (String fieldName : fields) {
          String value = record.get(fieldName).toString();
          createCell(row, columnCount++, value, style);
        } 
      }
  }

  public void exportToExcel(HttpServletResponse response, List<Map<String, Object>> data, String[] fields, String title) throws IOException {
    newReportExcel();
    // response writer to excel
    response = initResponseForExportExcel(response, title);
    ServletOutputStream outputStream = response.getOutputStream();

    // write sheet, title & header
    writeTableHeaderExcel(title + "Sheet", title, fields);

    // write content row
    writeTableData(data, fields);

    workbook.write(outputStream);
    workbook.close();
    outputStream.close();
  }

}
