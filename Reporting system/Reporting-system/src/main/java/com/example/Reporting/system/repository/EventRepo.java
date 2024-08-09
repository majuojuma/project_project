package com.example.Reporting.system.repository;

import com.example.Reporting.system.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepo extends JpaRepository<Event, Integer> {
}
