package com.example.Reporting.system.repository;

import com.example.Reporting.system.model.Sheha;
import com.example.Reporting.system.model.Shehia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ShehaRepo extends JpaRepository<Sheha, Integer> {
    Optional<Object> findByShehia(Shehia shehia);
}
