package com.example.Reporting.system.controller;

import com.example.Reporting.system.model.Event;
import com.example.Reporting.system.model.Officer;
import com.example.Reporting.system.model.Sheha;
import com.example.Reporting.system.model.User;
import com.example.Reporting.system.repository.EventRepo;
import com.example.Reporting.system.repository.OfficerRepo;
import com.example.Reporting.system.repository.ShehaRepo;
import com.example.Reporting.system.service.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/v1/sheha")
public class ShehaController {
    @Autowired
    private ShehaRepo shehaRepo;

    @Autowired
    private EventRepo eventRepo;

    @Autowired
    private OfficerRepo officerRepo;

    @Autowired
    private Service emailService;

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

    @PostMapping("/verify/{eventId}")
    public ResponseEntity<?> verifyEvent(@PathVariable Integer eventId) {
        try {
            Event event = eventRepo.findById(Math.toIntExact(eventId)).orElseThrow();
            event.setVerified(true); // Assuming there is a field to mark an event as verified
            eventRepo.save(event);

            // Send email to the relevant officer
            Officer officer = (Officer) officerRepo.findByEventType(event.getEvent_type()).orElseThrow(); // Assuming you have a method to get the officer by event type
            String officerTo = officer.getEmail();
            String officerSubject = "New Verified Event Needs Your Attention";
            String officerText = "Dear " + officer.getUsername() + ",\n\nAn event '" + event.getEvent_name() + "' in your department has been verified. Please take necessary action.\n\nThank you!";
            emailService.sendEmail(officerTo, officerSubject, officerText);

            return new ResponseEntity<>("Event verified and officer notified.", HttpStatus.OK);
        } catch (Exception exception) {
            return new ResponseEntity<>("Verification failed.", HttpStatus.BAD_REQUEST);
        }
    }
}
