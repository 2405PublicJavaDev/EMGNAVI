package com.emginfo.emgnavi.support.mapper;

import com.emginfo.emgnavi.support.dto.RequestSupportRequest;
import com.emginfo.emgnavi.support.vo.Support;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface SupportMapper {

    /**
     * 문의 등록 Mapper
     * @param request
     * @return int
     */
    int requestSupport(String id, RequestSupportRequest request);

    /**
     * 문의 목록 조회 Mapper
     * @return Support
     */
    Support getSupportList();

    /**
     * 문의 상세 조회 Mapper
     * @param no
     * @return Support
     */
    Support getSupportOneByNo(String no);
}
