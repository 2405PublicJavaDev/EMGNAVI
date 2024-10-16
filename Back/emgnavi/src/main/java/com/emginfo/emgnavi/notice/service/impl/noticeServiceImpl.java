package com.emginfo.emgnavi.notice.service.impl;

import com.emginfo.emgnavi.notice.mapper.NoticeMapper;
import com.emginfo.emgnavi.notice.service.NoticeService;
import com.emginfo.emgnavi.notice.vo.Notice;
import org.apache.ibatis.session.RowBounds;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class noticeServiceImpl implements NoticeService {

    @Autowired
    NoticeMapper noticeMapper;

    @Override
    public int postNotice(Notice notice) {
        return noticeMapper.postNotice(notice);
    }

    @Override
    public List<Notice> getNoticeList(int offset, int size) {
        RowBounds rowBounds = new RowBounds(offset, size);
        return noticeMapper.getNoticeList(rowBounds);
    }

    @Override
    public int getListTotalCount() {
        return noticeMapper.getListTotalCount();
    }
}
