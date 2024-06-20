// /var/www/html/3x0c3t_L4b/Formation_JAVA/JAVA/Quetes/01_Quete/my-quete-01/src/main/java/com/example/controller/HelloController.java //

package com.example.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.CandyCount; // Import correct de CandyCount

@RestController
public class HelloController {

    @GetMapping("/hello")
    public String hello() {
        return "Hello, World!";
    }

    @GetMapping("/noticeMe")
    public String noticeMe() {
        return "Notice me Senpai!";
    }

    @GetMapping("/candyCount")
    public String candyCount() {
        // Utilisation de la classe CandyCount pour obtenir le nombre de bonbons
        return "Number of candies: " + CandyCount.calculateCandies(12.4, 1.2);
    }
}
