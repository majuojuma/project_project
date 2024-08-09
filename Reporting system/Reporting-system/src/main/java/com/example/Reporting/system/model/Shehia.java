package com.example.Reporting.system.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Shehia {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Long shehiaId;

    private String shehiaName;
    private String shehiaZone;
    private String district;
    private String region;

}
