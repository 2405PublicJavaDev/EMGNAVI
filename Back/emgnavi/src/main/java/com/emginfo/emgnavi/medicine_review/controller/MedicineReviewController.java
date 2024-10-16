package com.emginfo.emgnavi.medicine_review.controller;

import com.emginfo.emgnavi.medicine_review.service.MedicineReviewService;
import com.emginfo.emgnavi.medicine_review.vo.MedicineReviews;
import jakarta.servlet.http.HttpSession;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/medicine_reviews")
public class MedicineReviewController {

    private final MedicineReviewService medicineReviewService;
    private final SimpleDateFormat dateFormatShort = new SimpleDateFormat("yyyy-MM-dd");
    private final SimpleDateFormat dateFormatLong = new SimpleDateFormat("yyyy-MM-dd HH:mm");

    public MedicineReviewController(MedicineReviewService medicineReviewService) {
        this.medicineReviewService = medicineReviewService;
    }

    @GetMapping("/medicine")
    public List<MedicineReviews> getMedicineReviews(@RequestParam("itemSeq") String itemSeq) {
        List<MedicineReviews> reviews = medicineReviewService.getMedicineReviews(itemSeq);
        return reviews.stream()
                .map(this::formatDates)
                .collect(Collectors.toList());
    }

    @PostMapping("/medicine")
    public ResponseEntity<MedicineReviews> createMedicineReview(@RequestBody MedicineReviews review, HttpSession session) {
        String writerId = (String) session.getAttribute("userId");
        if (writerId == null) {
            return ResponseEntity.badRequest().body(null);
        }
        review.setWriterId(writerId);
        MedicineReviews createdReview = medicineReviewService.createMedicineReview(review);
        return ResponseEntity.ok(createdReview);
    }

    // 리뷰의 작성 날짜 포맷팅
    private MedicineReviews formatDates(MedicineReviews review) {
        if (review.getCreatedDate() != null) {
            review.setCreatedDateShort(dateFormatShort.format(review.getCreatedDate()));
            review.setCreatedDateLong(dateFormatLong.format(review.getCreatedDate()));
        }
        return review;
    }
}