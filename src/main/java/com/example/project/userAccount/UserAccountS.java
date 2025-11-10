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
}
