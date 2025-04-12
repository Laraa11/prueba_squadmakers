import React from "react";
import { ButtonFilter, ContainerButtonFilter } from "./general-styles";

const Filters = ({ setFilterFavorites }) => {

  return (
    <ContainerButtonFilter>
      <ButtonFilter 
        onClick={() => setFilterFavorites('favorites')}>
          Favorites
      </ButtonFilter>
      <ButtonFilter 
        onClick={() => setFilterFavorites('all')}>
          All
      </ButtonFilter>
    </ContainerButtonFilter>
  );
}

export default Filters;