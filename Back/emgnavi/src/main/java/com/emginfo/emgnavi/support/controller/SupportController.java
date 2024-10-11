package com.emginfo.emgnavi.support.controller;

import com.emginfo.emgnavi.common.exception.CustomException;
import com.emginfo.emgnavi.common.exception.ErrorCode;
import com.emginfo.emgnavi.common.success.SuccessCode;
import com.emginfo.emgnavi.common.success.SuccessResponse;
import com.emginfo.emgnavi.email.service.EmailService;
import com.emginfo.emgnavi.support.dto.GetSupportResponse;
import com.emginfo.emgnavi.support.dto.RequestSupportRequest;
import com.emginfo.emgnavi.support.dto.ResponseSupportRequest;
import com.emginfo.emgnavi.support.service.SupportService;
import com.emginfo.emgnavi.support.vo.Support;
import jakarta.mail.MessagingException;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class SupportController {

    private SupportService supportService;
    private EmailService emailService;

    public SupportController() {}
    @Autowired
    public SupportController(SupportService supportService, EmailService emailService) {
        this.supportService = supportService;
        this.emailService = emailService;
    }

    @PostMapping("/support/request")
    public SuccessResponse requestSupport(@Valid @RequestBody RequestSupportRequest request, HttpSession session) {
        String id = (String) session.getAttribute("id");
        int result = supportService.requestSupport(id, request);
        if (result > 0) {
            return new SuccessResponse(SuccessCode.REGISTER_SUCCESS);
        } else {
            throw new CustomException(ErrorCode.SAVE_FAILED);
        }
    }

    @GetMapping("/support")
    public SuccessResponse getSupportList() {
        Support support = supportService.getSupportList();
        return new SuccessResponse(SuccessCode.RESOURCE_FOUND, support);
    }

    @GetMapping("/support/{no}")
    public SuccessResponse getSupportOneByNo(@PathVariable String no) {
        Support support = supportService.getSupportOneByNo(no);
        if (support != null) {
            GetSupportResponse response = new GetSupportResponse();
            response.setTitle(support.getTitle());
            response.setContent(support.getContent());
            return new SuccessResponse(SuccessCode.RESOURCE_FOUND, response);
        } else {
            throw new CustomException(ErrorCode.RESOURCE_NOT_FOUND);
        }
    }

    @PostMapping("/support/response")
    public SuccessResponse responseSupport(@Valid @RequestBody ResponseSupportRequest request) throws MessagingException {
        emailService.sendEmail(request.getWriterId(), "[EMGNAVI] 문의 답변", request.getRequestContent(), request.getResponseContent());
        return new SuccessResponse(SuccessCode.REGISTER_SUCCESS);
    }
}
