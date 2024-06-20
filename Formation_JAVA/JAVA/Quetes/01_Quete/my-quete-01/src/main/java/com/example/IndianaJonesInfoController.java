// /var/www/html/3x0c3t_L4b/Formation_JAVA/JAVA/Quetes/01_Quete/my-quete-01/src/main/java/com/example/IndianaJonesInfoController.java //

package com.example.indiana;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndianaJonesInfoController {

    @GetMapping("/indiana")
    public String indianaInfo(Model model) {
        String movieTitle = "Indiana Jones and the Last Crusade";
        boolean haveSeen = true;
        int releaseYear = 1989;
        float imdbRating = 8.2f;

        model.addAttribute("movieTitle", movieTitle);
        model.addAttribute("haveSeen", haveSeen);
        model.addAttribute("releaseYear", releaseYear);
        model.addAttribute("imdbRating", imdbRating);

        return "indiana";
    }
}
