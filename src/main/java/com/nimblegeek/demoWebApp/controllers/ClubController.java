package com.nimblegeek.demoWebApp.controllers;

import com.nimblegeek.demoWebApp.domain.Club;
import com.nimblegeek.demoWebApp.repositories.ClubRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ClubController {

    private ClubRepository clubRepository;

    @GetMapping("/club")
    public List<Club> getClub() {
        return (List<Club>) clubRepository.findAll();
    }

    @PostMapping("/club")
    void addClub(@RequestBody Club club) {
        clubRepository.save(club);
    }
}
