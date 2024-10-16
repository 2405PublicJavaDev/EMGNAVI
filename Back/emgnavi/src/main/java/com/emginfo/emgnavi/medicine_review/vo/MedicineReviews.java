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
public class MedicineReviews {

    private int no;
    private String writerId;
    private String writerNickname;
    private String refNo;
    private String content;
    private Date createdDate;
    private String createdDateShort;
    private String createdDateLong;
    private int rating;

    // 현재 로그인된 사용자와 작성자가 일치하는지 여부를 나타내는 필드
    private boolean isOwner;

    public boolean getIsOwner() {
        return isOwner;
    }

    public void setIsOwner(boolean isOwner) {
        this.isOwner = isOwner;
    }

    // 기존 필드에 대한 getter와 setter는 Lombok으로 처리
}
