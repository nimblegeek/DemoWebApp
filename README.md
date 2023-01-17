# DemoWebApp
Practice project to learn how to use [Spring Boot](https://www.baeldung.com/spring-boot) for setting up a RESTful backend, and [Angular](https://angular.io/) to create a JavaScript frontend.

# Spring Boot
The demo web app's functionality is simplistic. The functionalities include:

- Fetch and display a list of JPA entities
- Calling an in-memory H2 database
- Persist new through a simple HTML form

# Maven Dependencies

As you can see in the [pom.xml](https://github.com/nimblegeek/DemoWebApp/blob/5077bbd7351b0fa3b5a82267d8059385b50d148f/pom.xml) I am using thre main dependencies like so:

```
<dependency> 
    <groupId>org.springframework.boot</groupId> 
    <artifactId>spring-boot-starter-web</artifactId> 
</dependency>
<dependency> 
    <groupId>org.springframework.boot</groupId> 
    <artifactId>spring-boot-starter-data-jpa</artifactId> 
</dependency>
<dependency>
    <groupId>com.h2database</groupId>
    <artifactId>h2</artifactId>
    <scope>runtime</scope>
</dependency>
```

# How To Run 
- Clone this project and navigate to demoWebApp -> angularclient 
- Run the below command in your favorite terminal window

``` ng serve --open```

⚠️ NB: project still in progress. Need to update the club list component and the frontend to enable:

- Visualize list of clubs
- Add new club
- View added clubs

# Cudos 🙏 ⭐
This web project has been created based on code and knowledge retrieved [from this article](https://www.baeldung.com/spring-boot-angular-web).
Thank you [Baeldung](https://www.baeldung.com/) for a great tutorial. 

