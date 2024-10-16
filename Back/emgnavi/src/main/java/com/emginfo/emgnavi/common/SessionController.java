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
        String userId = (String) session.getAttribute("userId");
        String userNickname = (String) session.getAttribute("userNickname");

        Map<String, String> response = new HashMap<>();
        response.put("userId", userId);
        response.put("userNickname", userNickname);
        return response;
    }
}