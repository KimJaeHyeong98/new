package com.example.project.userAccount;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.project.userAccount.UserAccount;
import com.example.project.userAccount.UserAccountS;
import java.util.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
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
}
