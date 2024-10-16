package com.emginfo.emgnavi.favorite.model.dto;

import jakarta.validation.constraints.NotNull;
import lombok.*;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class FavoriteDTO {
    @NotNull
    private String userId;
    @NotNull
    private String refNo;
}
