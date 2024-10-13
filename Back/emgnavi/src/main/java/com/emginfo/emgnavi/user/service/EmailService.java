package com.emginfo.emgnavi.user.service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
    @Autowired
    private JavaMailSender javaMailSender;

    @Async
    public void sendResetPasswordEmail(String userId, String resetLink) {
        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper;

        try {
            helper = new MimeMessageHelper(message, true, "UTF-8");
            helper.setTo(userId);
            helper.setSubject("✨ 응급NAVI - 비밀번호 재설정 요청");

            String htmlContent =
                    "<html>" +
                            "<head>" +
                            "<style>" +
                            "body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }" +
                            ".container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; }" +
                            "h1 { color: #3498db; }" +
                            ".button { display: inline-block; padding: 10px 20px; background-color: #3498db; color: #ffffff; text-decoration: none; border-radius: 5px; }" +
                            ".footer { margin-top: 20px; font-size: 12px; color: #888; }" +
                            "</style>" +
                            "</head>" +
                            "<body>" +
                            "<div class='container'>" +
                            "<h1>안녕하세요, 소중한 사용자님!</h1>" +
                            "<p>비밀번호 재설정 요청을 확인했습니다. 아래 버튼을 클릭하여 새로운 비밀번호를 설정해 주세요:</p>" +
                            "<p><a href='" + resetLink + "' class='button'>비밀번호 재설정하기</a></p>" +
                            "<p>이 요청을 하지 않으셨다면, 이 이메일을 무시해 주세요.</p>" +
                            "<p>항상 최선을 다하는 <strong>응급NAVI</strong> 팀이 되겠습니다.</p>" +
                            "<p>감사합니다!</p>" +
                            "<div class='footer'>" +
                            "<p>✉️ 응급NAVI 팀 드림</p>" +
                            "<p>본 메일은 발신 전용이며 회신되지 않습니다. 문의사항은 고객센터를 이용해 주세요.</p>" +
                            "</div>" +
                            "</div>" +
                            "</body>" +
                            "</html>";

            helper.setText(htmlContent, true);

        } catch (MessagingException e) {
            // 예외 처리
            e.printStackTrace();
        }

        javaMailSender.send(message);
    }
}