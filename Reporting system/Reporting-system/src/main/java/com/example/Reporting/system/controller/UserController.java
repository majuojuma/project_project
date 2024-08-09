package com.example.Reporting.system.controller;

import com.example.Reporting.system.model.User;
import com.example.Reporting.system.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin("*")
@RestController
@RequestMapping("api/v1/user")
public class UserController {

    @Autowired
    private UserRepo userRepo;


    @PostMapping("/add")
    public ResponseEntity<?>addusers(@RequestBody User user){
       try{
           User user1 = userRepo.save(user);
           return new ResponseEntity<>("inserted", HttpStatus.OK);
       }catch (Exception exception){
           return new ResponseEntity<>("not inserted", HttpStatus.BAD_REQUEST);
       }
    }

    @GetMapping("/all")
    public List<User> getAll(){
        return userRepo.findAll();
    }

    @GetMapping("/login/{email}")
    public Optional<User> byEmail(@PathVariable String email){
        return userRepo.findByEmail(email);
    }

}
