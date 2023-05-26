import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { MdCardGiftcard, MdOutlineStarBorderPurple500 } from "react-icons/md";
import palette from "../styles/colorPalette";

const DropDownContainer = styled.div`
  width: 200px;
  height: 150px;
  border-radius: 12px;
  position: absolute;
  right: 1.875rem;
  top: 6.25rem;
  background-color: ${palette.white};
  filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.1));

  &::before {
    content: "";
    border-left: 13px solid transparent;
    border-right: 13px solid transparent;
    border-bottom: 13px solid ${palette.white};
    position: absolute;
    top: -13px;
    right: 45px;
  }
`;

const MenuWrapper = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const MenuListWrapper = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  height: 33%;
  &:nth-child(2) {
    border-top: 0.5px solid ${palette.dropdownGray};
    border-bottom: 0.5px solid ${palette.dropdownGray};
  }
  & svg {
    margin-right: 10px;
  }
`;
const DropDown = ({ setIsOpen }) => {
  const outsideClick = useRef();

  const toggleDropDown = (e) => {
    //ref가 누른 값이 드롭다운이 포함되어 있지 않다면 setIsOpen
    console.log(e.target, outsideClick);
    if (outsideClick && !outsideClick.current.contains(e.target)) {
      setIsOpen(false);
    } else setIsOpen(true);
  };

  useEffect(() => {
    //외부 영역 눌렀을 때
    document.addEventListener("mousedown", toggleDropDown);
    //clean up
    return () => document.removeEventListener("mousedown", toggleDropDown);
  });
  return (
    <DropDownContainer ref={outsideClick} onClick={toggleDropDown}>
      <MenuWrapper>
        <MenuListWrapper>ooo님, 안녕하세요!</MenuListWrapper>
        <MenuListWrapper>
          <MdCardGiftcard /> 상품리스트 페이지
        </MenuListWrapper>
        <MenuListWrapper>
          <MdOutlineStarBorderPurple500 /> 북마크 페이지
        </MenuListWrapper>
      </MenuWrapper>
    </DropDownContainer>
  );
};

export default DropDown;
