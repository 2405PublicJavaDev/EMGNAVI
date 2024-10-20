package com.emginfo.emgnavi.notice.service;

import com.emginfo.emgnavi.notice.vo.Notice;

import java.util.List;
import java.util.Map;

public interface NoticeService {

    /**
     * Notice 객체를 받아서 DB에 등록하는 Service
     * @param notice
     * @return int
     */
    int postNotice(Notice notice);

    List<Notice> getNoticeList(int offset, int size);

    int getListTotalCount();

    Notice getNoticeDetail(int noticeId);

    int putNotice(Notice notice);

    int deleteNotice(int noticeId);

    List<Notice> searchNotice(String title, String writer, int page, int size);

    int getSearchResultCount(String title, String writer);

    List<Map<String, Object>> getAutocompleteSuggestions(String query, String searchType);
}
