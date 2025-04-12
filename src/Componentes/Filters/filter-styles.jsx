import styled from "styled-components";

export const FilterSelectedAndTotalContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Text = styled.p`
  color: #333630;
  font-size: 22px;
  font-weight: bold;
`;

export const FiltersSelected = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const ButtonFilter = styled.button`
  background-color: ${(props) => props.isButtonSelected ? '#C7CBC2;' : '#FAFAFA;'};
  border: ${(props) => props.isButtonSelected ? '1px solid #333630 ' : '1px solid #C7CBC2'};  
  color: ${(props) => props.isButtonSelected ? '#333630' : '#575B52'};  
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
`

//FILTERS STYLES

export const FiltersContainer = styled.div`
  justify-content: space-between;
  flex-direction: row;
  display: flex;
`

export const ContainerButtonFilter = styled.div`
  display: flex;
  background-color:rgb(255, 255, 255);
  padding: 4px;
  border-radius: 32px;
  gap: 8px;
  margin: 5px;
`;

export const ButtonFilterFavorites = styled.button`
  background-color: ${(props) => props.isActive ? '#B6DA8B' : 'white'};
  color: ${(props) => props.isActive ? '#354E18' : '#575B52'};  
  border: none;
  border-radius: 32px;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 15px;
  cursor: pointer;
  &:hover{
    background-color: #B6DA8B;
    color: #354E18;
  }:
`;

//FILTERMODAL STYLES

export const ModalContainer = styled.div`
  z-index: 1000;
  position: fixed;
  border-radius: 16px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 428px;
  background-color: #FAFAFA;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
`;

export const ContainerModalTitle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const ModalTitle = styled.h3`
  margin-left: 20px;
`;

export const ModalCloseButton = styled.button`
  width: 44px;
  height: 44px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const ContainerModalBody = styled.div`
  width: 100%;
  flex-grow: 1; 
`;

export const CategoryTittle = styled.p`
  margin-left: 20px;
  font-size: 15px;
`;

export const ContainerButtons = styled.div`
  display: flex;
  margin-left: 20px;
  gap: 10px;
`;

export const ContainerModalFooter = styled.div`
  width: 100%;
  display: flex;
  border-top: 1px solid #ddd;
  height: 60px;
`;

export const ModalAcceptButton = styled.button`
  margin-left: auto;
  margin-top: 10px;
  padding: 10px 15px;
  width: 143px;
  height: 44px;
  background-color: #8BC547;
  border: none;
  cursor: pointer;
  border-radius: 32px;
  color: #354E18;
  font-weight: bold;
`;


