package com.example.Reporting.system.repository;

import com.example.Reporting.system.model.Response;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResponseRepo extends JpaRepository<Response, Integer> {
}
