import React, { useEffect } from "react";
import CharacterItem from "./CharacterItem";
import { fetchAllCharacters } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

function CharacterList() {
  const dispatch = useDispatch();
  const charactersArray = useSelector(
    (state) => state.characters.charactersArray
  );
  const error = useSelector((state) => state.characters.error);

  useEffect(() => {
    dispatch(fetchAllCharacters());
  }, [dispatch]);

  // if (loading === "pending") {
  //   return <div>Loading...</div>;
  // }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {charactersArray.map((character) => (
        <CharacterItem key={character.id} character={character} />
      ))}
    </div>
  );
}

export default CharacterList;
