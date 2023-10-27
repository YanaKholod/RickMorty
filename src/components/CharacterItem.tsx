import styled from "styled-components";
import { Link } from "react-router-dom";

const CharactersLink = styled(Link)`
  cursor: pointer;

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 20px) / 2);
  }

  @media screen and (min-width: 1440px) {
    flex-basis: calc((100% - 60px) / 4);
  }
`;

const CharactersItem = styled.li`
  margin-top: 32px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  transition: transform 200ms linear;

  @media screen and (min-width: 768px) {
    margin-top: 0;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

const CharactersImage = styled.img`
  max-height: 232px;
  object-fit: cover;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;

  @media screen and (min-width: 1440px) {
    max-height: 168px;
  }
`;

const CharactersInfo = styled.div`
  padding: 12px 16px;

  @media screen and (min-width: 768px) {
    flex-grow: 1;
  }
`;

const CharactersName = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.87);
`;

const CharactersDescr = styled.p`
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.25px;
  color: rgba(0, 0, 0, 0.6);
`;

export interface CharacterItemProps {
  id: number;
  image: string;
  name: string;
  species: string;
  location: Location;
}
const CharacterItem: React.FC<CharacterItemProps> = ({
  id,
  image,
  name,
  species,
  location,
}) => (
  <CharactersLink to={`/character/${id}`} state={{ from: location }}>
    <CharactersItem>
      <CharactersImage loading="lazy" src={image} alt={name} />
      <CharactersInfo>
        <CharactersName>{name}</CharactersName>
        <CharactersDescr>{species}</CharactersDescr>
      </CharactersInfo>
    </CharactersItem>
  </CharactersLink>
);

export default CharacterItem;
