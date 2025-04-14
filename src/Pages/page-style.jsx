import styled from "styled-components";

export const MainPageContainer = styled.div `
  align-items: center; 
  display: flex; 
  flex-direction: column;
  height: 100vh;
`;

export const FiltersContainer = styled.div `
  max-width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const CardsContainer = styled.div `
  // grid-template-columns: repeat(2, 1fr);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
  gap: 20px;
  min-width: 1200px;
`;