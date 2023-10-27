import React, { useState, useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import styled from "styled-components";
import Container from "../components/Container";
import CharactersList from "../components/CharactersList";
import { getCharacters } from "../services/api";

const HiddenHeading = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export interface Character {
  name: string;
  id: number;
  image: string;
  species: string;
  location: object;
}

export default function Characters() {
  const [items, setItems] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const characterName = searchParams.get("name") || "";

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await getCharacters();
        const characters: Character[] = response.data.results;
        setItems(characters);
      } catch (err) {
        // setError(err.message);
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);
  const handleFilter = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const nextParams = target.value;
    setSearchParams({ name: nextParams });
  };
  console.log(items);
  const visibleCharacters = items
    // .filter((item) =>
    //   item.name.toLowerCase().includes(characterName.toLowerCase())
    // )
    .map((character) => ({
      id: character.id,
      image: character.image,
      name: character.name,
      species: character.species,
    }));
  return (
    <>
      <header>{/* <Login /> */}</header>
      <main>
        <Container>
          <HiddenHeading>Rick and Morty</HiddenHeading>
          {/* <Hero />
                    <Filter value={characterName} onChange={handleFilter} /> */}
          {/* {error && <Error text={error} />} */}
          {loading ? (
            <div>ffjfjfjfb</div>
          ) : (
            <CharactersList items={visibleCharacters} location={location} />
          )}
        </Container>
      </main>
    </>
  );
}
