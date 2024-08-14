package com.example.Reporting.system.repository;

import com.example.Reporting.system.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EventRepo extends JpaRepository<Event, Integer> {
    List<Event> findByShehia_ShehiaId(Long shehiaId);


}
