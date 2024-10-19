package com.emginfo.emgnavi.hospital.service.impl;

import com.emginfo.emgnavi.hospital.mapper.HospitalMapper;
import com.emginfo.emgnavi.hospital.service.HospitalService;
import com.emginfo.emgnavi.hospital.vo.Hospital;
import com.emginfo.emgnavi.pharmacy.vo.Pharmacy;
import org.apache.ibatis.session.RowBounds;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class HospitalServiceImpl implements HospitalService {

    @Autowired
    private HospitalMapper hospitalMapper;

    @Override
    public List<Hospital> getHospitalList(int offset, int limit) {
        RowBounds rowBounds = new RowBounds(offset, limit);
        return hospitalMapper.selectHospitalList(rowBounds);
    }

    @Override
    public Hospital getHospitalDetail(String hpid) {
        return hospitalMapper.selectHospitalDetail(hpid);
    }

    @Override
    public List<Hospital> searchHospital(String dutyName, String dutyAddr, int page, int size) {
        Map<String, Object> params = new HashMap<>();
        params.put("dutyName", dutyName);
        params.put("dutyAddr", dutyAddr);

        int offset = page * size;
        RowBounds rowBounds = new RowBounds(offset, size);

        return hospitalMapper.searchHospital(params, rowBounds);
    }

    @Override
    public int getSearchResultCount(String dutyName, String dutyAddr) {
        Map<String, Object> params = new HashMap<>();
        params.put("dutyName", dutyName);
        params.put("dutyAddr", dutyAddr);
        return hospitalMapper.getSearchResultCount(params);
    }

    @Override
    public List<Map<String, Object>> getAutocompleteSuggestions(String query, String searchType) {
        List<Map<String, Object>> suggestions;
        if (searchType.equals("dutyName")) {
            suggestions = hospitalMapper.searchDutyNames(query);
        } else if (searchType.equals("dutyAddr")) {
            suggestions = hospitalMapper.searchDutyAddr(query);
        } else {
            return new ArrayList<>();
        }

//        // 데이터 출력
//        for (Map<String, Object> suggestion : suggestions) {
//            System.out.println("Suggestion: " + suggestion);
//        }

        return suggestions;
    }
}
