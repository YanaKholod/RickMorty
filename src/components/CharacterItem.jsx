import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
  CharacterName: styled(Link)`
    text-decoration: none;
    border-bottom: none;
    :hover {
      color: #ff6f00;
    }
    h2 {
      font-size: 1.5rem;
      margin: 0px;
      padding: 0;
      font-weight: 800;
      line-height: 1.1;
      color: rgb(245, 245, 245);
    }
  `,
  LighterText: styled.p`
    color: rgb(158, 158, 158);
    font-size: 16px;
    font-weight: 500;
    margin: 0px;
    padding: 0px;
  `,
  SecondPart: styled.div`
    margin-top: 13px;
    span {
      font-size: 19px;
      font-style: normal;
      font-weight: 400;
      line-height: 2.5;
    }
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
          <Styled.CharacterName to={`/character/${character.id}`}>
            <h2>{character.name}</h2>
          </Styled.CharacterName>
          <span>
            {character.status} - {character.species}
          </span>
        </div>
        <Styled.SecondPart>
          <Styled.LighterText>Last known location: </Styled.LighterText>
          <span>{character.location.name}</span>
        </Styled.SecondPart>
      </Styled.InfoContainer>
    </Styled.Wrapper>
  );
};

export default CharacterItem;
