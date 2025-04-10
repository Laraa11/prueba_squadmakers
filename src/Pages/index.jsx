
import React, { useEffect, useState } from 'react';
import CharacterCard from '../Componentes/CharacterCard.jsx';
import axios from 'axios';
// import { characters } from './utils/data.js';

const MainPage = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState('https://rickandmortyapi.com/api/character');
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);

  useEffect(() => {
    axios.get(currentPage)
      .then(response => {
        setCharacters(response.data.results);
        setNextPage(response.data.info.next);
        setPrevPage(response.data.info.prev);
      })
      .catch(error => 
        console.error('Error fetching characters:', error)
      );
  }, [currentPage]);

  const goToNextPage = () => {
    if (nextPage) setCurrentPage(nextPage);
  };

  const goToPrevPage = () => {
    if (prevPage) setCurrentPage(prevPage);
  };

  return (
    <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <h1>PRUEBA TÉCNICA SQUAD MAKERS</h1>
      <p>Creación de Card de Personaje siguiendo el diseño dado</p>
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)', 
          gap: '20px',
        }}
      >
        {characters.map((character, index) => (
          <div>
            <CharacterCard character={character} />
          </div>
        ))}
      </div>
      <div>
        <button onClick={goToPrevPage} disabled={!prevPage} style={{ margin: '10px' }}>
          Anterior
        </button>
        <button onClick={goToNextPage} disabled={!nextPage}>
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default MainPage;