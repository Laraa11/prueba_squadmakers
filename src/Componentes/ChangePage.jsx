import React from "react";

const ChangePageButtons = ({ goToPrevPage, goToNextPage, prevPage, nextPage }) => {
  
  return (
    <div>
      <button onClick={goToPrevPage} disabled={!prevPage} style={{ margin: '10px' }}>
        Previus Page
      </button>
      <button onClick={goToNextPage} disabled={!nextPage}>
        Next Page
      </button>
    </div>
  );
}

export default ChangePageButtons;