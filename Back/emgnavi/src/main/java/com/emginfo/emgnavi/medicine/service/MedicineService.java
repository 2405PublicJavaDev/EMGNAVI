package com.emginfo.emgnavi.medicine.service;

import com.emginfo.emgnavi.medicine.mapper.MedicineMapper;
import com.emginfo.emgnavi.medicine.vo.Medicine;
import org.apache.ibatis.session.RowBounds;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class MedicineService {

    @Autowired
    private MedicineMapper medicineMapper;

    public List<Medicine> getMedicineList(int offset, int limit) {
        RowBounds rowBounds = new RowBounds(offset, limit);
        return medicineMapper.selectMedicineList(rowBounds);
    }

    public Medicine getMedicineDetail(String itemSeq) {
        return medicineMapper.selectMedicineDetail(itemSeq);
    }

    public List<Medicine> searchMedicine(String itemName, String entpName, int page, int size) {
        Map<String, Object> params = new HashMap<>();
        params.put("itemName", itemName);
        params.put("entpName", entpName);

        int offset = page * size;
        RowBounds rowBounds = new RowBounds(offset, size);

        return medicineMapper.searchMedicine(params, rowBounds);
    }

    public int getSearchResultCount(String itemName, String entpName) {
        Map<String, Object> params = new HashMap<>();
        params.put("itemName", itemName);
        params.put("entpName", entpName);
        return medicineMapper.getSearchResultCount(params);
    }

    public int getTotalCount() {
        return medicineMapper.getTotalCount();
    }

    public List<Map<String, Object>> getAutocompleteSuggestions(String query, String searchType) {
        List<Map<String, Object>> suggestions;
        if (searchType.equals("itemName")) {
            suggestions = medicineMapper.searchItemNames(query);
        } else if (searchType.equals("entpName")) {
            suggestions = medicineMapper.searchEntpNames(query);
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