package be.ehb.auctionhousebackend.repository;


import be.ehb.auctionhousebackend.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PersonRepository extends JpaRepository<Person, String> {

    List<Person> findByNameContaining(String name);
    Optional<Person> findByEmail(String email);
}
