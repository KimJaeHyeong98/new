package com.example.project.userAccount;

import lombok.Data;

@Data
public class UserAccount {
    private Long userId;       // USER_ID
    private Long empId;        // EMP_ID
    private String username;   // USERNAME
    private String password;   // PASSWORD
    private String role;       // ROLE
    private int isActive;      // IS_ACTIVE (삭제 여부)
}
