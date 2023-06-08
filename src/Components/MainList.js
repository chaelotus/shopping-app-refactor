import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import useFetch from "../hooks/useFetch";

const MainProductList = styled.div`
  margin-bottom: 0.75rem;
`;
const MainList = () => {
  const [productData] = useFetch(
    "http://cozshopping.codestates-seb.link/api/v1/products?count=4"
  );

  return (
    <MainProductList>
      <ProductCard productData={productData} />
    </MainProductList>
  );
};

export default MainList;
