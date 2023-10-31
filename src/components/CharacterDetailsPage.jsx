import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacter } from "../redux/actions";
import { useParams } from "react-router-dom";

const CharacterDetailsPage = () => {
  const { id } = useParams();
  const character = useSelector((state) => state.characters.character);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchCharacter(id));
    }
  }, [dispatch, id]);

  console.log("CHARACTER", character);
  console.log("ID", id);

  return (
    <div>
      (character && ( <h1>Character Details</h1>
      <div>
        <h2>{character.name}</h2>
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>
        <p>Last known location: {character.location.name}</p>
      </div>
      ))
    </div>
  );
};

export default CharacterDetailsPage;
