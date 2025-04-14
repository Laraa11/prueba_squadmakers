import React, { useEffect, useState } from "react";
import { ContainerModalBody, ContainerModalFooter, ContainerModalTitle, ModalAcceptButton, 
  ModalCloseButton, ModalContainer, ModalTitle } from "./filter-styles";
import { RxCross1 } from "react-icons/rx";
import FilterCategory from "./FilterCategory";

const FilterModal = ({ openAdvancedFilterModal, setOpenAdvancedFilterModal, setFilterAdvanced, filterAdvanced }) => {
  const [filterToSearch, setFilterToSearch] = useState({
    Species: '',
    Gender: '',
    Status: ''
  });

  const handleAccept = () => {
    setOpenAdvancedFilterModal(false)
    setFilterAdvanced(filterToSearch)
  }

  useEffect(() => {
    if (openAdvancedFilterModal) {
      setFilterToSearch(filterAdvanced)
    }
  }, [openAdvancedFilterModal, filterAdvanced])
  
  
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
              options={["Human", "Alien", "Humanoid", "Mythological Creature"]}
              filterToSearch={filterToSearch}
              setFilterToSearch={setFilterToSearch}
            />
            <FilterCategory
              category="Gender"
              options={["Male", "Female", "Unknown"]}
              filterToSearch={filterToSearch}
              setFilterToSearch={setFilterToSearch}
            />
            <FilterCategory
              category="Status"
              options={["Alive", "Dead"]}
              filterToSearch={filterToSearch}
              setFilterToSearch={setFilterToSearch}
            />
          </ContainerModalBody>
          <ContainerModalFooter>
            <ModalAcceptButton onClick={handleAccept}>Apply Filters</ModalAcceptButton>
          </ContainerModalFooter>

        </ModalContainer>

      )}
    </>

  );
}

export default FilterModal;