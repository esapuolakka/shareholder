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

    public List<Person> getPersons() {
        return personRepository.findAll();
    }

    public Person getPersonById(Long id) {
        return personRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Henkilöä ei löytynyt id:llä " + id));
    }

    public Person addPerson(Person person) {
        // Validointi ja tallennus logiikka
        // ...
        return personRepository.save(person);
    }

    public Person updatePerson(Long id, Person person) {
        // Päivitys logiikka
        // ...
        return personRepository.save(person);
    }

    public void deletePerson(Long id) {
        personRepository.deleteById(id);
    }
}