import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderLeft>
        <img src="logo.png" alt="my social app" />
      </HeaderLeft>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  padding: 15px 20px;
  justify-content: space-between;
  position: sticky;
  background-color: white;
  z-index: 100;
  top: 0;
  box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.75);
`;

const HeaderLeft = styled.div`
  display: flex;
  justify-content: space-evenly;
  img {
    height: 40px;
  }
`;

export default Header;
