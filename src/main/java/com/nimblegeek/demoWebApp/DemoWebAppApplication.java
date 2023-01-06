package com.nimblegeek.demoWebApp;

import com.nimblegeek.demoWebApp.domain.Member;
import com.nimblegeek.demoWebApp.repositories.MemberRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.stream.Stream;

@SpringBootApplication
public class DemoWebAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoWebAppApplication.class, args);
	}

	@Bean
	CommandLineRunner init(MemberRepository memberRepository) {
		return args -> {
			Stream.of("John", "Julie", "Jennifer", "Helen", "Rachel").forEach(name -> {
				Member member = new Member(name, name.toLowerCase() + "@domain.com");
				memberRepository.save(member);
			});
			memberRepository.findAll().forEach(System.out::println);
		};
	}
}