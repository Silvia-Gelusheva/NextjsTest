import styled from "styled-components";
import {
  SectionContainer,
  SectionBigHeading,
  SectionSubheading, 
} from "~/components";
import { Card } from "../../collections/Card";

export const StyledContainer = styled(({ height, ...props }) => (
  <SectionContainer {...props} />
))`
  align-items: center;
  flex-direction: column;
`;
export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 40px 0 0 0;
  color: black;
  font-size: 40px;
`;

export const StyledDescription = styled((props) => (
  <SectionSubheading {...props} />
))`
  margin: 0 0 40px 0;
  color: black;
  font-size: 20px;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  place-items: center;
  font-family: sans-serif;
`;

export const StyledInfoContainer = styled(({ ...props }) => <div {...props} />)`
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
`;

export const StyledImageContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  display: flex;
  justify-content: flex-end;
  width: 80%;
  height: 100%;
  margin-left: auto;
  margin-right: 40px;
  background: inherit;
`;

export const StyledCardsContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  max-width: 100%;
  width: 100%;
  height: 100%;
  max-height: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
`;

export const StyledBriefCard = styled((props) => <Card {...props} />)`
  background-color: #f5f5f5;
  width: 390px;
`;

export const StyledSearchCard = styled((props) => <Card {...props} />)`
  background-color: #f0f0f0;
  width: 430px;
`;

export const StyledPitchCard = styled((props) => <Card {...props} />)`
  background-color: #e8e8e8;
  width: 470px;
`;
