import React, { useEffect, useState } from 'react';
import { Card, Image, Label, Text, ContentContainer, DetailsContainer, Title, ButtonContent, ButtonFavorite, StarIcon, ButtonStatus, ButtonText, TitleContainer } from './general-styles';
import { BiCheckCircle, BiHelpCircle, BiXCircle } from 'react-icons/bi';
import axios from 'axios';


const CharacterCard = ({ character }) => {
  const [firstSeen, setFirstSeen] = useState('');

  useEffect(() => {
    axios.get(character.episode[0])
      .then(response => {
        setFirstSeen(response.data.name)
      })
      .catch(error => 
        console.error('Error fetching episodes:', error)
      );
  }, []);

  return (
    <Card>
      <ButtonFavorite>
        <StarIcon />
      </ButtonFavorite>
      <Image src={character.image} />
      <ContentContainer>
        <TitleContainer>
        <Title>{character.name}</Title>
        <ButtonStatus status={character.status}>
          <ButtonContent>
            {character.status === "Alive" && <BiCheckCircle size={16} />}
            {character.status === "unknown" && <BiHelpCircle size={16} />}
            {character.status === "Dead" && <BiXCircle size={16} />}
            {character.status.charAt(0).toUpperCase() + character.status.slice(1).toLowerCase()}
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