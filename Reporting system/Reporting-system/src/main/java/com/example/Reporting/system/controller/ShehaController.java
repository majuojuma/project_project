package com.example.Reporting.system.controller;

import com.example.Reporting.system.model.Sheha;
import com.example.Reporting.system.model.User;
import com.example.Reporting.system.repository.ShehaRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/sheha")
public class ShehaController {
    @Autowired
    private ShehaRepo shehaRepo;

    @PostMapping("/add")
    public ResponseEntity<?> addusers(@RequestBody Sheha sheha){
        try{
            User user1 = shehaRepo.save(sheha);
            return new ResponseEntity<>("inserted", HttpStatus.OK);
        }catch (Exception exception){
            return new ResponseEntity<>("not inserted", HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/all")
    public List<Sheha> getAll(){
        return shehaRepo.findAll();
    }
}
