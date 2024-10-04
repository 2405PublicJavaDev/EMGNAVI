package com.emginfo.emgnavi.notice.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class NoticeImage {

    private int imageId;
    private int noticeId;
    private String imageName;
    private String imageRename;
    private String imagePath;

}
