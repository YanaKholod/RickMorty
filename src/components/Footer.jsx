import React from "react";
import styled from "styled-components";

const Styled = {
  Wrapper: styled.div`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    flex-flow: column;
    position: relative;
    background: rgb(32, 35, 41);
    color: rgb(158, 158, 158);
    padding: 4.5rem 0px;
    min-height: calc(120px);
    width: 100%;
  `,
};
const Footer = () => {
  return <Styled.Wrapper>Footer</Styled.Wrapper>;
};

export default Footer;
