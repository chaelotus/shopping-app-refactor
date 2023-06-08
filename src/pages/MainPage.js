import React from "react";
import styled from "styled-components";
import MainList from "../Components/MainList";

const Container = styled.main`
  flex: 1;
  width: 100%;
  padding:0 4.75rem;
`;
const MainContents = styled.div`
  width:100%;
  display: flex;
  flex-direction: column;
  padding: 24px 0;

  & h2 {
    margin-bottom: 0.75rem;
  } 
  & h2:first-child{
    margin-top: 1.5rem;
  }
`;

const MainPage = () => {
  return (
    <Container>
      <MainContents>
        <div>
          <h2>상품 리스트</h2>
          <MainList />
        </div>
        <div>
          <h2>북마크 리스트</h2>
        </div>


      </MainContents>
    </Container>
  );
};

export default MainPage;
