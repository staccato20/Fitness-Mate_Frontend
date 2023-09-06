// < layout 스타일 >

import styled from "styled-components";
import theme from "./../../styles/theme";

export const NavbarContainer = styled.div`
  position: sticky;
  top: 0;
  background: ${theme.White};
  z-index: 9999;

  .stickyContainer {
    max-width: 1440px;
    margin: 0 auto;
    height: 64px;
    padding: 10px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-logo {
    background-color: #ff7373;
    width: 110px;
    height: 20px;
  }
  .underline {
    border-bottom: 1px solid ${theme.Gray20};
    width: 100vw;
  }
`;

export const NavLink = styled.div`
  display: flex;
  gap: 24px;
`;

export const NavTextContainer = styled.div`
  display: flex;
  gap: 8px;
  .fa-bars {
    display: none;
    align-items: center;
    font-size: 25px;
    cursor: pointer;
    @media (max-width: 1000px) {
      display: flex;
    }
  }
`;

export const NavButton = styled.button`
  color: ${theme.Black};
  display: flex;
  padding: 10px 14px;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  line-height: 150%; /* 22.5px */
  letter-spacing: -0.3px;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const NavLoginButton = styled(NavButton)`
  background: ${theme.BrandLight};
  color: ${theme.Brand};
  padding: 10px 24px;
  display: block;
  border-radius: 5px;
`;
export const navbar = styled.div`
  .likes__wrapper {
    display: flex;
    align-content: center;
    justify-content: center;
  }

  .likes__relavance {
    position: relative;
    padding: 0 80px;
  }

  .likes__list {
    position: absolute;
    box-sizing: border-box;
    overflow-y: scroll;
    max-height: 150px;
    left: 0%;
    background: white;
    padding: 10px;
    border: 1px solid grey;
    box-shadow: 0 0 2px 2px grey;
  }
`;
