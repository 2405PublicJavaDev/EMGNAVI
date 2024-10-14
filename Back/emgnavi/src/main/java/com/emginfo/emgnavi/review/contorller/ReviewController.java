package com.emginfo.emgnavi.review.contorller;

import com.emginfo.emgnavi.common.exception.CustomException;
import com.emginfo.emgnavi.common.exception.ErrorCode;
import com.emginfo.emgnavi.common.success.SuccessCode;
import com.emginfo.emgnavi.common.success.SuccessResponse;
import com.emginfo.emgnavi.review.dto.PostReviewRequest;
import com.emginfo.emgnavi.review.service.ReviewService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ReviewController {

    private ReviewService reviewService;

    public ReviewController() {}
    @Autowired
    public ReviewController(ReviewService reviewService) { this.reviewService = reviewService; }

    @PostMapping("/review")
    public SuccessResponse postReview(HttpSession session, @RequestBody PostReviewRequest request) {
        String id = (String) session.getAttribute("userId");
        int result = reviewService.postReview(id, request);
        if (result > 0) {
            return new SuccessResponse(SuccessCode.REGISTER_SUCCESS);
        } else {
            throw new CustomException(ErrorCode.SAVE_FAILED);
        }
    }
}
