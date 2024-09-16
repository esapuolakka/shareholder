package com.example.shareholder.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import com.example.shareholder.model.Person;
import com.example.shareholder.repository.PersonRepository;

@Service
public class PersonService {

    @Autowired
    private PersonRepository personRepository;

    @Autowired
    private OwnerPercentageCalculator ownerPercentageCalculator;

    @Autowired
    private ShareTransactionService shareTransactionService;

    public List<Person> getPersons() {
        return personRepository.findAll();
    }

    public Person getPersonById(Long id) {
        return personRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Henkilöä ei löytynyt id:llä " + id));
    }

    public Person addPerson(Person person) {
        if (person.getFirstname() == null || person.getLastname() == null || person.getEmail() == null
                || person.getPhone() == null || person.getNumberOfShares() == 0 || person.getAddress() == null
                || person.getPostalCode() == null || person.getCity() == null || person.getBankAccount() == null) {
            throw new IllegalArgumentException("Kentät ovat pakollisia");
        }
        // Calculate ownership percentage
        double ownerPercentage = ownerPercentageCalculator.calculateOwnerPercentage(person.getNumberOfShares());
        person.setOwnershipPercentage(ownerPercentage);

        return personRepository.save(person);
    }

    public Person updatePerson(Long id, Person person) {
        Person existingPerson = personRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Henkilöä ei löytynyt " + id));

        existingPerson.setFirstname(person.getFirstname());
        existingPerson.setLastname(person.getLastname());
        existingPerson.setEmail(person.getEmail());
        existingPerson.setPhone(person.getPhone());
        existingPerson.setAddress(person.getAddress());
        existingPerson.setPostalCode(person.getPostalCode());
        existingPerson.setCity(person.getCity());
        existingPerson.setNumberOfShares(person.getNumberOfShares());
        existingPerson.setBankAccount(person.getBankAccount());

        // Calculate ownership percentage
        double ownerPercentage = ownerPercentageCalculator.calculateOwnerPercentage(existingPerson.getNumberOfShares());
        existingPerson.setOwnershipPercentage(ownerPercentage);

        return personRepository.save(existingPerson);
    }

    public void deletePerson(Long id) {
        Person personToDelete = personRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Henkilöä ei löytynyt id:llä " + id));
        personRepository.deleteById(personToDelete.getId());
        // Update total share count
        shareTransactionService.updateTotalShareCount();
    }
}