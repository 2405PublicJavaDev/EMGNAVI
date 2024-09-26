package com.emginfo.emgnavi.common.parsing.mapper;

import com.emginfo.emgnavi.hospital.vo.Hospital;
import com.emginfo.emgnavi.medicine.vo.Medicine;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ParsingMapper {

    void insertHospital(Hospital hospital);

    void insertMedicine(Medicine medicine);
}
