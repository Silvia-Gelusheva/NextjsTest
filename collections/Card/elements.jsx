import styled from "styled-components";

// Styled elements for the Card go here
export const StyledCard = styled(
  ({ topMargin = 0, bottomMargin = 0, ...props }) => <div {...props} />
)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1.75rem;
  margin-left: 4rem;
  padding: 0.3rem 2rem 0.3rem 0.2rem;
  text-decoration: none;
  border-radius: 5px;
  border-style: solid;
  font-family: sans-serif;
  border-width: 2px;

  :hover h1 {
    color: #007fff;
    cursor: pointer;
    text-decoration: underline;
  }

  :hover {
    border-style: solid;
    border-color: #007fff;
    border-radius: 10px;
  }
  margin-top: ${({ topMargin }) => topMargin}rem;
  margin-bottom: ${({ bottomMargin }) => bottomMargin}rem;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const StyledImageSection = styled(
  ({ topMargin = 0, bottomMargin = 0, ...props }) => <div {...props} />
)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2.5rem;
  margin-top: ${({ topMargin }) => topMargin}rem;
  margin-bottom: ${({ bottomMargin }) => bottomMargin}rem;
`;

export const StyledTextSection = styled(
  ({ topMargin = 0, bottomMargin = 0, ...props }) => <div {...props} />
)`
  display: flex;
  flex-direction: column;

  margin-top: ${({ topMargin }) => topMargin}rem;
  margin-bottom: ${({ bottomMargin }) => bottomMargin}rem;
`;

export const StyledHeading = styled.h1`
  font-family: Poppins;
  font-size: 1rem;
  line-height: 0.25rem;
  font-weight: 600;
  margin-top: 1rem;
  margin-bottom: 0;
  text-align: left;
`;

export const StyledText = styled.p`
  font-family: Poppins;
  font-size: 0.8rem;
  line-height: 1.25rem;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 0;
  text-align: left;
`;
