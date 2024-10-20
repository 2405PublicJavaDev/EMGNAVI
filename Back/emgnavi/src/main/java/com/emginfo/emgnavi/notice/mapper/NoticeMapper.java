package com.emginfo.emgnavi.notice.mapper;

import com.emginfo.emgnavi.notice.vo.Notice;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.session.RowBounds;

import java.util.List;
import java.util.Map;

@Mapper
public interface NoticeMapper {
    int postNotice(Notice notice);

    List<Notice> getNoticeList(RowBounds rowBounds);

    int getListTotalCount();

    Notice getNoticeDetail(int noticeId);

    int putNotice(Notice notice);

    int deleteNotice(int noticeId);

    List<Notice> searchNotice(Map<String, Object> params, RowBounds rowBounds);

    int getSearchResultCount(Map<String, Object> params);

    List<Map<String, Object>> searchTitle(String query);

    List<Map<String, Object>> searchWriter(String query);

    Map<String, Object> getBetweenNotice(int noticeId);
}
