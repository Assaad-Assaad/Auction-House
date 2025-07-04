package be.ehb.auctionhousebackend.service;


import be.ehb.auctionhousebackend.exception.ResourceException;
import be.ehb.auctionhousebackend.model.Person;
import be.ehb.auctionhousebackend.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class PersonService {

    private final PersonRepository personRepository;

    @Autowired
    public PersonService(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    public List<Person> findAll() {
        return personRepository.findAll();
    }

    public Person save(Person person) {
        return personRepository.save(person);
    }

    public Person findById(String id) {
        return personRepository.findById(id)
                .orElseThrow(() -> new ResourceException("Auction with id: " + id + " not found"));
    }

    public List<Person> findByName(String name) {
       return personRepository.findByNameContaining(name);
    }
}
