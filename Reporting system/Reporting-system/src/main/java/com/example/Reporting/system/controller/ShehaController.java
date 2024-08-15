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
    public ResponseEntity<?> verifyEvent(@PathVariable Integer eventId, @RequestBody String description) {
        try {
            // Verify the event
            Event event = eventRepo.findById(eventId).orElseThrow();
            event.setVerified(true);
            eventRepo.save(event);

            // Find the officer and send notification email
            Officer officer = (Officer) officerRepo.findByEventType(event.getEvent_type()).orElseThrow();
            String officerTo = officer.getEmail();
            String officerSubject = "New Verified Event Needs Your Attention";
            String officerText = "Dear " + officer.getUsername() + ",\n\nAn event '" + event.getEvent_name() + "' in your department has been verified. Please take necessary action.\n\nThank you!";
            emailService.sendEmail(officerTo, officerSubject, officerText);

            // Send confirmation to Sheha
            String shehaTo = "sheha@example.com"; // You need to get the Sheha's email dynamically
            String shehaSubject = "Event Verification Successful";
            String shehaText = "Dear Sheha,\n\nThe event '" + event.getEvent_name() + "' has been successfully verified. Thank you for your attention.\n\nBest regards,\nYour System";
            emailService.sendEmail(shehaTo, shehaSubject, shehaText);

            return new ResponseEntity<>("Event verified and notifications sent.", HttpStatus.OK);
        } catch (Exception exception) {
            return new ResponseEntity<>("Verification failed.", HttpStatus.BAD_REQUEST);
        }
    }
}
