package com.emginfo.emgnavi.test.controller;

import com.emginfo.emgnavi.test.dto.GetTestDataByIdResponse;
import com.emginfo.emgnavi.test.service.TestService;
import com.emginfo.emgnavi.test.vo.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class TestController {

    private TestService testService;

    public TestController() {};
    @Autowired
    public TestController(TestService testService) { this.testService = testService; }

    @GetMapping("/test/{no}")
    public GetTestDataByIdResponse getTestDataById(@PathVariable String no) {
        Test test = testService.getTestDataById(no);
        GetTestDataByIdResponse response = new GetTestDataByIdResponse();
        response.setData(test.getData());
        return response;
    }
}
