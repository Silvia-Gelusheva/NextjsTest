import { AgencySelection, Hero } from "../sections";

const heroProps = {
  image: { src: "/img/heroimg.png", alt: "", width: 1000, height: 1680 },
  title: "Agency procurement, outsourced.",
  description: "Start the process here",
  ctaText: "Start",
};

const agencySelectionProps = {
  title: "Managed agency selection",
  description: "Strengthen your onboarding process",
  image: { src: "/img/video.png", width: 320, height: 500 },
  briefCardIcon: { src: "/img/brief.png", alt: "Brief Icon", width: 45, height: 45 },
  briefCardHeading: "Brief",
  briefCardText: <p> Complete <strong> brief writing or  simple guidance </strong> on what to   include, we've got you covered.</p>,
  searchCardIcon: { src: "/img/search.png", alt: "Search Icon", width: 45, height: 45 },
  searchCardHeading: "Search",
  searchCardText: <p>In-depth agency search covering;  <strong>criteria matching; </strong>door knocking  and due-diligence vetting.</p>,
  pitchCardIcon: { src: "/img/pitch.png", alt: "Pitch IconS", width: 45, height: 45 },
  pitchCardHeading: "Pitch",
  pitchCardText: <p>Comprehensive <strong>pitch management, </strong> including comms, diary management  and pitch hosting.</p>,
};


export default function Home() {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <div>
        {/* <Hero {...heroProps} /> */}
        {/** Other sections */}
        <AgencySelection {...agencySelectionProps} />
      </div>
    </>
  );
}
