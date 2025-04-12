import React, { useState } from "react";
import { ContainerModalBody, ContainerModalFooter, ContainerModalTitle, ModalAcceptButton, 
  ModalCloseButton, ModalContainer, ModalTitle } from "./filter-styles";
import { RxCross1 } from "react-icons/rx";
import FilterCategory from "./FilterCategory";

const FilterModal = ({ openAdvancedFilterModal, setOpenAdvancedFilterModal, setFilterAdvanced }) => {
  const [filterToSearch, setFilterToSearch] = useState({
    Species: '',
    Gender: '',
    State: ''
  });

  const handleAccept = () => {
    setOpenAdvancedFilterModal(false)
    setFilterAdvanced(filterToSearch)
  }
  
  return (
    <>
      {openAdvancedFilterModal === true && (
        <ModalContainer>
          <ContainerModalTitle>
            <ModalTitle>Advanced Filter</ModalTitle>
            <ModalCloseButton 
              onClick={() => setOpenAdvancedFilterModal(false)}>
                <RxCross1 size={20} />
            </ModalCloseButton>
          </ContainerModalTitle>
          <ContainerModalBody>
            <FilterCategory
              category="Species"
              options={["Human", "Cronenbergs", "Meeseeks", "Mythological Creature"]}
              filterToSearch={filterToSearch}
              setFilterToSearch={setFilterToSearch}
            />
            <FilterCategory
              category="Gender"
              options={["Male", "Female", "Unknown", "Genderless"]}
              filterToSearch={filterToSearch}
              setFilterToSearch={setFilterToSearch}
            />
            <FilterCategory
              category="State"
              options={["Alive", "Dead"]}
              filterToSearch={filterToSearch}
              setFilterToSearch={setFilterToSearch}
            />
          </ContainerModalBody>
          <ContainerModalFooter>
            <ModalAcceptButton onClick={handleAccept}>Aplicar Filtros</ModalAcceptButton>
          </ContainerModalFooter>

        </ModalContainer>

      )}
    </>

  );
}

export default FilterModal;