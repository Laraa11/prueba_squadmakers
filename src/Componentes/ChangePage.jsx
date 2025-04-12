import React from "react";
import { ButtonFavorite } from "./general-styles";

const ChangePageButtons = ({ goToPrevPage, goToNextPage, prevPage, nextPage }) => {
  
  return (
    <div>
      <button onClick={goToPrevPage} disabled={!prevPage} style={{ margin: '10px' }}>
        Anterior
      </button>
      <button onClick={goToNextPage} disabled={!nextPage}>
        Siguiente
      </button>
    </div>
  );
}

export default ChangePageButtons;