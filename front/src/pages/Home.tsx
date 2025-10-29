import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <h1>기쁜 프로젝트 증후군</h1>
      <ButtonGrid>
        <button onClick={() => navigate("/info")}>인사정보</button>
        <button onClick={() => navigate("/letter")}>인편</button>
        <button onClick={() => navigate("/food")}>맛집랭킹</button>
        <button onClick={() => navigate("/quiz")}>일본어 단어 퀴즈</button>
        {/* 필요하면 버튼 더 추가 가능 */}
      </ButtonGrid>
    </Container>
  );
}

export default Home;

/* ===== 스타일 ===== */

const Container = styled.div`
  width: 100vw;             /* 전체 화면 너비 */
  height: 100vh;            /* 전체 화면 높이 */
  display: flex;
  flex-direction: column;
  justify-content: center;  /* 세로 중앙 정렬 */
  align-items: center;      /* 가로 중앙 정렬 */
  background: #f7f9fc;      /* 밝은 배경 */
  color: #213547;

  h1 {
    font-size: 2.4rem;
    margin-bottom: 66px;
  }
`;

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3열 */
  gap: 20px;
  width: 80%;
  max-width: 600px;

  button {
    padding: 15px;
    border-radius: 10px;
    border: 1px solid #ccc;
    font-size: 16px;
    background-color: #fff;
    cursor: pointer;
    transition: 0.2s;
  }

  button:hover {
    background-color: #e7e7e7;
  }

  /* 화면이 좁을 때는 자동으로 2열로 변경 */
  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
