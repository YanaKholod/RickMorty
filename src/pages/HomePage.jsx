import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllCharacters } from "../reduxJs/actions";
import CharacterList from "../componentsJs/CharacterList";
import Container from "../componentsJs/Container";

const HomePage = () => {
  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      <CharacterList />
    </div>
  );
};

export default HomePage;
