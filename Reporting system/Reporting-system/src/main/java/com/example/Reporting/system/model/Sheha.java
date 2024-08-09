package com.example.Reporting.system.model;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Data
@Entity
public class Sheha extends User{

    @OneToOne
    @JoinColumn(name = "shehiaId")
    private Shehia shehia;



}
