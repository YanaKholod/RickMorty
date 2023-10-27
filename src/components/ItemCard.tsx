import React from "react";
import styled from "styled-components";

const Item = styled.div`
  margin-top: 77px;
  margin-bottom: 85px;
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-top: 76px;
  }
`;

const ItemImage = styled.img`
  margin: 0 auto;
  width: 150px;
  height: 148px;
  border-radius: 50%;
  border: 5px solid #f2f2f7;

  @media screen and (min-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

const ItemName = styled.h1`
  margin-top: 34px;
  text-align: center;
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  color: #081f32;

  @media screen and (min-width: 768px) {
    margin-top: 16px;
    font-size: 58px;
    line-height: 56px;
  }
`;

const CardTitle = styled.h2`
  margin-top: 34px;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #8e8e93;

  @media screen and (min-width: 768px) {
    margin-top: 48px;
  }
`;

const Info = styled.ul`
  margin-top: 16px;
  padding: 0 8px 0 16px;

  @media screen and (min-width: 768px) {
    max-width: 403px;
    margin: 48px auto 0;
    padding-right: 0px;
  }
`;

const InfoItem = styled.li`
  padding: 9px 0 12px 0;
  border-bottom: 1px solid rgba(33, 33, 33, 0.08);

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

const InfoTitle = styled.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  text-transform: capitalize;
  color: #081f32;
`;

const InfoDescr = styled.p`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  text-transform: capitalize;
  color: #6e798c;
`;

interface CharacterCardProps {
  character: {
    image: string;
    name: string;
    gender: string;
    status: string;
    species: string;
    origin: { name: string };
    type: string | null;
  };
}

const ItemCard: React.FC<CharacterCardProps> = ({ character }) => {
  const { image, name, gender, status, species, origin, type } = character;

  return (
    <Item>
      <ItemImage src={image} alt={name} />
      <ItemName>{name}</ItemName>
      <CardTitle>Informations</CardTitle>
      <Info>
        <InfoItem>
          <InfoTitle>Gender</InfoTitle>
          <InfoDescr>{gender}</InfoDescr>
        </InfoItem>
        <InfoItem>
          <InfoTitle>Status</InfoTitle>
          <InfoDescr>{status}</InfoDescr>
        </InfoItem>
        <InfoItem>
          <InfoTitle>Species</InfoTitle>
          <InfoDescr>{species}</InfoDescr>
        </InfoItem>
        <InfoItem>
          <InfoTitle>Origin</InfoTitle>
          <InfoDescr>{origin && origin.name}</InfoDescr>
        </InfoItem>
        <InfoItem>
          <InfoTitle>Type</InfoTitle>
          <InfoDescr>{type ? type : "Unknown"}</InfoDescr>
        </InfoItem>
      </Info>
    </Item>
  );
};

export default ItemCard;
