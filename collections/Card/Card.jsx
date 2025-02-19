import {
  StyledCard,
  StyledImageSection,
  StyledText,
  StyledTextSection,
  StyledHeading,
} from "./elements";
import Image from "next/image";

// The Card to be exported goes here

export const Card = ({ icon, heading, text, alt, ...props }) => {
  return (
    <StyledCard {...props}>
      <StyledImageSection>
        <Image src={icon} alt={alt} width={100} height={100} />
      </StyledImageSection>
      <StyledTextSection>
        <StyledHeading>{heading}</StyledHeading>
        <StyledText>{text}</StyledText>
      </StyledTextSection>
    </StyledCard>
  );
};
