import Image from "next/image";

import {
  StyledTextContainer,
  StyledTitle,
  StyledDescription,
  StyledInfoContainer,
  StyledCardsContainer,
  StyledImageContainer,
  StyledContainer,
  StyledBriefCard,
  StyledSearchCard,
  StyledPitchCard,
} from "./elements";

export const AgencySelection = ({
  image,
  title,
  description,
  briefCardIcon,
  briefIconAlt,
  briefCardHeading,
  briefCardText,
  searchCardIcon,
  searchIconAlt,
  pitchIconAlt,
  searchCardHeading,
  searchCardText,
  pitchCardIcon,
  pitchCardHeading,
  pitchCardText,
  ...props
}) => {
  return (
    <StyledContainer {...props}>
      <StyledTextContainer {...props}>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledTextContainer>
      <StyledInfoContainer {...props}>
        <StyledImageContainer>
          <Image src={image.src} width={320} height={500} />
        </StyledImageContainer>
        <StyledCardsContainer {...props}>
          <StyledBriefCard icon={briefCardIcon} alt={briefIconAlt} heading={briefCardHeading} text={briefCardText} />
          <StyledSearchCard icon={searchCardIcon} alt={searchIconAlt} heading={searchCardHeading} text={searchCardText} />
          <StyledPitchCard icon={pitchCardIcon} alt={pitchIconAlt} heading={pitchCardHeading} text={pitchCardText} />
        </StyledCardsContainer>
      </StyledInfoContainer>
    </StyledContainer>
  );
};
