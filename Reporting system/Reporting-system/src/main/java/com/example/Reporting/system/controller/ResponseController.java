package com.example.Reporting.system.controller;

import com.example.Reporting.system.model.Event;
import com.example.Reporting.system.model.Officer;
import com.example.Reporting.system.model.Response;
import com.example.Reporting.system.repository.ResponseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/v1/response")
public class ResponseController {

    @Autowired
    private ResponseRepo responseRepo;

    @GetMapping("/all")
    public List<Response> getAll() {
        return responseRepo.findAll();
    }


    @PostMapping("/add")
    public ResponseEntity<?> addresponse(@RequestBody Response response) {
        try {
            Response response1 = responseRepo.save(response);
            return new ResponseEntity<>("inserted", HttpStatus.OK);
        } catch (Exception exception) {
            return new ResponseEntity<>("not inserted", HttpStatus.BAD_REQUEST);
        }
    }
    @PostMapping("/send")
    public ResponseEntity<?> sendResponse(@RequestBody Response response) {
        try {
            responseRepo.save(response);
            return new ResponseEntity<>("Response sent successfully.", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to send response.", HttpStatus.BAD_REQUEST);
        }
    }

//    @PutMapping("/update")
//    public String updateResponse(@PathVariable Integer responseId, @RequestBody Response response){
//        Response updatedResponse=responseRepo.findById(responseId).get();
//        updatedResponse.setstatus(response.getstatus).get();
//        updatedResponse.setresponseTime(response.getresponseTime).get();
//        responseRepo.save(updatedResponse);
//        return "response are updated";
//    }

}
