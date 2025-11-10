import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f8f9fa;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  font-size: 1.1rem;
  cursor: pointer;
  color: #333;
  &:hover {
    color: #007bff;
  }
`;

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <MenuButton onClick={() => navigate("/info")}>인사정보</MenuButton>
      <MenuButton onClick={() => navigate("/vacation")}>휴가신청</MenuButton>
    </HeaderContainer>
  );
};

export default Header;
