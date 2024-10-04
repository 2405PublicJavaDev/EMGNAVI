package com.emginfo.emgnavi.support.controller;

import com.emginfo.emgnavi.common.exception.CustomException;
import com.emginfo.emgnavi.common.exception.ErrorCode;
import com.emginfo.emgnavi.common.success.SuccessCode;
import com.emginfo.emgnavi.common.success.SuccessResponse;
import com.emginfo.emgnavi.support.dto.PostSupportRequest;
import com.emginfo.emgnavi.support.service.SupportService;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class SupportController {

    private SupportService supportService;

    public SupportController() {}
    @Autowired
    public SupportController(SupportService supportService) { this.supportService = supportService; }

    @PostMapping("/support")
    public SuccessResponse postSupport(@Valid @RequestBody PostSupportRequest request, HttpSession session) {
        String id = (String) session.getAttribute("id");
        int result = supportService.postSupport(id, request);
        if (result > 0) {
            return new SuccessResponse(SuccessCode.REGISTER_SUCCESS);
        } else {
            throw new CustomException(ErrorCode.SAVE_FAILED);
        }
    }
}
