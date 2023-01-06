package com.nimblegeek.demoWebApp.repositories;

import com.nimblegeek.demoWebApp.domain.Member;
import org.springframework.data.repository.CrudRepository;

public interface MemberRepository extends CrudRepository<Member, Long> {
}
