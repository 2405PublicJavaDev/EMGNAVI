package com.emginfo.emgnavi.review.service;

import com.emginfo.emgnavi.review.mapper.ReviewMapper;
import com.emginfo.emgnavi.review.vo.Reviews;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {

    private final ReviewMapper reviewMapper;

    public ReviewService(ReviewMapper reviewMapper) {
        this.reviewMapper = reviewMapper;
    }

    public List<Reviews> getMedicineReviews(String itemSeq) {
        return reviewMapper.selectMedicineReviews(itemSeq);
    }

//    public List<Reviews> getPharmacyReviews(String pharmacyId) {
//        return reviewMapper.selectPharmacyReviews(pharmacyId);
//    }
//
//    public List<Reviews> getHospitalReviews(String hospitalId) {
//        return reviewMapper.selectHospitalReviews(hospitalId);
//    }
}
