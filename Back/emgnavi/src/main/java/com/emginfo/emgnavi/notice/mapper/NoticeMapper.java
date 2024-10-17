package com.emginfo.emgnavi.notice.mapper;

import com.emginfo.emgnavi.notice.vo.Notice;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.session.RowBounds;

import java.util.List;

@Mapper
public interface NoticeMapper {
    int postNotice(Notice notice);

    List<Notice> getNoticeList(RowBounds rowBounds);

    int getListTotalCount();

    Notice getNoticeDetail(int noticeId);
}
