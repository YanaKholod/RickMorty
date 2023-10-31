import React, { useEffect, useState } from "react";
import CharacterItem from "./CharacterItem";
import { fetchAllCharacters } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const CharacterListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  @media (max-width: 1600px) {
    justify-content: space-around;
  }

  @media (min-width: 1601px) {
    justify-content: space-around;
  }
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
  margin-left: 40px;
  width: 300px;
`;

const FilterInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
`;
function CharacterList() {
  const dispatch = useDispatch();
  const [nameFilter, setNameFilter] = useState("");
  const charactersArray = useSelector(
    (state) => state.characters.charactersArray
  );
  const error = useSelector((state) => state.characters.error);

  useEffect(() => {
    dispatch(fetchAllCharacters());
  }, [dispatch]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const filteredCharacters = charactersArray.filter((character) =>
    character.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  return (
    <div>
      <FilterContainer>
        <FilterInput
          type="text"
          placeholder="Filter by name..."
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
        />
      </FilterContainer>
      <CharacterListContainer>
        {filteredCharacters.map((character) => (
          <CharacterItem key={character.id} character={character} />
        ))}
      </CharacterListContainer>
    </div>
  );
}

export default CharacterList;
