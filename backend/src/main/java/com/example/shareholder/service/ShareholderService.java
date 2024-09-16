package com.example.shareholder.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

import com.example.shareholder.model.Person;
import com.example.shareholder.model.Shareholder;
import com.example.shareholder.repository.PersonRepository;
import com.example.shareholder.repository.ShareholderRepository;

@Service
public class ShareholderService {

  @Autowired
  private ShareholderRepository shareholderRepository;

  @Autowired
  private PersonRepository personRepository;

  public List<Shareholder> getShareholders() {
    return shareholderRepository.findAll();
  }

  public Shareholder getShareholderById(Long id) {
    return shareholderRepository.findById(id)
        .orElseThrow(() -> new IllegalArgumentException("Osakkeenomistajaa ei löytynyt id:llä " + id));
  }

  public Shareholder addShareholder(Shareholder shareholder) {
    if (!personRepository.existsById(shareholder.getBuyer().getId())) {
      throw new IllegalArgumentException("Ostajaa ei löydy annetulla ID:llä: " + shareholder.getBuyer().getId());
    }
    if (!personRepository.existsById(shareholder.getSeller().getId())) {
      throw new IllegalArgumentException("Myyjää ei löydy annetulla ID:llä: " + shareholder.getSeller().getId());
    }
    if (shareholder.getCollectionDate() == null || shareholder.getTerm() == null || shareholder.getNumberOfShares() == 0
        || shareholder.getPricePerShare() == null) {
      throw new IllegalArgumentException("Kentät ovat pakollisia");
    }
    if (shareholder.getNumberOfShares() < 0) {
      throw new IllegalArgumentException("Osakkeiden lukumäärä ei voi olla negatiivinen");
    }
    if (shareholder.getPricePerShare().compareTo(BigDecimal.ZERO) < 0) {
      throw new IllegalArgumentException("Osakkeen hinta ei voi olla negatiivinen");
    }
    if (shareholder.getBuyer().getId() == shareholder.getSeller().getId()) {
      throw new IllegalArgumentException("Myyjä ja ostaja eivät voi olla sama henkilö");
    }

    // Calculate total amount
    BigDecimal numberOfShares = BigDecimal.valueOf(shareholder.getNumberOfShares());
    shareholder.setTotalAmount(numberOfShares.multiply(shareholder.getPricePerShare()));

    return shareholderRepository.save(shareholder);
  }

  // Devemopment only
  public List<Shareholder> addManyShareholders(List<Shareholder> shareholders) {
    for (Shareholder shareholder : shareholders) {
      addShareholder(shareholder);
    }
    return shareholders;
  }

  public void deleteShareholder(Long id) {
    shareholderRepository.deleteById(id);
  }

  public Shareholder updateShareholder(Long id, Shareholder shareholder) {
    Shareholder existingShareholder = shareholderRepository.findById(id)
        .orElseThrow(() -> new IllegalArgumentException("Osakkeenomistajaa ei löytynyt id:llä " + id));

    existingShareholder.setCollectionDate(shareholder.getCollectionDate());
    existingShareholder.setTerm(shareholder.getTerm());
    existingShareholder.setSeller(shareholder.getSeller());
    existingShareholder.setBuyer(shareholder.getBuyer());
    existingShareholder.setTransferTaxPaid(shareholder.isTransferTaxPaid());
    existingShareholder.setNumberOfShares(shareholder.getNumberOfShares());
    existingShareholder.setPricePerShare(shareholder.getPricePerShare());

    BigDecimal numberOfShares = BigDecimal.valueOf(existingShareholder.getNumberOfShares());
    existingShareholder.setTotalAmount(numberOfShares.multiply(existingShareholder.getPricePerShare()));

    return shareholderRepository.save(existingShareholder);
  }

  public List<Person> getPersons() {
    return personRepository.findAll();
  }

  public Person getPersonById(Long id) {
    return personRepository.findById(id)
        .orElseThrow(() -> new IllegalArgumentException("Henkilöä ei löytynyt id:llä " + id));
  }

  public Person addPerson(Person person) {
    if (person.getFirstname() == null || person.getLastname() == null || person.getEmail() == null
        || person.getPhone() == null) {
      throw new IllegalArgumentException("Kentät ovat pakollisia");
    }
    return personRepository.save(person);
  }

  public void deletePerson(Long id) {
    personRepository.deleteById(id);
  }

  public Person updatePerson(Long id, Person person) {
    Person existingPerson = personRepository.findById(id)
        .orElseThrow(() -> new IllegalArgumentException("Henkilöä ei löytynyt id:llä " + id));

    existingPerson.setFirstname(person.getFirstname());
    existingPerson.setLastname(person.getLastname());
    existingPerson.setEmail(person.getEmail());
    existingPerson.setPhone(person.getPhone());
    existingPerson.setAddress(person.getAddress());
    existingPerson.setPostalCode(person.getPostalCode());
    existingPerson.setCity(person.getCity());
    existingPerson.setBankAccount(person.getBankAccount());

    return personRepository.save(existingPerson);
  }
}
