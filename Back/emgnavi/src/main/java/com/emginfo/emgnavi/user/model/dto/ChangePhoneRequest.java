package com.emginfo.emgnavi.user.model.dto;

import lombok.*;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ChangePhoneRequest {
    private String userId;
    private String userPhone;
}
