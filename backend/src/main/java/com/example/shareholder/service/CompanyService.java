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
                .orElseThrow(() -> new IllegalArgumentException("Company not found with id: " + id));
    }

    public Company addCompany(Company company) {
        return companyRepository.save(company);
    }

    public void deleteCompany(Long id) {
        companyRepository.deleteById(id);
    }

    public Company updateCompany(Long id, Company company) {
        Company existingCompany = companyRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Company not found with id: " + id));

        existingCompany.setBusinessId(company.getBusinessId());
        existingCompany.setAddress(company.getAddress());
        existingCompany.setName(company.getName());

        return companyRepository.save(existingCompany);
    }

    public List<Company> searchCompanies(String search) {
        if (search == null || search.isEmpty()) {
            return getCompanies();
        }
        return companyRepository.findByBusinessIdContainingIgnoreCase(search);
    }
}
