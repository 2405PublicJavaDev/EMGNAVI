package com.emginfo.emgnavi.review.controller;

import com.emginfo.emgnavi.review.service.ReviewService;
import com.emginfo.emgnavi.review.vo.Reviews;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.text.SimpleDateFormat;
import java.util.List;
import java.util.stream.Collectors;

@RestController
public class ReviewController {

    private final ReviewService reviewService;
    private final SimpleDateFormat dateFormatShort = new SimpleDateFormat("yyyy-MM-dd");
    private final SimpleDateFormat dateFormatLong = new SimpleDateFormat("yyyy-MM-dd HH:mm");

    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @GetMapping("/api/reviews/medicine")
    public List<Reviews> getMedicineReviews(@RequestParam("itemSeq") String itemSeq) {
        List<Reviews> reviews = reviewService.getMedicineReviews(itemSeq);
        return reviews.stream().map(this::formatDates).collect(Collectors.toList());
    }

    private Reviews formatDates(Reviews review) {
        if (review.getCreatedDate() != null) {
            review.setCreatedDateShort(dateFormatShort.format(review.getCreatedDate()));
            review.setCreatedDateLong(dateFormatLong.format(review.getCreatedDate()));
        }
        return review;
    }

//    @GetMapping("/api/reviews/pharmacy")
//    public List<Reviews> getPharmacyReviews(@RequestParam("pharmacyId") String pharmacyId) {
//        List<Reviews> reviews = reviewService.getPharmacyReviews(pharmacyId);
//        return reviews.stream().map(this::formatDates).collect(Collectors.toList());
//    }
//
//    @GetMapping("/api/reviews/hospital")
//    public List<Reviews> getHospitalReviews(@RequestParam("hospitalId") String hospitalId) {
//        List<Reviews> reviews = reviewService.getHospitalReviews(hospitalId);
//        return reviews.stream().map(this::formatDates).collect(Collectors.toList());
//    }
}