
import React, { useEffect, useState } from 'react';
import CharacterCard from '../Componentes/CharacterCard.jsx';
import axios from 'axios';
import ChangePageButtons from '../Componentes/ChangePage.jsx';
import FiltersSelectedAndTotal from '../Componentes/Filters/FiltersSelectedAndTotal.jsx';
import FiltersFavoritesAndAdvanced from '../Componentes/Filters/FiltersFavoritesAndAdvanced.jsx';
import { CardsContainer, FiltersContainer, MainPageContainer } from './page-style.jsx';
// import { characters } from './utils/data.js';

const MainPage = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState('https://rickandmortyapi.com/api/character');
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [total, setTotal] = useState(0);
  const [filterFavorites, setFilterFavorites] = useState('all');
  const [filterAdvanced, setFilterAdvanced] = useState({
    Species: '',
    Gender: '',
    Status: ''
  });
  const [params, setParams] = useState({})

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

  useEffect(() => {
    if (filterFavorites === 'all') {
      if (params !== '') {
        axios.get(`https://rickandmortyapi.com/api/character/?${params}`)
          .then(response => {
            setCharacters(response.data.results);
            setTotal(response.data.info.count)
            setNextPage(response.data.info.next);
            setPrevPage(response.data.info.prev);
          })
          .catch(error =>
            console.error('Error fetching characters:', error)
          );
      }
      else {
        axios.get(currentPage)
          .then(response => {
            setCharacters(response.data.results);
            setTotal(response.data.info.count)
            setNextPage(response.data.info.next);
            setPrevPage(response.data.info.prev);
          })
          .catch(error =>
            console.error('Error fetching characters:', error)
          );
      }
    }
  }, [currentPage, filterFavorites, params]);

  useEffect(() => {
    if (filterFavorites === 'favorites') {
      if (favorites.length > 0) {
        axios.get(`https://rickandmortyapi.com/api/character/${favorites}`)
          .then(response => {
            const charactersData = Array.isArray(response.data) ? response.data : [response.data]
            setCharacters(charactersData);
            setTotal(charactersData.length)
          })
          .catch(error =>
            console.error('Error fetching characters:', error)
          );
      }
      else {
        setCharacters([])
        setTotal(0)
      }
    }
  }, [favorites, filterFavorites]);

  useEffect(() => {
    let newParams = '';
    if (filterAdvanced.Species !== '') {
      newParams += `species=${filterAdvanced.Species}&`;
    }
    if (filterAdvanced.Gender !== '') {
      newParams += `gender=${filterAdvanced.Gender}&`;

    }
    if (filterAdvanced.Status !== '') {
      newParams += `status=${filterAdvanced.Status}&`;
    }
    if (newParams.endsWith('&')) {
      newParams = newParams.slice(0, -1);
    }
    setParams(newParams)
  }, [filterAdvanced])

  // TODO: responsive
  return (

    <MainPageContainer>
      <FiltersContainer>
        <FiltersFavoritesAndAdvanced
          filterFavorites={filterFavorites}
          setFilterFavorites={setFilterFavorites}
          filterAdvanced={filterAdvanced}
          setFilterAdvanced={setFilterAdvanced}
        />
        <FiltersSelectedAndTotal
          filterAdvanced={filterAdvanced}
          setFilterAdvanced={setFilterAdvanced}
          total={total}
          filterFavorites={filterFavorites}
        />
        <CardsContainer>
          {characters.length === 0 ? (
            <p>There are no characters</p>
          ) : (
            characters.map((character, index) => (
              <div key={index}>
                <CharacterCard
                  character={character}
                  favorites={favorites}
                  handleFavorite={handleFavorite}
                />
              </div>
            ))
          )}

        </CardsContainer>
      </FiltersContainer>
      {/*TODO: Estilos botones de cambio de página */}
      {filterFavorites !== 'favorites' && (
        <ChangePageButtons
          goToPrevPage={goToPrevPage}
          goToNextPage={goToNextPage}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      )}
    </MainPageContainer>
  );
}

export default MainPage;