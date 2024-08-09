package com.example.Reporting.system.repository;

import com.example.Reporting.system.model.Sheha;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShehaRepo extends JpaRepository<Sheha, Integer> {
}
