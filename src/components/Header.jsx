import React from "react";
import styled from "styled-components";

const Styled = {
  Wrapper: styled.div`
    display: flex;
    background: white;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column;
    height: calc(50vh - 60px);
    text-align: center;
    position: relative;
  `,
  Title: styled.h1`
    margin: 0px;
    font-size: 5.625rem;
    color: rgb(32, 35, 41);
    border: none;
    font-weight: 900;
    z-index: 1;
  `,
};
const Header = () => {
  return (
    <Styled.Wrapper>
      <Styled.Title>The Rick And Morty </Styled.Title>
    </Styled.Wrapper>
  );
};

export default Header;
