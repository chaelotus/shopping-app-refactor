import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../img/로고.png";
import icon from "../img/아이콘.png";
import styled from "styled-components";
import DropDown from "./DropDown";

const HeaderContainer = styled.header`
  padding: 1.563rem 4.75rem;
  height: 80px;
  display: flex;
  align-items: center;
  position: sticky;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
`;
const LogoWrapper = styled.div`
  width: 35%;
  & .link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
  }
  & img {
    width: 55px;
    height: 30px;
    margin-right: 12px;
  }
  & p {
    font-size: 32px;
    font-weight: 700;
    margin: 0;
    font-family: "Inter";
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 77%;
  cursor: pointer;
  & img {
    width: 30px;
    height: 20px;
  }
`;
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickDropDown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <HeaderContainer>
      <LogoWrapper>
        <Link className="link" to="/">
          <img src={logo} />
          <p>COZ Shopping</p>
        </Link>
      </LogoWrapper>
      <IconWrapper>
        <img src={icon} id="icon-wrapper" onClick={handleClickDropDown} />
      </IconWrapper>

      {isOpen && <DropDown setIsOpen={setIsOpen} isOpen={isOpen} />}
    </HeaderContainer>
  );
};

export default Header;
