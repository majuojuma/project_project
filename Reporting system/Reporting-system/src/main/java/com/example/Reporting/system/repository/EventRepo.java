package com.example.Reporting.system.repository;

import com.example.Reporting.system.model.Event;
import com.example.Reporting.system.model.Officer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EventRepo extends JpaRepository<Event, Integer> {
    List<Event> findByShehia_ShehiaId(Long shehiaId);

}

