package com.example.Reporting.system;

import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

public class CorsConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {  // Corrected method name here
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000", "http://192.168.101.254")  // Corrected IPv6 format
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowedHeaders("*");
    }
}
