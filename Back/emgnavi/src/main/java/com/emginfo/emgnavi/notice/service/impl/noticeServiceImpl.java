package com.emginfo.emgnavi.notice.service.impl;

import com.emginfo.emgnavi.notice.mapper.NoticeMapper;
import com.emginfo.emgnavi.notice.service.NoticeService;
import com.emginfo.emgnavi.notice.vo.Notice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class noticeServiceImpl implements NoticeService {

    @Autowired
    NoticeMapper noticeMapper;

    @Override
    public int postNotice(Notice notice) {
        return noticeMapper.postNotice(notice);
    }
}
