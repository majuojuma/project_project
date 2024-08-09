package com.example.Reporting.system.model;

import jakarta.persistence.*;

@Entity
@Table(name = "response")
public class Response {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer responseId;

    private String status;

    private String responseTime;

    @ManyToOne
    private Event event;

    @ManyToOne
    private Officer officer;

    // getters and setters
}