import React, { useState } from "react";
import logo from "../img/로고.png";
import icon from "../img/아이콘.png";
import styled from "styled-components";
import DropDown from "./DropDown";

const HeaderContainer = styled.header`
  padding: 1.563rem 4.75rem;
  height: 80px;
  display: flex;
  align-items: center;
`;
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 23%;
  cursor: pointer;
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
        <img src={logo} />
        <p>COZ Shopping</p>
      </LogoWrapper>
      <IconWrapper>
        <img src={icon} onClick={handleClickDropDown} />
      </IconWrapper>
      {isOpen && <DropDown setIsOpen={setIsOpen} isOpen={isOpen} />}
    </HeaderContainer>
  );
};

export default Header;
