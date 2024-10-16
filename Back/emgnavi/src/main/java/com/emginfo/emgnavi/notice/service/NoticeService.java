package com.emginfo.emgnavi.notice.service;

import com.emginfo.emgnavi.notice.vo.Notice;

import java.util.List;

public interface NoticeService {

    /**
     * Notice 객체를 받아서 DB에 등록하는 Service
     * @param notice
     * @return int
     */
    int postNotice(Notice notice);

    List<Notice> getNoticeList(int offset, int size);

    int getListTotalCount();
}
