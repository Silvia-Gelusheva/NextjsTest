import {
  StyledCard,
  StyledImageSection,
  StyledText,
  StyledTextSection,
  StyledHeading,
} from "./elements";
import Image from "next/image";

// The Card to be exported goes here

export const Card = ({ icon, heading, text, alt, width, height, ...props }) => {
  return (
    <StyledCard {...props}>
      <StyledImageSection>
        <Image src={icon} alt={alt} width={width} height={height} />
      </StyledImageSection>
      <StyledTextSection>
        <StyledHeading>{heading}</StyledHeading>
        <StyledText>{text}</StyledText>
      </StyledTextSection>
    </StyledCard>
  );
};
