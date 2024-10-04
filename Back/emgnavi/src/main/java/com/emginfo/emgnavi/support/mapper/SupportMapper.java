package com.emginfo.emgnavi.support.mapper;

import com.emginfo.emgnavi.support.dto.PostSupportRequest;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface SupportMapper {

    /**
     * 문의 등록 Mapper
     * @param request
     * @return
     */
    int postSupport(String id, PostSupportRequest request);
}
