import React from "react";
import styled from "styled-components";
import palette from "../styles/colorPalette";

const productType = {
  PRODUCT: "Product",
  BRAND: "Brand",
  EXHIBITION: "Exhibition",
  CATEGORY: "Category",
};

const ProductWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  column-gap: 28px;
`
const ProductCardList = styled.li`
  display: flex;
  flex-direction: column;
  & img {
    width: 100%;
    height: 200px;
    margin-bottom: 6px;
    border-radius: 12px;
    border: 1px solid ${palette.borderGray};
    cursor: pointer;
  }
`;
const ProductInfo = styled.section`
  font-size: ${palette.mainFontSize};

  & div{
    display: flex;
  }
  & div:first-child {
    justify-content: space-between;
    & p{
      font-weight: ${palette.productFontWeight};
    }

  }
  & div:last-child:not(.exhibition_subtitle) {
   justify-content: flex-end;
   & p{
    font-weight: ${palette.productPriceWeight};
   }
  }
  & .exhibition_subtitle{
    & p{
      font-weight: ${palette.productDiscriptionWeight};
    }
  }
`;
const ProductTitle = styled.p`
  color:${(props) => props.color||'black'};
`


const ProductCard = ({ productData }) => {

  return (
    productData &&
    <ProductWrapper>
      {productData.map((product) => {
     
        switch (product.type) {
          case productType.PRODUCT:
            return(
            <ProductCardList key={product.id}>
              <img src={product.image_url} alt="상품 이미지" />
              <ProductInfo>
                <div>
                  <p>{product.title}</p>
                  <ProductTitle color={`${palette.productDiscountColor}`}>{product.discountPercentage}%</ProductTitle>
                </div>
                <div>
                  <p>{product.price}원</p>
                </div>
              </ProductInfo>
            </ProductCardList>
            );
            
          case productType.BRAND:
            return(
            <ProductCardList key={product.id}>
              <img src={product.brand_image_url} alt="브랜드 이미지"/>
              <ProductInfo>
                <div>
                  <p>{product.brand_name}</p>
                  <ProductTitle>관심고객수</ProductTitle>
                </div>
                <div>
                  <p>{product.follower}</p>
                </div>
              </ProductInfo>
            </ProductCardList>
            );

          case productType.EXHIBITION:
            return(
            <ProductCardList key={product.id}>
              <img src={product.image_url} alt="전시 이미지"/>
              <ProductInfo>
                <div>
                  <ProductTitle>{product.title}</ProductTitle>
                </div>
                <div className="exhibition_subtitle">
                  <p>{product.sub_title}</p>
                </div>
              </ProductInfo>
            </ProductCardList>
            );

          case productType.CATEGORY:
            return (
            <ProductCardList key={product.id}>
              <img src={product.image_url} alt="카테고리 이미지" />
              <ProductInfo>
                <div>
                  <ProductTitle># {product.title}</ProductTitle>
                </div>
                <div></div>
              </ProductInfo>
            </ProductCardList>
            );
          default:
            return null;
        }
      })}
    </ProductWrapper>
  );
};

export default ProductCard;
