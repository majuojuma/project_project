package com.example.Reporting.system.repository;

import com.example.Reporting.system.model.Officer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface OfficerRepo extends JpaRepository<Officer, Integer> {
    Optional<Object> findByEventType(String event_type);
}
