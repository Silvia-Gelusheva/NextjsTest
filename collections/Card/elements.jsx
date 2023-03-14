// Styled elements for the Card go here

import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  align-items: center; 
  margin: 20px 30px 20px 30px;
  padding: 0px 20px 0px 20px;
  flex-direction: row;  
  text-decoration: none;
  border-radius: 10px
  border-style: solid;
  font-family: sans-serif; 

 :hover h1{
    color: #007FFF;
    cursor: pointer;
    text-decoration: underline;
  } 

  :hover {
    border-style: solid;
    border-color: #007FFF;
    border-radius: 10px
  } 
`;

export const StyledImageSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  mix-blend-mode: multiply;
  margin: 15px;
`;

export const StyledTextSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

export const StyledHeading = styled.h1`
font-size: 17px;
margin: 0;
padding: 0;
`;

export const StyledText = styled.p`
font-size: 15px;
margin-top: 5px;
padding: 0;
`