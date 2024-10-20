package com.emginfo.emgnavi.common.pagenation;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class Criteria {
    private int prsnPageNo; // 현재 페이지 번호
    private int cntntPerPage; // 페이지당 출력할 데이터 개수
    private int pagesize; // 페이지 네비게이션 바에 표시할 페이지 번호의 개수

    public Criteria() {
        this.prsnPageNo = 1;
        this.cntntPerPage = 7;
        this.pagesize = 10;
    }
}
