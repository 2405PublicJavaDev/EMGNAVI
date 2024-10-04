package com.emginfo.emgnavi.support.service;

import com.emginfo.emgnavi.support.dto.PostSupportRequest;

public interface SupportService {

    /**
     * 문의 등록 Service
     *
     * @param id
     * @param request
     * @return
     */
    int postSupport(String id, PostSupportRequest request);
}
