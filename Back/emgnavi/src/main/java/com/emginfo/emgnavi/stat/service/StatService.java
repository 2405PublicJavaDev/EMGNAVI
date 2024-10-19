package com.emginfo.emgnavi.stat.service;

import com.emginfo.emgnavi.stat.vo.Stat;

import java.util.List;

public interface StatService {

    /**
     * 통계의 종류(요일별, 월별, 요일 및 시간별 등등...)를 입력받아 그래프를 그리기 위한 포맷으로 리턴하는 서비스
     * @param searchType, hpid
     * @return List<Stat>
     */
    List<Stat> getStatInfo(String searchType, String statType, String keyword);

//    List<Stat> getHODStatInfo(String searchType, String keyword);

//    List<Stat> getAPDWStatInfo(String searchType, String keyword);
}
