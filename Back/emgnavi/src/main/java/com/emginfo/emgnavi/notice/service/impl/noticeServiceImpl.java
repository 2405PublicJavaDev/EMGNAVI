package com.emginfo.emgnavi.notice.service.impl;

import com.emginfo.emgnavi.hospital.vo.Hospital;
import com.emginfo.emgnavi.notice.mapper.NoticeMapper;
import com.emginfo.emgnavi.notice.service.NoticeService;
import com.emginfo.emgnavi.notice.vo.Notice;
import org.apache.ibatis.session.RowBounds;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

    @Override
    public Notice getNoticeDetail(int noticeId) {
        return noticeMapper.getNoticeDetail(noticeId);
    }

    @Override
    public int putNotice(Notice notice) {
        return noticeMapper.putNotice(notice);
    }

    @Override
    public int deleteNotice(int noticeId) {
        return noticeMapper.deleteNotice(noticeId);
    }

    @Override
    public List<Notice> searchNotice(String title, String writer, int page, int size) {
        Map<String, Object> params = new HashMap<>();
        params.put("title", title);
        params.put("writer", writer);

        int offset = page * size;
        RowBounds rowBounds = new RowBounds(offset, size);

        System.out.println("ck02");
        List<Notice> noticeList = noticeMapper.searchNotice(params, rowBounds);
        System.out.println("ck03");
        System.out.println("listSize:"+noticeList.size());

        return noticeList;
    }

    @Override
    public int getSearchResultCount(String title, String writer) {
        Map<String, Object> params = new HashMap<>();
        params.put("title", title);
        params.put("writer", writer);
        return noticeMapper.getSearchResultCount(params);
    }

    @Override
    public List<Map<String, Object>> getAutocompleteSuggestions(String query, String searchType) {
        List<Map<String, Object>> suggestions;
        if (searchType.equals("title")) {
            suggestions = noticeMapper.searchTitle(query);
        } else if (searchType.equals("writer")) {
            System.out.println("작성자검색 동작");
            System.out.println("query:"+query+"searchType:"+searchType);
            suggestions = noticeMapper.searchWriter(query);
            System.out.println("작성자검색 수행됨");
        } else {
            return new ArrayList<>();
        }
        return suggestions;
    }
}
