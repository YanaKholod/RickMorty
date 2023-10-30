import React, { useEffect } from "react";
import CharacterItem from "./CharacterItem";
import { fetchAllCharacters } from "../reduxJs/actions";
import { useDispatch, useSelector } from "react-redux";

function CharacterList() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.characters.characters.data);
  const loading = useSelector((state) => state.characters.loading);
  const error = useSelector((state) => state.characters.error);

  console.log("DATA", data);

  useEffect(() => {
    dispatch(fetchAllCharacters());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div></div>
    // <div>
    //   {characters?.map((character) => (
    //     <CharacterItem key={character.id} character={character} />
    //   ))}
    // </div>
  );
}

export default CharacterList;
