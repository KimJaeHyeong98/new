package com.example.project.userAccount;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
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

    // 아이디 존재 여부 확인
    @Select("SELECT COUNT(*) FROM JH_USER_ACCOUNT WHERE USERNAME = #{username}")
    int countByUsername(@Param("username") String username);


    // 회원 등록
    @Insert("""
    INSERT INTO JH_USER_ACCOUNT (USER_ID, USERNAME, PASSWORD, ROLE, STATUS)
    VALUES (JH_USER_ACCOUNT_SEQ.NEXTVAL, #{username}, #{password}, 'USER', 1)
""")
    void insertUser(UserAccount user);
}
