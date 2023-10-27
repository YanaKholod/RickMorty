import React, { memo } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import CharacterItem, { CharacterItemProps } from "./CharacterItem";

export const Characters = styled.ul`
  margin: 32px auto 85px;

  @media screen and (min-width: 768px) {
    margin: 61px auto 188px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 24px 20px;
  }
`;

interface CharactersListProps {
  items: CharacterItemProps[];
  location: Location;
}

const CharactersList: React.FC<CharactersListProps> = ({ items }) => (
  <Characters>
    {items.map(({ id, ...rest }) => (
      <CharacterItem key={id} id={id} {...rest} />
    ))}
  </Characters>
);

export default React.memo(CharactersList);
