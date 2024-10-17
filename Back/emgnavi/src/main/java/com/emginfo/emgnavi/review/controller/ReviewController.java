package com.emginfo.emgnavi.review.controller;

import com.emginfo.emgnavi.common.exception.CustomException;
import com.emginfo.emgnavi.common.exception.ErrorCode;
import com.emginfo.emgnavi.common.success.SuccessCode;
import com.emginfo.emgnavi.common.success.SuccessResponse;
import com.emginfo.emgnavi.review.dto.PostReviewRequest;
import com.emginfo.emgnavi.review.service.ReviewService;
import com.emginfo.emgnavi.review.vo.Reviews;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ReviewController {

    private ReviewService reviewService;

    public ReviewController() {}
    @Autowired
    public ReviewController(ReviewService reviewService) { this.reviewService = reviewService; }

    @PostMapping("/review")
    public SuccessResponse postReview(HttpSession session, @Valid @RequestBody PostReviewRequest request) {
        String id = (String) session.getAttribute("userId");
        if (id == null) { throw new CustomException(ErrorCode.SESSION_INVALID); }
        int result = reviewService.postReview(id, request);
        if (result > 0) {
            return new SuccessResponse(SuccessCode.REGISTER_SUCCESS);
        } else {
            throw new CustomException(ErrorCode.SAVE_FAILED);
        }
    }

    @GetMapping("/review/{refNo}")
    public SuccessResponse getReviewListByRefNo(@PathVariable String refNo) {
        List<Reviews> reviewList = reviewService.getReviewListByRefNo(refNo);
        return new SuccessResponse(SuccessCode.RESOURCE_FOUND, reviewList);
    }

    @GetMapping("/review/report/{no}")
    public SuccessResponse getReviewListByNo(@PathVariable String no) {
        List<Reviews> reviewList = reviewService.getReviewListByNo(no);
        return new SuccessResponse(SuccessCode.RESOURCE_FOUND, reviewList);
    }

    @PatchMapping("/review/{no}")
    public SuccessResponse updateReview(HttpSession session, @PathVariable String no, ) {
        String id = (String) session.getAttribute("userId");
        if (id == null) { throw new CustomException(ErrorCode.SESSION_INVALID); }
        int result = reviewService.updateReview(no);
        if (result > 0) {
            return new SuccessResponse(SuccessCode.UPDATE_SUCCESS);
        } else {
            throw new CustomException(ErrorCode.UPDATE_FAILED);
        }
    }

    @DeleteMapping("/review/{no}")
    public SuccessResponse deleteReview(HttpSession session, @PathVariable String no) {
        String id = (String) session.getAttribute("userId");
        if (id == null) { throw new CustomException(ErrorCode.SESSION_INVALID); }
        int result = reviewService.deleteReview(no);
        if (result > 0) {
            return new SuccessResponse(SuccessCode.DELETE_SUCCESS);
        } else {
            throw new CustomException(ErrorCode.DELETE_FAILED);
        }
    }
}
