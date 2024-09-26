package com.emginfo.emgnavi.test.service;

import com.emginfo.emgnavi.test.vo.Test;

public interface TestService {

    /**
     * 테스트 데이터 받기 Service
     * @param no
     * @return
     */
    Test getTestDataById(String no);
}
