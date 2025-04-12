import React from "react";
import { FilterSelectedAndTotalContainer, FiltersSelected, Text } from "./filter-styles";
import { ButtonFilter } from "./filter-styles";
import { RxCrossCircled } from "react-icons/rx";


const FiltersSelectedAndTotal = ({ filterAdvanced, setFilterAdvanced, total }) => {

  return (
    <FilterSelectedAndTotalContainer>
      <div>
        {Object.values(filterAdvanced).some((val) => val) && (
          <Text>Filtros Aplicados</Text>
        )}
        <FiltersSelected>
          {Object.entries(filterAdvanced).map(([category, value]) => {
            if (value) {
              return (
                <ButtonFilter
                  key={category}
                  isButtonSelected={true}
                  onClick={() =>
                    setFilterAdvanced((prev) => ({
                      ...prev,
                      [category]: '',
                    }))
                  }
                >
                  {value} <RxCrossCircled />
                </ButtonFilter>
              );
            }
            return null;
          })}
        </FiltersSelected>
      </div>
      <Text>{total} personajes</Text>
    </FilterSelectedAndTotalContainer>
  )

}

export default FiltersSelectedAndTotal;