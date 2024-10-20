package com.emginfo.emgnavi.favorite.model.dto;

import com.emginfo.emgnavi.common.pagenation.PaginationInfo;
import com.emginfo.emgnavi.favorite.model.vo.Favorite;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class FavoritePageDTO {
    private List<Favorite> favoriteList;
    private PaginationInfo paginationInfo;

    public FavoritePageDTO(List<Favorite> favoriteList, PaginationInfo paginationInfo) {
        this.favoriteList = favoriteList;
        this.paginationInfo = paginationInfo;
    }
}
