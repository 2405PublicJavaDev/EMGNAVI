package com.emginfo.emgnavi.notice.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class Notice {

    private int noticeId;
    private String writerId;
    private String noticeTitle;
    private String noticeContents;
    private String noticeMarkdown;
    private String noticeDate;

}
