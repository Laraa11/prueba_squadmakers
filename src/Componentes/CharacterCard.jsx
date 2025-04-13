import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Image, Label, Text, ContentContainer, DetailsContainer, Title,
   ButtonContent, ButtonFavorite, StarIcon, ButtonStatus, TitleContainer } from './general-styles';
import { BiCheckCircle, BiHelpCircle, BiXCircle } from 'react-icons/bi';

const CharacterCard = ({ character, favorites, handleFavorite }) => {
  const [firstSeen, setFirstSeen] = useState('');
  const isFavorite = favorites.includes(character.id);

  useEffect(() => {
    axios.get(character.episode[0])
      .then(response => {
        setFirstSeen(response.data.name)
      })
      .catch(error =>
        console.error('Error fetching episodes:', error)
      );
  }, [character.episode]);

  const handleClickFavorite = () => {
    handleFavorite(character.id);
  };

  return (
    <Card>
      <ButtonFavorite onClick={handleClickFavorite} isFavorite={isFavorite}>
        <StarIcon isFavorite={isFavorite} />
      </ButtonFavorite>
      {/* TODO: spinner cuando esté cargando la imagen*/}
      <Image src={character.image} />
      <ContentContainer>
        <TitleContainer>
          <Title>{character.name}</Title>
          <ButtonStatus status={character.status}>
            <ButtonContent>
              {character.status === "Alive" && <BiCheckCircle size={16} />}
              {character.status === "unknown" && <BiHelpCircle size={16} />}
              {character.status === "Dead" && <BiXCircle size={16} />}
              {character.status[0].toUpperCase() + character.status.slice(1)}
            </ButtonContent>
          </ButtonStatus>
        </TitleContainer>
        <Text>{character.species}</Text>
        <DetailsContainer>
          <Text><Label>Last known location</Label>{character.location.name}</Text>
          <Text><Label>First seen in</Label>{firstSeen}</Text>
        </DetailsContainer>
      </ContentContainer>
    </Card>
  );
};

export default CharacterCard;