// src/pages/InfoKaishaLogin.tsx
import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const InfoKaishaLogin: React.FC = () => {
  const navigate = useNavigate();

  // 입력값 상태 관리
  const [id, setID] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // 로그인 처리
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 폼 기본 제출 방지

    try {
      const res = await axios.post("http://localhost:8080/api/login", {
        id,
        password,
      });

      if (res.data.success) {
        localStorage.setItem("token", res.data.token); // 토큰 저장
        navigate("/home"); // 로그인 성공 시 홈으로 이동
      } else {
        alert("아이디 또는 비밀번호가 올바르지 않습니다.");
      }
    } catch (err) {
      console.error(err);
      alert("로그인 요청 중 오류가 발생했습니다.");
    }
  };

  return (
    <Container>
      <h1>로그인</h1>

      <Form onSubmit={handleLogin}>
        <label>아이디</label>
        <input
          type="text"
          value={id}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setID(e.target.value)
          }
          placeholder="아이디를 입력하세요"
        />

        <label>비밀번호</label>
        <input
          type="password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          placeholder="비밀번호를 입력하세요"
        />

        <Button type="submit">로그인</Button>
      </Form>
    </Container>
  );
};

export default InfoKaishaLogin;

/* ===== styled-components ===== */
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

const Button = styled.button`
  margin-top: 20px;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background-color: #4f9cf9;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #357ae8;
  }
`;
