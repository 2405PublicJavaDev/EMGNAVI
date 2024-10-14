package com.emginfo.emgnavi.review.mapper;

import com.emginfo.emgnavi.review.vo.Reviews;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ReviewMapper {

    int postReview(Reviews review);

    List<Reviews> getReviewListByRefNo(String refNo);
}