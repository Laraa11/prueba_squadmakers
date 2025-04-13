import React from "react";
import { FilterSelectedAndTotalContainer, FiltersSelected, Text } from "./filter-styles";
import { ButtonFilter } from "./filter-styles";
import { RxCrossCircled } from "react-icons/rx";

const FiltersSelectedAndTotal = ({ filterAdvanced, setFilterAdvanced, total }) => {
  const { Species, Gender, Status } = filterAdvanced;

  const handleFilter = (filterName) => {
    setFilterAdvanced((prev) => ({
      ...prev,
      [filterName]: '',
    }));
  };

  const anyFilterActive = Species || Gender || Status;

  return (
    <FilterSelectedAndTotalContainer>
      <div>
        {anyFilterActive && <Text>Filtros Aplicados</Text>}

        <FiltersSelected>
          {Species && (
            <ButtonFilter isButtonSelected onClick={() => handleFilter('Species')}>
              {Species} <RxCrossCircled />
            </ButtonFilter>
          )}
          {Gender && (
            <ButtonFilter isButtonSelected onClick={() => handleFilter('Gender')}>
              {Gender} <RxCrossCircled />
            </ButtonFilter>
          )}
          {Status && (
            <ButtonFilter isButtonSelected onClick={() => handleFilter('Status')}>
              {Status} <RxCrossCircled />
            </ButtonFilter>
          )}
        </FiltersSelected>
      </div>

      <Text>{total} personajes</Text>
    </FilterSelectedAndTotalContainer>
  );
};

export default FiltersSelectedAndTotal;
