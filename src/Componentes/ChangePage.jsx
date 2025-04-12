import React from "react";

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