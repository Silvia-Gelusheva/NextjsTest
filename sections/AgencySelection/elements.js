import styled from "styled-components";
import {
  SectionContainer,
  SectionSubheading,
} from "~/components";
import { Card } from "../../collections/Card";
import { StyledSectionHeading } from "../../components/Typography/elements";

export const StyledContainer = styled(({ height, ...props }) => ( <SectionContainer {...props} />))`
  align-items: center;
  flex-direction: column;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  place-items: center;
  font-family: sans-serif;

  @media (max-width: 768px) {  
    margin-bottom: 0;  
   }
`;
export const StyledTitle = styled((props) => <StyledSectionHeading {...props} />)`
  margin: 2rem 0 0 0;
  line-height: 3rem;
  font-size: 2rem;

  @media (max-width: 768px) {   
    font-size: 2rem;
    line-height: 2rem;
  }
`;
export const StyledDescription = styled((props) => ( <SectionSubheading {...props} />))`
  margin: 0 0 2rem 0;
  font-size: 1rem;

  @media (max-width: 768px) {
       font-size: 1rem;
       line-height: 2rem;
       margin-bottom: 0.5rem;
  }
`;
export const StyledInfoContainer = styled(({ ...props }) => <div {...props} />)`
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  width: 90%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;


  @media (max-width: 768px) {
    flex-direction: column;  
  }
`;

export const StyledImageContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  display: flex;
  justify-content: end;
  width: 80%;
  height: 100%;
  margin-left: auto;
  // margin-right: 4rem;
  background-image: url("../../img/background.png");
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 768px) {  
    justify-content: center;
    width: 80%;
    margin: 2rem;
    background-size: contain;
  }
`;

export const StyledCardsContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  max-width: 100%;
  width: 100%;
  height: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column; 

  @media (max-width: 768px) {
    width: auto;
  }
`;
export const StyledBriefCard = styled((props) => <Card {...props} />)`
  background-color: #f8f8f8;
  border-color: #f8f8f8;
  width: 325px;
`;
export const StyledSearchCard = styled((props) => <Card {...props} />)`
  background-color: #f5f5f5;
  border-color: #f5f5f5;
  width: 345px;
`;
export const StyledPitchCard = styled((props) => <Card {...props} />)`
  background-color: #f0f0f0;
  border-color: #f0f0f0;
  width: 365px;
`;
