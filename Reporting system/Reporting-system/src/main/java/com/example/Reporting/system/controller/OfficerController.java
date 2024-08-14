package com.example.Reporting.system.controller;

import com.example.Reporting.system.model.Officer;
import com.example.Reporting.system.repository.OfficerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/v1/officer")
public class OfficerController {

    @Autowired
    private OfficerRepo officerRepo;

    @GetMapping("/all")
    public List<Officer> getAll() {
        return officerRepo.findAll();
    }

    @PostMapping("/add")
    public ResponseEntity<?> addOfficer(@RequestBody Officer officer) {
        try {
            Officer officer1 = officerRepo.save(officer);
            return new ResponseEntity<>("inserted", HttpStatus.OK);
        } catch (Exception exception) {
            return new ResponseEntity<>("not inserted", HttpStatus.BAD_REQUEST);
        }
    }
}
