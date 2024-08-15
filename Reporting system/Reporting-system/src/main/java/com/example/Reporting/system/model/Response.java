package com.example.Reporting.system.model;

import jakarta.persistence.*;

@Entity
@Table(name = "response")
public class Response {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private Integer eventId;
    private String officerName;
    private String center;
    private String responseMessage;

  

    @ManyToOne
    @JoinColumn(name = "user_id")
    private Officer officer;



    // Getters and setters
}
