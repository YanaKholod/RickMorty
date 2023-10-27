import { useState, useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import styled from "styled-components";
import { getCharacters } from "../services/api";

const HiddenHeading = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

interface Character {
  id: number;
  name: string;
}

export default function Characters() {
  return <></>;
}
