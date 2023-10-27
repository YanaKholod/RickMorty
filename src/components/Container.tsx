import React from "react";
import styled from "styled-components";

const ContainerWrapper = styled.div`
  max-width: 100%;
  padding: 0 24px;
  margin: 0 auto;

  @media screen and (min-width: 480px) {
    max-width: 480px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 210px;
  }
`;

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => (
  <ContainerWrapper>{children}</ContainerWrapper>
);

export default Container;
