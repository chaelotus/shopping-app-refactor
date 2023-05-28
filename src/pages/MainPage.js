import React from "react";
import styled from "styled-components";
import MainList from "../Components/MainList";

const Container = styled.main`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
`;
const MainContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 24px 76px;
  & h2 {
    margin-bottom: 0.75rem;
  }
`;

const MainPage = () => {
  return (
    <Container>
      <MainContents>
        <h2>상품 리스트</h2>
        <MainList></MainList>
        <h2>북마크 리스트</h2>
        <MainList></MainList>
      </MainContents>
    </Container>
  );
};

export default MainPage;
