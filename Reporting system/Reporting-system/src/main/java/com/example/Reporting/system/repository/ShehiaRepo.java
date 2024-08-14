package com.example.Reporting.system.repository;

import com.example.Reporting.system.model.Shehia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShehiaRepo extends JpaRepository<Shehia, Long> {
}
