import React from 'react';
// Saare landing page components jo pehle App.jsx mein import the, ab yahan import honge
import Hero from "./hero";
import Demo from "./demo";
import DemoVideos from "./DemoVideos";
import Services from "./services";
import Benefits from "./Benefits";
import AiEcosystem from "./AiEcosystem";
import Industries from "./Industries";
import EasySolutions from "./EasySolutions";
import Portfolio from "./Portfolio";
import JsonMarketplace from "./JsonMarketplace";
import WhyChooseUs from "./WhyChooseUs";
import WorkingProcess from "./WorkingProcess";
import AboutCompany from "./AboutCompany";
import MeetTeam from "./MeetTeam";
import AwardsSection from "./AwardsSection";
import Pricing from "./Pricing";
import PricingBonusTable from "./PricingBonusTable";
import TestimonialSlider from "./TestimonialSlider";
import FaqSection from "./FaqSection";
import ContactEnquiry from "./ContactEnquiry";
import LetsTalkCTA from "./LetsTalkCTA";

function Home() {
  return (
    <>
      <Hero />
      <Demo />
      <DemoVideos />
      <Services/>
      <Benefits/>
      <AiEcosystem/>
      <Industries/>
      <EasySolutions/>
      <Portfolio/>
      <JsonMarketplace/>
      <WhyChooseUs/>
      <WorkingProcess/>
      <AboutCompany/>
      <MeetTeam/>
      <AwardsSection/>
      <Pricing/>
      <PricingBonusTable/>
      <TestimonialSlider/>
      <FaqSection/>
      <ContactEnquiry/>
      <LetsTalkCTA/>
    </>
  );
}

export default Home;