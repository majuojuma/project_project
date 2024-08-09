package com.example.Reporting.system.repository;

import com.example.Reporting.system.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserRepo extends JpaRepository<User, Integer> {
//    @Query(value = "SELECT * FROM user WHERE email = :email",nativeQuery = true)
    Optional<User> findByEmail(String email);
}
