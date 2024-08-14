package com.example.Reporting.system.controller;


import com.example.Reporting.system.model.Shehia;
import com.example.Reporting.system.repository.ShehiaRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/v1/shehia")
public class ShehiaController {

    @Autowired
    private ShehiaRepo shehiaRepo;

    @GetMapping("/all")
    public List<Shehia> getAll(){
        return shehiaRepo.findAll();
    }

    @PostMapping("/add")
    public ResponseEntity<?> addshehia(@RequestBody Shehia shehia){
        try{
            Shehia shehia1 = shehiaRepo.save(shehia);
            return new ResponseEntity<>("inserted", HttpStatus.OK);
        }catch (Exception exception){
            return new ResponseEntity<>("not inserted", HttpStatus.BAD_REQUEST);
        }
    }
//    @PutMapping("/update")
//    public String updateShehia(@PathVariable Integer shehiaId, @RequestBody Shehia shehia){
//        Shehia updatedShehia=shehiaRepo.findById(shehiaId).get();
//        updatedShehia.setShehiaName(shehia.getShehiaName());
//        updatedShehia.setShehiaZone(shehia.getShehiaZone());
//        updatedShehia.setDistrict(shehia.getDistrict());
//        updatedShehia.setRegion(shehia.getRegion());
//        shehiaRepo.save(updatedShehia);
//        return "shehia are updated now";
//    }

}
