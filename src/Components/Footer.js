import React from "react";
import palette from "../styles/colorPalette";
import styled from "styled-components";

const FooterContainer = styled.div`
  //height: 3.625rem;
  color: ${palette.footerGray};
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: ${palette.white};
  padding: 0.688rem 0;
  min-height: 3.625rem;
  position: absolute;
  width: 100%;
  bottom: 0;
  border-top: 1px solid ${palette.borderGray};
  & span {
    height: 100%;
    font-size: ${palette.footerFontSize};
    font-weight: ${palette.footerFontWeight};
  }
`;
const Footer = () => {
  return (
    <footer>
      <FooterContainer>
        <span>개인정보 처리방침 | 이용 약관</span>
        <span>All rights reserved @ Codestates</span>
      </FooterContainer>
    </footer>
  );
};

export default Footer;
