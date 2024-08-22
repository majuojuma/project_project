package com.example.Reporting.system.controller;

import com.example.Reporting.system.model.*;
import com.example.Reporting.system.repository.EventRepo;
import com.example.Reporting.system.repository.PersonRepo;
import com.example.Reporting.system.repository.ShehaRepo;
import com.example.Reporting.system.repository.ShehiaRepo;
import com.example.Reporting.system.service.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/event")
@CrossOrigin("*")
public class EventController {
    @Autowired
    private EventRepo eventRepo;

    @Autowired
    private PersonRepo personRepo;

    @Autowired
    private ShehaRepo shehaRepo;

    @Autowired
    private ShehiaRepo shehiaRepo;

    @Autowired
    private Service emailService;



    @PatchMapping("/{eventId}/unapprove")
    public ResponseEntity<Event> unapproveEvent(@PathVariable int eventId) {
        Optional<Event> eventOptional = eventRepo.findById(eventId);

        if (eventOptional.isPresent()) {
            Event eventToUpdate = eventOptional.get();
            eventToUpdate.setStatus("unapproved");
            eventRepo.save(eventToUpdate);
            return ResponseEntity.ok(eventToUpdate);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @PatchMapping("/{eventId}/proved")
    public ResponseEntity<Event> provedEvent(@PathVariable int eventId){
        Optional<Event> eventOptional = eventRepo.findById(eventId);

        if (eventOptional.isPresent()){
            Event eventToUpdate = eventOptional.get();
            eventToUpdate.setStatus("Approved"); // Update the event status
            eventRepo.save(eventToUpdate);
            return ResponseEntity.ok(eventToUpdate);
        }else {
            return ResponseEntity.notFound().build();
        }
    }



    @PostMapping("/add")
    public Event addEvent(
            @RequestParam("event_name") String event_name,
            @RequestParam("event_type") String event_type,
            @RequestParam("time_posted") String time_posted,
            @RequestParam("event_location") String event_location,
            @RequestParam("image") MultipartFile image,
            @RequestParam("shehiaId") Long shehiaId,
            @RequestParam("person_id") int personId) throws IOException {

        Event event = new Event();

        event.setEvent_name(event_name);
        event.setEvent_type(event_type);
        event.setTime_posted(time_posted);
        event.setEvent_location(event_location);
        event.setImage(image.getBytes());

        Shehia shehia = shehiaRepo.findById(shehiaId).orElseThrow();
        event.setShehia(shehia);

        Person person = personRepo.findById(personId).orElseThrow();
        event.setPerson(person);

        Event savedEvent = eventRepo.save(event);

        // Send email to the person who posted the event
        String to = person.getEmail();
        String subject = "Event Posted Successfully";
        String text = "Dear " + person.getUsername() + ",\n\nYour event '" + event_name + "' has been posted successfully.\n\nThank you!";
        emailService.sendEmail(to, subject, text);

        // Send email to the Sheha to verify the event
        Sheha sheha = (Sheha) shehaRepo.findByShehia(shehia).orElseThrow();
        String shehaTo = sheha.getEmail();
        String shehaSubject = "New Event Posted in Your Shehia";
        String shehaText = "Dear " + sheha.getUsername() + ",\n\nA new event '" + event_name + "' has been posted in your Shehia. Please verify the event by clicking the link below:\n\n<verification_link>\n\nThank you!";
        emailService.sendEmail(shehaTo, shehaSubject, shehaText);

        return savedEvent;
    }
    @GetMapping("/all")
    public List<Event> getAll(){
        return eventRepo.findAll();
    }

    @GetMapping("getbyid/{event_id}")
    public ResponseEntity<?> getEventById(@PathVariable int event_id){
        try {
            Optional<Event> optionalEvent = eventRepo.findById(event_id);
            if (optionalEvent.isPresent()){
                return new ResponseEntity<>(optionalEvent.get(),HttpStatus.OK); // Return the actual event
            }
            else {
                return new ResponseEntity<>("Event not found", HttpStatus.NOT_FOUND);
            }
        }catch (Exception e){
            return new ResponseEntity<>("An error occurred", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/update/{eventId}")
    public String updateEvent(@PathVariable Integer eventId, @RequestParam Map<String, String> requestParams,
                              @RequestParam("image") MultipartFile image) throws IOException {
        Event updatedEvent = eventRepo.findById(eventId).orElseThrow();
        updatedEvent.setEvent_name(requestParams.get("event_name"));
        updatedEvent.setEvent_type(requestParams.get("event_type"));
        updatedEvent.setEvent_location(requestParams.get("event_location"));
        updatedEvent.setTime_posted(requestParams.get("time_posted"));

        if (!image.isEmpty()) {
            updatedEvent.setImage(image.getBytes());
        }

        eventRepo.save(updatedEvent);
        return "Event updated successfully";
    }


    @GetMapping("/count")
    public ResponseEntity<Long> countEvent(){
        long count = eventRepo.count();
        return new ResponseEntity<>(count, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{event_id}")
    public ResponseEntity<?>  delete(@PathVariable int event_id){
        Optional<Event> eventOptional = eventRepo.findById(event_id);
        if (eventOptional.isPresent()){
            eventRepo.deleteById(event_id);
            return new ResponseEntity<>("Event Deleted Successfully",HttpStatus.OK);
        }else {
            return new ResponseEntity<>("No event with id "+ event_id,HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping("/byShehia/{shehiaId}")
    public List<Event> getEventsByShehia(@PathVariable Long shehiaId) {
        return eventRepo.findByShehia_ShehiaId(shehiaId);
    }

    @PutMapping("/update")
    public String updateEvent(@PathVariable Integer eventId, @RequestBody Event event){
        Event updatedEvent = eventRepo.findById(eventId).get();
        updatedEvent.setEvent_name(event.getEvent_name());
        updatedEvent.setEvent_type(event.getEvent_type());
        updatedEvent.setEvent_location(event.getEvent_location());
        updatedEvent.setTime_posted(event.getTime_posted());
        eventRepo.save(updatedEvent);
        return "one event are updated";
    }



}

