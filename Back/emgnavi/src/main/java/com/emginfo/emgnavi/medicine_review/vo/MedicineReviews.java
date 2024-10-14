package com.emginfo.emgnavi.medicine_review.vo;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;

@NoArgsConstructor
@Getter
@Setter
@ToString
public class MedicineReviews { // 클래스 이름 변경

    private int no;
    private String writerId;
    private String writerNickname; // 작성자 닉네임 추가
    private String refNo;
    private String content;
    private Date createdDate;
    private String createdDateShort; // 리뷰 날짜 일까지만 표시용
    private String createdDateLong;  // 리뷰 자세히 보기에서 시간까지 표시용
    private int rating;


}
