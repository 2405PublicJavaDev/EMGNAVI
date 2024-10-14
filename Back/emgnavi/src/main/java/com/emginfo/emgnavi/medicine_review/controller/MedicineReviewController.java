package com.emginfo.emgnavi.medicine_review.controller;

import com.emginfo.emgnavi.medicine_review.service.MedicineReviewService;
import com.emginfo.emgnavi.medicine_review.vo.MedicineReviews;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.text.SimpleDateFormat;
import java.util.List;
import java.util.stream.Collectors;

@RestController
public class MedicineReviewController {

    private final MedicineReviewService medicineReviewService;
    private final SimpleDateFormat dateFormatShort = new SimpleDateFormat("yyyy-MM-dd");
    private final SimpleDateFormat dateFormatLong = new SimpleDateFormat("yyyy-MM-dd HH:mm");

    public MedicineReviewController(MedicineReviewService medicineReviewService) {
        this.medicineReviewService = medicineReviewService;
    }

    @GetMapping("/api/medicine_reviews/medicine")
    public List<MedicineReviews> getMedicineReviews(@RequestParam("itemSeq") String itemSeq) {
        List<MedicineReviews> reviews = medicineReviewService.getMedicineReviews(itemSeq);
        return reviews.stream()
                .map(this::formatDates)
                .map(this::populateNickname)
                .collect(Collectors.toList());
    }

    // 리뷰의 작성 날짜 포맷팅
    private MedicineReviews formatDates(MedicineReviews review) {
        if (review.getCreatedDate() != null) {
            review.setCreatedDateShort(dateFormatShort.format(review.getCreatedDate()));
            review.setCreatedDateLong(dateFormatLong.format(review.getCreatedDate()));
        }
        return review;
    }

    // WRITER_ID에 해당하는 닉네임을 추가하는 로직
    private MedicineReviews populateNickname(MedicineReviews review) {
        String nickname = medicineReviewService.getNicknameByWriterId(review.getWriterId());
        review.setWriterNickname(nickname);
        return review;
    }
}