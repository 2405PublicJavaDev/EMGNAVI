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

    /**
     * 특정 의약품(itemSeq)에 대한 리뷰 목록을 가져옵니다.
     * 각 리뷰의 작성자와 로그인된 사용자가 일치하는지 여부도 포함됩니다.
     *
     * @param itemSeq 의약품 ID
     * @param session 현재 세션
     * @return 의약품 리뷰 목록
     */
    @GetMapping("/medicine")
    public List<MedicineReviews> getMedicineReviews(@RequestParam("itemSeq") String itemSeq, HttpSession session) {
        List<MedicineReviews> reviews = medicineReviewService.getMedicineReviews(itemSeq);
        String currentUserId = (String) session.getAttribute("userId");

        // 리뷰마다 작성자 정보와 현재 로그인된 사용자 ID를 비교하여 일치 여부를 설정
        return reviews.stream()
                .map(review -> {
                    review.setIsOwner(review.getWriterId().equals(currentUserId)); // isOwner 설정
                    return formatDates(review); // 날짜 포맷팅 적용
                })
                .collect(Collectors.toList());
    }

    /**
     * 로그인된 사용자만 리뷰를 작성할 수 있게 합니다.
     * 세션에 저장된 사용자 ID를 기반으로 리뷰 작성자를 설정합니다.
     *
     * @param review  작성할 리뷰 데이터
     * @param session 현재 세션
     * @return 작성된 리뷰 또는 에러 응답
     */
    @PostMapping("/medicine")
    public ResponseEntity<MedicineReviews> createMedicineReview(@RequestBody MedicineReviews review, HttpSession session) {
        // 세션에서 writerId(로그인된 사용자 ID)를 확인
        String writerId = (String) session.getAttribute("userId");
        String writerNickname = (String) session.getAttribute("userNickname");

        // writerId가 없으면 로그인되지 않은 상태이므로 401 Unauthorized 반환
        if (writerId == null) {
            return ResponseEntity.status(401).body(null);
        }

        // 로그인된 사용자라면 writerId를 리뷰 객체에 설정
        review.setWriterId(writerId);
        review.setWriterNickname(writerNickname);

        // 리뷰 작성 비즈니스 로직 호출
        MedicineReviews createdReview = medicineReviewService.createMedicineReview(review);

        // 작성된 리뷰를 응답으로 반환
        return ResponseEntity.ok(createdReview);
    }

    /**
     * 리뷰 삭제 기능: 로그인된 사용자의 userId와 리뷰의 작성자(writerId)가 일치할 경우에만 삭제 허용
     *
     * @param reviewId 삭제할 리뷰의 ID
     * @param session  현재 세션
     * @return 삭제 성공 여부 또는 에러 응답
     */
    @DeleteMapping("/medicine/{reviewId}")
    public ResponseEntity<String> deleteReview(@PathVariable("reviewId") Long reviewId, HttpSession session) {
        // 세션에서 로그인된 사용자 ID 확인
        String userId = (String) session.getAttribute("userId");

        // 로그인이 되어 있지 않다면 401 Unauthorized 반환
        if (userId == null) {
            return ResponseEntity.status(401).body("로그인이 필요합니다.");
        }

        // 리뷰 삭제 로직 실행 (로그인된 사용자와 작성자가 일치하는 경우만)
        boolean isDeleted = medicineReviewService.deleteReview(reviewId, userId);

        if (isDeleted) {
            return ResponseEntity.ok("리뷰가 삭제되었습니다.");
        } else {
            return ResponseEntity.status(403).body("삭제 권한이 없습니다.");
        }
    }

    /**
     * 리뷰 작성 날짜를 포맷팅하는 메소드입니다.
     * yyyy-MM-dd 포맷과 yyyy-MM-dd HH:mm 포맷을 적용합니다.
     *
     * @param review 포맷팅할 리뷰 객체
     * @return 포맷팅된 리뷰 객체
     */
    private MedicineReviews formatDates(MedicineReviews review) {
        if (review.getCreatedDate() != null) {
            // 작성일자를 짧은 포맷(yyyy-MM-dd)과 긴 포맷(yyyy-MM-dd HH:mm)으로 설정
            review.setCreatedDateShort(dateFormatShort.format(review.getCreatedDate()));
            review.setCreatedDateLong(dateFormatLong.format(review.getCreatedDate()));
        }
        return review;
    }
}
