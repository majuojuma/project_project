package com.example.Reporting.system.model;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Timestamp;

@Entity
@Table(name = "response")
@Data
public class Response {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String responseMessage;
    
    @CreationTimestamp
    private Timestamp response_Time;

  

    @ManyToOne
    @JoinColumn(name = "user_id")
    private Officer officer;

    @ManyToOne
    @JoinColumn(name = "event_id")
    private Event event;



    // Getters and setters
}
