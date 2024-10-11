package com.emginfo.emgnavi.email.service;

import jakarta.mail.MessagingException;

public interface EmailService {

    void sendEmail(String to, String subject, String requestText, String responseText) throws MessagingException;
}
