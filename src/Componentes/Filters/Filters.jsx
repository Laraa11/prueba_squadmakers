import React, { useState } from "react";
import { ButtonFilterFavorites, ContainerButtonFilter, FiltersContainer } from "./filter-styles";
import { RoundedButton } from "../general-styles";
import { VscSettings } from "react-icons/vsc";
import FilterModal from "./FilterModal";

const Filters = ({ filterFavorites, setFilterFavorites, filterAdvanced, setFilterAdvanced }) => {
  const [openAdvancedFilterModal, setOpenAdvancedFilterModal] = useState(false);
  
  const handleOpenFilterModal = () => {
    if (openAdvancedFilterModal === true) {
      setOpenAdvancedFilterModal(false);
    }
    else {
      setOpenAdvancedFilterModal(true);
    }
  }

  return (
    <FiltersContainer>
      <ContainerButtonFilter>
        <ButtonFilterFavorites
          onClick={() => setFilterFavorites('favorites')}
          isActive={filterFavorites === 'favorites'}>
          Favorites
        </ButtonFilterFavorites>
        <ButtonFilterFavorites
          onClick={() => setFilterFavorites('all')}
          isActive={filterFavorites === 'all'}>
          All
        </ButtonFilterFavorites>
      </ContainerButtonFilter>
      <RoundedButton onClick={handleOpenFilterModal}>
        <VscSettings size={20} />
      </RoundedButton>
      <FilterModal
        openAdvancedFilterModal={openAdvancedFilterModal}
        setOpenAdvancedFilterModal={setOpenAdvancedFilterModal}
        filterAdvanced={filterAdvanced}
        setFilterAdvanced={setFilterAdvanced}
      >
      </FilterModal>
    </FiltersContainer>
  );
}

export default Filters;