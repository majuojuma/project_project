package com.example.Reporting.system.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int event_id;
    private String event_name;
    private String event_type;
    private String time_posted;
    private String event_location;
    @Lob
    @Column(length = 10000000)
    private  byte[] image;

  @ManyToOne
  @JoinColumn(name = "shehiaId")
  private Shehia shehia;


    @ManyToOne
    @JoinColumn(name = "person_id")
    private Person person;


}
