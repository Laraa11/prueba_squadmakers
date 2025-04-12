import styled from "styled-components";
import { FaStar } from "react-icons/fa";

//CHARACTER CARD STYLES

export const Card = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  width: 600px;
  flex-direction: row;
  display: flex;
`;

export const Image = styled.img`
  max-width: 30%;
  border-radius: 15px 0 0 15px;

`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;
`;

export const Title = styled.h3`
  margin: 0;
`;

export const RoundedButton = styled.button`
  border: none;
  border-radius: 50%;
  padding: 10px;
  display: flex;
  cursor: pointer;
  align-items: center; 
  justify-content: center; 
  margin: 10px;
  background: white;
  color: #808C73;
`;

export const ButtonFavorite = styled(RoundedButton)`
  position: absolute;
  background: ${props => props.isFavorite ? '#B6DA8B' : 'white'};
`;



export const StarIcon = styled(FaStar)`
  color: ${props => props.isFavorite ? '#588028' : '#9e9d99'};
  font-size: 20px;
`;

export const ButtonStatus = styled.button`
  background-color: ${(props) => {
    switch (props.status) {
      case "Alive":
        return "#e6f3d8"
      case "Dead":
        return "#f8d7da"
      default:
        return "#fff3cd"
    }
  }};
  color: ${(props) => {
    switch (props.status) {
      case "Alive":
        return "#0f5132"
      case "Dead":
        return "#842029"
      default:
        return "#444444"
    };
  }};
  border: none;
  border-radius: 20px;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 15px;
`;

export const ButtonContent = styled.span`
  gap: 5px;
  display: flex;
  align-items: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-top: 10px;
  width: 100%;
`;

export const DetailsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 25px;
`;

export const Label = styled.p`
  color: grey;
  font-weight: bold;
  margin: 0; 
  margin-bottom: 10px;
`
export const Text = styled.p`
  margin: 0;
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
  ${(props) => props.isActive ? 'background-color: #B6DA8B;' : 'background-color: white;'};
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

export const ButtonFilter = styled.button`
  padding: 10px 15px;
  background-color: #FAFAFA;
  border: 1px solid #C7CBC2;
  cursor: pointer;
  border-radius: 32px;
  color: #575B52;
`

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

