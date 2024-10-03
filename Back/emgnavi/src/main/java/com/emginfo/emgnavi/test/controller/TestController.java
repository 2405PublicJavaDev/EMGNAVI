package com.emginfo.emgnavi.test.controller;

import com.emginfo.emgnavi.common.exception.CustomException;
import com.emginfo.emgnavi.common.exception.ErrorCode;
import com.emginfo.emgnavi.common.success.SuccessCode;
import com.emginfo.emgnavi.common.success.SuccessResponse;
import com.emginfo.emgnavi.test.dto.GetTestDataByIdResponse;
import com.emginfo.emgnavi.test.service.TestService;
import com.emginfo.emgnavi.test.vo.Test;
import jakarta.validation.Valid;
import jakarta.validation.constraints.PositiveOrZero;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@Validated
public class TestController {

    private TestService testService;

    public TestController() {}
    @Autowired
    public TestController(TestService testService) { this.testService = testService; }

    @GetMapping("/test/{no}")
    public SuccessResponse getTestDataById(@PathVariable @PositiveOrZero String no) {
        Test test = testService.getTestDataById(no);
        if (test != null) {
            GetTestDataByIdResponse response = new GetTestDataByIdResponse();
            response.setData(test.getData());
            return new SuccessResponse(SuccessCode.GET_TEST_DATA, response);
        } else {
            throw new CustomException(ErrorCode.TEST_NOT_FOUND);
        }
    }
}
