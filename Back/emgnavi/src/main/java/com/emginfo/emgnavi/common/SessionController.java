package com.emginfo.emgnavi.common;

import jakarta.servlet.http.HttpSession;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class SessionController {

    @GetMapping("/session")
    public Map<String, String> getSession(HttpSession session) {
        String uEmail = (String) session.getAttribute("uEmail");
        String uNickname = (String) session.getAttribute("uNickname");

        Map<String, String> response = new HashMap<>();
        response.put("uEmail", uEmail);
        response.put("uNickname", uNickname);
        return response;
    }
}