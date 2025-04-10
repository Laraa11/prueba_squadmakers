
import React, { useEffect, useState } from 'react';
import CharacterCard from '../Componentes/CharacterCard.jsx';
import axios from 'axios';
// import { characters } from './utils/data.js';

const MainPage = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(response => {
        setCharacters(response.data.results)
        console.log(response.data.results)
      })
      .catch(error => 
        console.error('Error fetching characters:', error)
      );
  }, []);

  return (
    <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <h1>PRUEBA TÉCNICA SQUAD MAKERS</h1>
      <p>Creación de Card de Personaje siguiendo el diseño dado</p>
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)', 
          columnGap: '20px',
        }}
      >
        {characters.map((character, index) => (
          <div style={{ marginBottom: '10px' }}>
            <CharacterCard character={character} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainPage;