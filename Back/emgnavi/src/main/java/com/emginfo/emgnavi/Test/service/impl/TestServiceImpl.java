package com.emginfo.emgnavi.Test.service.impl;

import com.emginfo.emgnavi.Test.mapper.TestMapper;
import com.emginfo.emgnavi.Test.service.TestService;
import com.emginfo.emgnavi.Test.vo.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TestServiceImpl implements TestService {

    private TestMapper testMapper;

    public TestServiceImpl() {}
    @Autowired
    public TestServiceImpl(TestMapper testMapper) { this.testMapper = testMapper; }

    @Override
    public Test getTestDataById(String no) {
        Test test = testMapper.getTestDataById(no);
        return test;
    }
}
