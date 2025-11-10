import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  font-size: 1.5rem;
  color: #444;
`;

const Main = () => {
  return <MainContainer>메뉴를 선택해주세요 😊</MainContainer>;
};

export default Main;
