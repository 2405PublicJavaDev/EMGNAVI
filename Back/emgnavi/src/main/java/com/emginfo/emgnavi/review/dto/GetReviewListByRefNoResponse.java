package com.emginfo.emgnavi.review.dto;

import com.emginfo.emgnavi.common.TimeConfig;
import lombok.Data;

import java.util.Date;

@Data
public class GetReviewListByRefNoResponse {

    private String writerId;
    private String writerNickname;
    private String refNo;
    private String rating;
    private String content;
    private String createdDate;

    public void setCreatedDate(Date date) {
        createdDate = TimeConfig.calculateTime(date);
    }
}
