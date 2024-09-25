package com.emginfo.emgnavi.Test.service;

import com.emginfo.emgnavi.Test.vo.Test;

public interface TestService {

    /**
     * 테스트 데이터 받기 Service
     * @param no
     * @return
     */
    Test getTestDataById(String no);
}
