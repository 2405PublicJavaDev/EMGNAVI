package com.emginfo.emgnavi.favorite.service;

import com.emginfo.emgnavi.favorite.model.vo.Favorite;
import com.emginfo.emgnavi.hospital.vo.Hospital;
import com.emginfo.emgnavi.user.model.vo.User;

public interface FavoriteService {

    Favorite addFavorite(String type, String refNo, String userId);
}
