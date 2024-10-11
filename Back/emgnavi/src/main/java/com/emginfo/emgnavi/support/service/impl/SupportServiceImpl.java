package com.emginfo.emgnavi.support.service.impl;

import com.emginfo.emgnavi.email.service.EmailService;
import com.emginfo.emgnavi.support.dto.RequestSupportRequest;
import com.emginfo.emgnavi.support.dto.ResponseSupportRequest;
import com.emginfo.emgnavi.support.mapper.SupportMapper;
import com.emginfo.emgnavi.support.service.SupportService;
import com.emginfo.emgnavi.support.vo.Support;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SupportServiceImpl implements SupportService {

    private SupportMapper supportMapper;

    public SupportServiceImpl() {}
    @Autowired
    public SupportServiceImpl(SupportMapper supportMapper) { this.supportMapper = supportMapper; }

    @Override
    public int requestSupport(String id, RequestSupportRequest request) {
        return supportMapper.requestSupport(id, request);
    }

    @Override
    public Support getSupportList() {
        return supportMapper.getSupportList();
    }

    @Override
    public Support getSupportOneByNo(String no) {
        return supportMapper.getSupportOneByNo(no);
    }
}
