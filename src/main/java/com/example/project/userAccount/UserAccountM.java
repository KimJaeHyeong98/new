package com.example.project.userAccount;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import com.example.project.userAccount.UserAccount;

@Mapper
public interface UserAccountM {

    @Select("""
        SELECT * 
        FROM JH_USER_ACCOUNT
        WHERE USERNAME = #{username}
          AND PASSWORD = #{password}
          AND STATUS = 1
    """)
    UserAccount loginCheck(String username, String password);
}
