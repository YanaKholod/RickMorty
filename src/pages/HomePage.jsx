import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllCharacters } from "../redux/actions";
import CharacterList from "../components/CharacterList";
import Container from "../components/Container";
import styled from "styled-components";
import Header from "../components/Header";

const Styled = {
  Wrapper: styled.div`
    background: rgb(39, 43, 51);
  `,
  MainInfoWrapper: styled.div`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    padding: 4.5rem 0px;
    background: rgb(39, 43, 51);
    min-height: calc(50vh - 60px);
  `,
};
const HomePage = () => {
  return (
    <div>
      <Header />
      <Styled.MainInfoWrapper>
        <CharacterList />
      </Styled.MainInfoWrapper>
    </div>
  );
};

export default HomePage;
