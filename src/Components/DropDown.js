import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdCardGiftcard, MdOutlineStarBorderPurple500 } from "react-icons/md";
import palette from "../styles/colorPalette";

const DropDownContainer = styled.div`
  width: 200px;
  height: 150px;
  border-radius: 12px;
  position: absolute;
  right: 2rem;
  top: 4.688rem;
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

  height: 33%;
  &:nth-child(2) {
    border-top: 0.5px solid ${palette.borderGray};
    border-bottom: 0.5px solid ${palette.borderGray};
  }
  & svg {
    margin-right: 10px;
  }
`;
const DropDown = ({ setIsOpen }) => {
  const outsideClick = useRef();

  const toggleDropDown = (e) => {
    const node = e.target;

    if (outsideClick.current.contains(node)) {
      return;
    }
    if (node.id !== "icon-wrapper") setIsOpen(false);
  };
  useEffect(() => {
    //외부 영역 눌렀을 때
    document.addEventListener("mousedown", toggleDropDown);
    //clean up
    return () => {
      document.removeEventListener("mousedown", toggleDropDown);
    };
  });

  return (
    <DropDownContainer ref={outsideClick}>
      <MenuWrapper>
        <MenuListWrapper>ooo님, 안녕하세요!</MenuListWrapper>

        <MenuListWrapper>
          <Link to="/products/list">
            <MdCardGiftcard /> 상품리스트 페이지{" "}
          </Link>
        </MenuListWrapper>

        <MenuListWrapper>
          <Link to="/bookmark">
            <MdOutlineStarBorderPurple500 /> 북마크 페이지{" "}
          </Link>
        </MenuListWrapper>
      </MenuWrapper>
    </DropDownContainer>
  );
};

export default DropDown;
