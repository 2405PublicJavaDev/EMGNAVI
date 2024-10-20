package com.emginfo.emgnavi.common.pagenation;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class PaginationInfo {

    private Criteria criteria;
    private int totCnt;        // 전체 데이터 개수
    private int totPageCnt;    // 전체 페이지 개수
    private int firstPageNo;   // 페이지 리스트의 첫 번호
    private int lastPageNo;    // 페이지 리스트의 마지막 번호
    private int firstIdx;      // 현재 페이지에서 출력할 첫 번째 데이터의 위치 index
    private boolean prev;      // 이전 페이지 존재 여부
    private boolean next;      // 다음 페이지 존재 여부

    // 생성자: 페이지 번호가 1 미만이면 1로 설정
    public PaginationInfo(Criteria criteria) {
        if (criteria.getPrsnPageNo() < 1) {
            criteria.setPrsnPageNo(1);
        }
        this.criteria = criteria;
    }

    // 전체 데이터 개수를 설정하면 페이지네이션 계산을 수행
    public void setTotCnt(int totCnt) {
        this.totCnt = totCnt;

        if (totCnt > 0) {
            paginate(); // 페이지 계산 메서드 호출
        }
    }

    // 페이지네이션 계산 로직
    private void paginate() {
        // 전체 페이지 수 계산
        totPageCnt = ((totCnt - 1) / criteria.getCntntPerPage()) + 1;

        // 현재 페이지가 전체 페이지 수를 넘지 않도록 조정
        if (criteria.getPrsnPageNo() > totPageCnt) {
            criteria.setPrsnPageNo(totPageCnt);
        }

        // 페이지 리스트의 첫 페이지 번호 계산
        firstPageNo = ((criteria.getPrsnPageNo() - 1) / criteria.getPagesize()) * criteria.getPagesize() + 1;

        // 페이지 리스트의 마지막 페이지 번호 계산
        lastPageNo = firstPageNo + criteria.getPagesize() - 1;
        if (lastPageNo > totPageCnt) {
            lastPageNo = totPageCnt;
        }

        // 쿼리문에서 사용할 첫 데이터 인덱스 계산
        firstIdx = (criteria.getPrsnPageNo() - 1) * criteria.getCntntPerPage();

        // 이전 페이지 존재 여부
        prev = firstPageNo != 1;

        // 다음 페이지 존재 여부
        next = (lastPageNo * criteria.getCntntPerPage()) < totCnt;
    }
}
