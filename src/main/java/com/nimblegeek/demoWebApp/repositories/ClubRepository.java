package com.nimblegeek.demoWebApp.repositories;

import com.nimblegeek.demoWebApp.domain.Club;
import org.springframework.data.repository.CrudRepository;

public interface ClubRepository extends CrudRepository<Club, Long> {
}
