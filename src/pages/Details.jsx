import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllCharacters } from "../reduxJs/actions";
import ItemCard from "../componentsJs/ItemCard";
import Container from "../componentsJs/Container";

const CharacterDetailsPage = ({ match }) => {
  const { id } = match.params;
  const character = useSelector((state) => state.characters.character);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCharacters(id));
  }, [dispatch, id]);

  return (
    <Container>
      <ItemCard character={character} />
    </Container>
  );
};

export default CharacterDetailsPage;
