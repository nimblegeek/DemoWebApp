package com.nimblegeek.demoWebApp.controllers;

import com.nimblegeek.demoWebApp.domain.Member;
import com.nimblegeek.demoWebApp.repositories.MemberRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class MemberController {

    private MemberRepository memberRepository;

    @GetMapping("/member")
    public List<Member> getMembers() {
        return (List<Member>) memberRepository.findAll();
    }

    @PostMapping("/member")
    void addUser(@RequestBody Member member) {
        memberRepository.save(member);
    }
}
