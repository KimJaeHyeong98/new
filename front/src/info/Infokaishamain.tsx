import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const infokaishamain : React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <h1>환영합니다!</h1>
      <ButtonGrid>
        <button onClick={() => navigate("/login")}>로그인</button>
        <button onClick={() => navigate("/signup")}>회원가입</button>
      </ButtonGrid>
    </Container>
  );
};

export default infokaishamain;

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
    margin-bottom: 50px;
  }
`;

const ButtonGrid = styled.div`
  display: flex;
  gap: 20px;

  button {
    padding: 15px 30px;
    border-radius: 10px;
    border: none;
    font-size: 16px;
    background-color: #4f9cf9;
    color: white;
    cursor: pointer;
    transition: 0.2s;
  }

  button:hover {
    background-color: #357ae8;
  }
`;
