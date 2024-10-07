package com.example.shareholder.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import com.example.shareholder.model.Company;
import com.example.shareholder.repository.CompanyRepository;

@Service
public class CompanyService {

    @Autowired
    private CompanyRepository companyRepository;

    public List<Company> getCompanies() {
        return companyRepository.findAll();
    }

    public Company getCompanyById(Long id) {
        return companyRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Yhtiötä ei löytynyt id:llä " + id));
    }

    public Company addCompany(Company company) {
        return companyRepository.save(company);
    }

    public Company updateCompany(Long id, Company company) {
        Company existingCompany = companyRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Yhtiötä ei löytynyt " + id));

        existingCompany.setName(company.getName());
        existingCompany.setCompanyId(company.getCompanyId());
        existingCompany.setCity(company.getCity());
        existingCompany.setUrl(company.getUrl());

        return companyRepository.save(existingCompany);
    }

    public void deleteCompany(Long id) {
        companyRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Yhtiötä ei löytynyt id:llä " + id));

        companyRepository.deleteById(id);
    }
}