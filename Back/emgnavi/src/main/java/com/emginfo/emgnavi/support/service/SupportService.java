package com.emginfo.emgnavi.support.service;

import com.emginfo.emgnavi.support.dto.RequestSupportRequest;
import com.emginfo.emgnavi.support.vo.Support;

public interface SupportService {

    /**
     * 문의 등록 Service
     *
     * @param id
     * @param request
     * @return int
     */
    int requestSupport(String id, RequestSupportRequest request);

    /**
     * 문의 상세 조회 Service
     * @param no
     * @return Support
     */
    Support getSupportOneByNo(String no);

    /**
     * 문의 목록 조회 Service
     * @return Support
     */
    Support getSupportList();
}
