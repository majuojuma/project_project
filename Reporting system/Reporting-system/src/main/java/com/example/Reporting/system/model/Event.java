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
    private String Status;
    @Lob
    @Column(length = 10000000)
    private  byte[] image;

  @ManyToOne
  @JoinColumn(name = "shehiaId")
  private Shehia shehia;


    @ManyToOne
    @JoinColumn(name = "person_id")
    private Person person;

//    @ManyToOne
//    @JoinColumn(name = "userId")
//    private Sheha sheha;


    public void setVerified(boolean b) {

    }

    public String getStatus() {
        return Status;
    }

    public void setStatus(String status) {
        Status = status;
    }
}
