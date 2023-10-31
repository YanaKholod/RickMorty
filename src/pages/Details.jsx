import CharacterDetailsPage from "../components/CharacterDetailsPage";
import styled from "styled-components";

const Styled = {
  Wrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};
const Details = () => {
  return <CharacterDetailsPage />;
};

export default Details;
