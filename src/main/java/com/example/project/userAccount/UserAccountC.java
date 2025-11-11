package com.example.project.userAccount;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.project.userAccount.UserAccount;
import com.example.project.userAccount.UserAccountS;
import java.util.*;

@RestController
@RequestMapping("/api")
public class UserAccountC {
    @Autowired
    private UserAccountS userAccountS;

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody Map<String, String> request) {
        String id = request.get("id");
        String password = request.get("password");

        Map<String, Object> result = new HashMap<>();

        UserAccount user = userAccountS.login(id, password);

        if (user != null) {
            result.put("success", true);
            result.put("token", "sample-token"); // 추후 JWT로 변경 가능
        } else {
            result.put("success", false);
        }

        return result;
    }

    @GetMapping("/check-username")
    public ResponseEntity<Map<String, Boolean>> checkUsername(@RequestParam String username) {
        boolean available = userAccountS.isUsernameAvailable(username);
        Map<String, Boolean> response = new HashMap<>();
        response.put("available", available);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/register")
    public ResponseEntity<Map<String, Object>> register(@RequestBody Map<String, String> request) {
        String username = request.get("username");
        String password = request.get("password");

        Map<String, Object> response = new HashMap<>();

        try {
            boolean success = userAccountS.register(username, password);

            if (success) {
                response.put("success", true);
                response.put("message", "회원가입 성공!");
                return ResponseEntity.ok(response);
            } else {
                response.put("success", false);
                response.put("message", "이미 존재하는 아이디입니다.");
                return ResponseEntity.badRequest().body(response);
            }

        } catch (Exception e) {
            response.put("success", false);
            response.put("message", "회원가입 중 오류가 발생했습니다.");
            return ResponseEntity.internalServerError().body(response);
        }
    }


}
