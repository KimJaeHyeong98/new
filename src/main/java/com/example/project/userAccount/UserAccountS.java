package com.example.project.userAccount;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service

public class UserAccountS {

    @Autowired
    private UserAccountM userAccountM;

    public UserAccount login(String username, String password) {
        return userAccountM.loginCheck(username, password);
    }

    // 아이디 사용 가능 여부 체크
    public boolean isUsernameAvailable(String username) {
        int count = userAccountM.countByUsername(username);
        return count == 0; // 0이면 사용 가능
    }

    // 회원가입
    public boolean register(String username, String password) {
        // 1. 이미 존재하는 아이디인지 확인
        if (userAccountM.countByUsername(username) > 0) {
            return false;
        }

        // 2. 새 계정 생성
        UserAccount user = new UserAccount();
        user.setUsername(username);
        user.setPassword(password); // 나중에 BCrypt 등으로 암호화 추천
        userAccountM.insertUser(user);

        return true;
    }
}
