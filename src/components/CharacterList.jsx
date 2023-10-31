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
const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  button {
    font-weight: bold;
    font-size: 16px;
    margin: 0 10px;
    padding: 5px 10px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    &:hover {
    }
  }
  span {
    font-weight: bold;
  }
  select {
    border-radius: 4px;
    padding: 5px;
    background-color: transparent;
    color: white;
  }
`;
const CharacterList = () => {
  const dispatch = useDispatch();
  const [nameFilter, setNameFilter] = useState("");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(42);
  const charactersArray = useSelector(
    (state) => state.characters.charactersArray
  );
  const error = useSelector((state) => state.characters.error);

  useEffect(() => {
    dispatch(fetchAllCharacters({ page }));
  }, [dispatch, page, perPage]);

  const handlePageChange = async (newPage) => {
    if (page <= totalPages) {
      await setPage(newPage);
    }
  };

  const handlePerPageChange = (newPerPage) => {
    setPerPage(newPerPage);
    setPage(1);
  };

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
      <Pagination>
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          Previous
        </button>
        <span> Page {page} </span>
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </button>
      </Pagination>
    </div>
  );
};

export default CharacterList;
