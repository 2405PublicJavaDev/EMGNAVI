package com.emginfo.emgnavi.medicine.mapper;

import com.emginfo.emgnavi.medicine.vo.Medicine;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.session.RowBounds;

import java.util.List;
import java.util.Map;

@Mapper
public interface MedicineMapper {
    int getTotalCount();

    List<Medicine> selectMedicineList(RowBounds rowBounds);

    Medicine selectMedicineDetail(String itemSeq);

    List<Medicine> searchMedicine(Map<String, Object> params, RowBounds rowBounds);

    int getSearchResultCount(Map<String, Object> params);

    List<Map<String, Object>> searchItemNames(String query);
    List<Map<String, Object>> searchEntpNames(String query);
}