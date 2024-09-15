package com.example.shareholder.util;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.shareholder.model.Person;
import com.example.shareholder.model.SharePrice;
import com.example.shareholder.model.Shareholder;
import com.example.shareholder.service.PersonService;
import com.example.shareholder.service.SharePriceService;
import com.example.shareholder.service.ShareholderService;


// Development use only
@Controller
@RequestMapping("/api/add-multiple-entities")
public class AddMultipleEntities {

  @Autowired
  private PersonService personService;

  @Autowired
  private ShareholderService shareholderService;

  @Autowired
  private SharePriceService sharePriceService;
  
  @PostMapping("/persons")
  public void addMultiplePersons(@RequestBody List<Person> persons) {
    for (Person person : persons) {
      personService.addPerson(person);
    }
  }

  @PostMapping("/shareholders")
  public void addMultipleShareholders(@RequestBody List<Shareholder> shareholders) {
    for (Shareholder shareholder : shareholders) {
      shareholderService.addShareholder(shareholder);
    }
  }

  @PostMapping("/shareprice")
  public void addMultipleSharePrices(@RequestBody List<SharePrice> sharePrices) {
    for (SharePrice sharePrice : sharePrices) {
      sharePriceService.addSharePrice(sharePrice);
    }
  }
}
