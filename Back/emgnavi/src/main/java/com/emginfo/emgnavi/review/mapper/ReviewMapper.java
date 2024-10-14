package com.emginfo.emgnavi.review.mapper;

import com.emginfo.emgnavi.review.vo.Reviews;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ReviewMapper {
    List<Reviews> selectMedicineReviews(String itemSeq);
//    List<Reviews> selectPharmacyReviews(String pharmacyId);
//    List<Reviews> selectHospitalReviews(String hospitalId);
//    int insertReview(Reviews review);
}