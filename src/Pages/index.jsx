
import React, { useEffect, useState } from 'react';
import CharacterCard from '../Componentes/CharacterCard.jsx';
import axios from 'axios';
import ChangePageButtons from '../Componentes/ChangePage.jsx';
import Filters from '../Componentes/Filters.jsx';
// import { characters } from './utils/data.js';

const MainPage = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState('https://rickandmortyapi.com/api/character');
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [filterFavorites, setFilterFavorites] = useState('all');


  const goToNextPage = () => {
    if (nextPage) setCurrentPage(nextPage);
  };

  const goToPrevPage = () => {
    if (prevPage) setCurrentPage(prevPage);
  };

  const handleFavorite = (characterId) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(characterId)) {
        return prevFavorites.filter((id) => id !== characterId);
      }
      return [...prevFavorites, characterId];
    });
  };

  let filteredCharacters = characters;
  if (filterFavorites === 'favorites') {
    filteredCharacters = characters.filter((character) => favorites.includes(character.id));
  }


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

  return (

    <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <h1>PRUEBA TÉCNICA SQUAD MAKERS</h1>
      <div style={{ maxWidth: '100%' }}>
          <Filters filterFavorites={filterFavorites} setFilterFavorites={setFilterFavorites} />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '20px',
            minWidth: '1200px',
          }}
        >

          {filteredCharacters.length === 0 ? (
            <p>No hay favoritos seleccionados</p>
          ) : (
            filteredCharacters.map((character, index) => (
              <div key={index}>
                <CharacterCard
                  character={character}
                  favorites={favorites}
                  handleFavorite={handleFavorite}
                />
              </div>
            ))
          )}

        </div>
        {filterFavorites !== 'favorites' && (
          <ChangePageButtons
            goToPrevPage={goToPrevPage}
            goToNextPage={goToNextPage}
            prevPage={prevPage}
            nextPage={nextPage}
          />
        )}
      </div>
    </div>
  );
}

export default MainPage;