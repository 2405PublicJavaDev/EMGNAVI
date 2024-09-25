package com.emginfo.emgnavi.Test.mapper;

import com.emginfo.emgnavi.Test.vo.Test;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface TestMapper {

    /**
     * 테스트 데이터 받기 Mapper
     * @param no
     * @return
     */
    Test getTestDataById(String no);
}
