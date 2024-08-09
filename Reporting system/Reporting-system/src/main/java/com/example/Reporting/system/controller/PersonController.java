package com.example.Reporting.system.controller;

import com.example.Reporting.system.model.Person;
import com.example.Reporting.system.repository.PersonRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/person")
public class PersonController {
    @Autowired
    public PersonRepo personRepo;

    @GetMapping("/all")
    public List<Person> all(){
        return personRepo.findAll();
    }

    @PostMapping("/add")
    public Person addPerson(@RequestBody  Person person){
        Person person1 = personRepo.save(person);
        return person1;
    }
}
