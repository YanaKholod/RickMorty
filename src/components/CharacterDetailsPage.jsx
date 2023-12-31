import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCharacter } from "../redux/actions";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const Styled = {
  Wrapper: styled.div`
    display: flex;
    color: rgb(255, 255, 255);
    margin-top: 80px;
    border-radius: 9px;
    margin-left: 10%;
    background: #3c3e44;
    width: 1000px;
    height: 571px;
    margin-bottom: 40px;
  `,
  InfoContainer: styled.div`
    display: flex;
    width: 371px;
    height: 220px;
    padding: 12px 13px 13px 13px;
    flex-direction: column;
    align-items: flex-start;
    flex-shrink: 0;
  `,
  ImgContainer: styled.div`
    img {
      width: 590px;
      height: 570px;
      flex-shrink: 0;
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
  Block: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};
const CharacterDetailsPage = () => {
  const { id } = useParams();
  const character = useSelector((state) => state.characters.character);
  const dispatch = useDispatch();
  const characterId = parseInt(id);

  useEffect(() => {
    dispatch(fetchCharacter(characterId));
  }, [dispatch, characterId]);

  if (!character) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Header />
      <Styled.Wrapper>
        <Styled.ImgContainer>
          <img src={character.image} alt="" />
        </Styled.ImgContainer>
        <Styled.InfoContainer>
          <h2>{character.name}</h2>
          <span>
            {character.status} - {character.species}
          </span>
          <Styled.SecondPart>
            <Styled.LighterText>Last known location:</Styled.LighterText>
            <span>{character.location.name}</span>
          </Styled.SecondPart>
        </Styled.InfoContainer>
      </Styled.Wrapper>
      <Footer />
    </div>
  );
};

export default CharacterDetailsPage;
