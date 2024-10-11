package com.emginfo.emgnavi.email.service.impl;

import com.emginfo.emgnavi.email.service.EmailService;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class EmailServiceImpl implements EmailService {

    private JavaMailSender javaMailSender;

    public EmailServiceImpl() {};
    @Autowired
    public EmailServiceImpl(JavaMailSender javaMailSender) { this.javaMailSender = javaMailSender; };

    @Override
    public void sendEmail(String to, String subject, String requestText, String responseText) throws MessagingException {
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();

        MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, false, "UTF-8");
        mimeMessageHelper.setTo(to);
        mimeMessageHelper.setSubject(subject);
        mimeMessageHelper.setText(requestText + "<br><br><br>" + responseText, true);
        javaMailSender.send(mimeMessage);
    }
}
