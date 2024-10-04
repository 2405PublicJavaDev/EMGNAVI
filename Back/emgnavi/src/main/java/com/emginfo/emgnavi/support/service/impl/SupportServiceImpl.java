package com.emginfo.emgnavi.support.service.impl;

import com.emginfo.emgnavi.support.dto.PostSupportRequest;
import com.emginfo.emgnavi.support.mapper.SupportMapper;
import com.emginfo.emgnavi.support.service.SupportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SupportServiceImpl implements SupportService {

    private SupportMapper supportMapper;

    public SupportServiceImpl() {}
    @Autowired
    public SupportServiceImpl(SupportMapper supportMapper) { this.supportMapper = supportMapper; }

    @Override
    public int postSupport(String id, PostSupportRequest request) {
        int result = supportMapper.postSupport(id, request);
        return result;
    }
}
