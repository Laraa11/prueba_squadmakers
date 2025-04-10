import styled from "styled-components";
import { FaStar } from "react-icons/fa";

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

export const ButtonFavorite = styled.button`
  position: absolute;
  background: white;
  border: none;
  border-radius: 50%;
  padding: 10px;
  display: flex;
  cursor: pointer;
  align-items: center; 
  justify-content: center; 
  margin: 10px;
`;

export const StarIcon = styled(FaStar)`
  color: #9e9d99;
  font-size: 24px;
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
`
export const Text = styled.p`
  margin: 0;
`