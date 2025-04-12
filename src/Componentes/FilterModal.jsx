import React from "react";
import { ButtonFilter, CategoryTittle, ContainerButtons, ContainerModalBody, ContainerModalFooter, ContainerModalTitle, ModalAcceptButton, ModalCloseButton, ModalContainer, ModalTitle } from "./general-styles";
import { RxCross1 } from "react-icons/rx";

const FilterModal = ({ openAdvancedFilterModal, setOpenAdvancedFilterModal }) => {
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
            <CategoryTittle>Species</CategoryTittle>
            <ContainerButtons>
              <ButtonFilter>Human</ButtonFilter>
              <ButtonFilter>Cronenbergs</ButtonFilter>
              <ButtonFilter>Meeseeks</ButtonFilter>
              <ButtonFilter>Big telepat spider</ButtonFilter>
            </ContainerButtons>
            <CategoryTittle>Gender</CategoryTittle>
            <ContainerButtons>
              <ButtonFilter>Male</ButtonFilter>
              <ButtonFilter>Female</ButtonFilter>
              <ButtonFilter>Unkown</ButtonFilter>
            </ContainerButtons>
            <CategoryTittle>State</CategoryTittle>
            <ContainerButtons>
              <ButtonFilter>Alive</ButtonFilter>
              <ButtonFilter>Dead</ButtonFilter>
            </ContainerButtons>
          </ContainerModalBody>
          <ContainerModalFooter>
            <ModalAcceptButton onClick={() => setOpenAdvancedFilterModal(false)}>Aplicar Filtros</ModalAcceptButton>
          </ContainerModalFooter>

        </ModalContainer>

      )}
    </>

  );
}

export default FilterModal;