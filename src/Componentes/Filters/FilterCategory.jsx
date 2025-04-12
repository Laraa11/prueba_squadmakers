import React from "react";
import { ButtonFilter, CategoryTittle, ContainerButtons } from "./filter-styles";
import { RxCrossCircled } from "react-icons/rx";

const FilterCategory = ({ category, options, filterToSearch, setFilterToSearch }) => {

  const handleFilterClick = (filter) => {
    setFilterToSearch((prev) => ({
      ...prev,
      [category]: prev[category] === filter ? '' : filter,
    }));
  };

  const isButtonSelected = (filter) => filterToSearch[category] === filter;

  return (
    <>
      <CategoryTittle>{category}</CategoryTittle>
      <ContainerButtons>
        {options.map((filter) => (
          <ButtonFilter
            key={filter}
            onClick={() => handleFilterClick(filter)}
            isButtonSelected={isButtonSelected(filter)}
          >
            {filter} {isButtonSelected(filter) && <RxCrossCircled/>}
          </ButtonFilter>
        ))}
      </ContainerButtons>
    </>
  );
};

export default FilterCategory;