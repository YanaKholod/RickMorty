import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getCharacterDetails } from "../services/api";
import Error from "../components/Error";
import Container from "../components/Container";
import ItemCard from "../components/ItemCard";

export default function CharacterDetails() {
  const [character, setCharacter] = useState<any>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const prevPage = location.state?.from ?? "/";

  useEffect(() => {
    const fetchCharacter = async () => {
      if (!id) return;
      try {
        setLoading(true);
        const data = await getCharacterDetails(Number(id));
        setCharacter(data);
      } catch (error) {
        // setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCharacter();
  }, [id, setCharacter]);

  return (
    <main>
      <Container>
        {/* <BackLink to={prevPage} />
        {loading && <Loader />} */}
        {character && <ItemCard character={character} />}
        {error && <Error text={error} />}
      </Container>
    </main>
  );
}
