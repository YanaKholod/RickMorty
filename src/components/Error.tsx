import React from "react";
import styled from "styled-components";

const ErrorWrapper = styled.p`
  margin: 32px auto 0;
`;

interface ErrorProps {
  text: string;
}

const Error: React.FC<ErrorProps> = ({ text }) => (
  <ErrorWrapper>{text}</ErrorWrapper>
);

export default Error;
