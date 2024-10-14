package com.emginfo.emgnavi.notice.mapper;

import com.emginfo.emgnavi.notice.vo.Notice;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface NoticeMapper {
    int postNotice(Notice notice);
}
