package com.example.Reporting.system.model;

import jakarta.persistence.Entity;
import lombok.Data;

@Data
@Entity
public class Officer extends User{
    private String name;
    private String eventType;

    public String getEventType() {
        return eventType;
    }

    public void setEventType(String eventType) {
        this.eventType = eventType;
    }
}
