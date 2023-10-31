import React from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { fetchCharacter } from "../redux/actions";
const Styled = {
  Wrapper: styled.div`
    width: 600px;
    height: 220px;
    display: flex;
    overflow: hidden;
    background: rgb(60, 62, 68);
    border-radius: 0.5rem;
    margin: 0.75rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  `,
  Img: styled.img`
    width: 100%;
    height: 100%;
    margin: 0px;
    opacity: 1;
    transition: opacity 0.5s ease 0s;
    object-position: center center;
    object-fit: cover;
  `,
  ImgContainer: styled.div`
    flex: 2 1 0%;
    width: 100%;
  `,
  InfoContainer: styled.div`
    flex: 3 1 0%;
    position: relative;
    padding: 0.75rem;
    color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
  `,
};
const CharacterItem = ({ character }) => {
  return (
    <Styled.Wrapper>
      <Styled.ImgContainer>
        <Styled.Img src={character.image} alt="" />
      </Styled.ImgContainer>
      <Styled.InfoContainer>
        <div>
          <Link to={`/character/${character.id}`}>
            <h2>{character.name}</h2>
          </Link>
          <span> {character.status} - </span>
        </div>

        <span> {character.species}</span>
        <p>Last known location: {character.location.name}</p>
      </Styled.InfoContainer>
    </Styled.Wrapper>
  );
};

export default CharacterItem;
