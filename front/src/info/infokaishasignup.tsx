import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const InfoKaishaSignup: React.FC = () => {
  const navigate = useNavigate();

  // 입력값 상태 관리 (모두 문자열)
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [department, setDepartment] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  const [hireDate, setHireDate] = useState<string>("");

  // form 제출 시 호출
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log({
      name,
      password,
      department,
      position,
      hireDate,
    });

    alert("회원가입이 완료되었습니다!");
    navigate("/login");
  };

  return (
    <Container>
      <h1>회원가입</h1>

      <Form onSubmit={handleSubmit}>
        <label>이름</label>
        <input
          type="text"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          placeholder="이름을 입력하세요"
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

        <label>소속</label>
        <select
          value={department}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setDepartment(e.target.value)
          }
        >
          <option value="">선택하세요</option>
          <option value="dev">개발팀</option>
          <option value="hr">인사팀</option>
          <option value="sales">영업팀</option>
          <option value="marketing">마케팅팀</option>
        </select>

        <label>직급</label>
        <select
          value={position}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setPosition(e.target.value)
          }
        >
          <option value="">선택하세요</option>
          <option value="staff">사원</option>
          <option value="assistant">주임</option>
          <option value="manager">대리</option>
          <option value="senior">과장</option>
          <option value="chief">차장</option>
          <option value="director">부장</option>
        </select>

        <label>입사일</label>
        <input
          type="date"
          value={hireDate}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setHireDate(e.target.value)
          }
        />

        <Button type="submit">가입하기</Button>
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

  input,
  select {
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
