import React from "react";
import { ButtonFilter, ContainerButtonFilter } from "./general-styles";

const Filters = ({ filterFavorites, setFilterFavorites }) => {

  return (
    <ContainerButtonFilter>
      <ButtonFilter
        onClick={() => setFilterFavorites('favorites')}
        isActive={filterFavorites === 'favorites'}>
        Favorites
      </ButtonFilter>
      <ButtonFilter
        onClick={() => setFilterFavorites('all')}
        isActive={filterFavorites === 'all'}>
        All
      </ButtonFilter>
    </ContainerButtonFilter>
  );
}

export default Filters;