import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const InfoKaishaSignup: React.FC = () => {
  const navigate = useNavigate();

  // 입력값 상태 관리
  const [username, setUsername] = useState<string>(""); // 로그인 ID
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>(""); // 비밀번호 확인

  // 상태 관리
  const [isChecking, setIsChecking] = useState<boolean>(false); // 중복 확인 중 로딩 표시
  const [isUsernameAvailable, setIsUsernameAvailable] = useState<boolean | null>(null); // true=사용 가능, false=중복

  // 아이디 중복체크
  const handleCheckUsername = async () => {
    if (!username) {
      alert("아이디를 입력해주세요.");
      return;
    }

    setIsChecking(true);
    try {
      const res = await axios.get("http://localhost:8080/api/check-username", {
        params: { username },
      });

      if (res.data.available) {
        alert("사용 가능한 아이디입니다!");
        setIsUsernameAvailable(true);
      } else {
        alert("이미 사용 중인 아이디입니다.");
        setIsUsernameAvailable(false);
      }
    } catch (err) {
      alert("서버 오류가 발생했습니다.");
      console.error(err);
    } finally {
      setIsChecking(false);
    }
  };

  // 회원가입 처리
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isUsernameAvailable) {
      alert("아이디 중복확인을 먼저 해주세요.");
      return;
    }

    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:8080/api/register", {
        username,
        password,
      });

      if (res.status === 200) {
        alert("회원가입 성공!");
        navigate("/login");
      } else {
        alert("회원가입 실패: " + res.data.message);
      }
    } catch (err: any) {
      alert("회원가입 중 오류가 발생했습니다.");
      console.error(err);
    }
  };

  // 버튼 활성화 조건
  const isFormValid =
    username &&
    password &&
    confirmPassword &&
    password === confirmPassword &&
    isUsernameAvailable === true;

  return (
    <Container>
      <h1>회원가입</h1>

      <Form onSubmit={handleSubmit}>
        {/* 아이디 */}
        <label>아이디</label>
        <div style={{ display: "flex", gap: "10px" }}>
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setIsUsernameAvailable(null); // 입력 바꾸면 다시 초기화
            }}
            placeholder="아이디를 입력하세요"
          />
          <SmallButton
            type="button"
            onClick={handleCheckUsername}
            disabled={isChecking}
          >
            {isChecking ? "확인중..." : "중복확인"}
          </SmallButton>
        </div>
        {isUsernameAvailable === true && (
          <SuccessText>✅ 사용 가능한 아이디입니다.</SuccessText>
        )}
        {isUsernameAvailable === false && (
          <ErrorText>❌ 이미 사용 중인 아이디입니다.</ErrorText>
        )}

        {/* 비밀번호 */}
        <label>비밀번호</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호를 입력하세요"
        />

        <label>비밀번호 확인</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="비밀번호를 다시 입력하세요"
        />
        {confirmPassword &&
          password !== confirmPassword && (
            <ErrorText>비밀번호가 일치하지 않습니다.</ErrorText>
          )}

        <Button type="submit" disabled={!isFormValid}>
          가입하기
        </Button>
      </Form>
    </Container>
  );
};

export default InfoKaishaSignup;

/* ===== 스타일 ===== */
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f7f9fc;
  color: #213547;

  h1 {
    font-size: 2.4rem;
    margin-bottom: 30px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 300px;

  label {
    font-weight: bold;
  }

  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
  }
`;

const Button = styled.button<{ disabled?: boolean }>`
  margin-top: 20px;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background-color: ${(props) => (props.disabled ? "#ccc" : "#4f9cf9")};
  color: white;
  font-size: 1rem;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: 0.2s;

  &:hover {
    background-color: ${(props) =>
      props.disabled ? "#ccc" : "#357ae8"};
  }
`;

const SmallButton = styled.button`
  width: 100px;          /* 버튼 가로 고정 */
  padding: 10px 12px;
  white-space: nowrap;   /* 줄 바꿈 방지 */
  background-color: #6c63ff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    background-color: #4f4bc6;
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 0.85rem;
  margin: 0;
`;

const SuccessText = styled.p`
  color: green;
  font-size: 0.85rem;
  margin: 0;
`;
