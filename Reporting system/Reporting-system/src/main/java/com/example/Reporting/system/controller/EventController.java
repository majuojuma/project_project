package com.example.Reporting.system.controller;

import com.example.Reporting.system.model.Event;
import com.example.Reporting.system.model.Person;
import com.example.Reporting.system.model.User;
import com.example.Reporting.system.repository.EventRepo;
import com.example.Reporting.system.repository.PersonRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/v1/event")
@CrossOrigin("*")
public class EventController {
    @Autowired
    private EventRepo eventRepo;

    @Autowired
    private PersonRepo personRepo;

    @PostMapping("add")
    public Event addEvent(
            @RequestParam("event_name") String event_name,
            @RequestParam("event_type") String event_type,
            @RequestParam("time_posted") String time_posted,
            @RequestParam("event_location") String event_location,
            @RequestParam("image")MultipartFile image)throws IOException{
        Event event= new Event();

        event.setEvent_name(event_name);
        event.setEvent_type(event_type);
        event.setTime_posted(time_posted);
        event.setEvent_location(event_location);
        event.setImage(image.getBytes());

        Person person = personRepo.findById(1).orElseThrow(); // assume person with id 1 exists
        event.setPerson(person);

        return eventRepo.save(event);
    }

    @GetMapping("/all")
    public List<Event> getAll(){
        return eventRepo.findAll();
    }

}
