import React from 'react';
import { useNavigate } from 'react-router-dom';

// Saare landing page components
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
  const navigate = useNavigate();

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
      
      <JsonMarketplace 
        // 1. Agar niche wale button par click kare toh normal marketplace par jaye
        onNavigateToMarketplace={() => navigate("/marketplace")} 
        
        // 2. Agar kisi CARD par click kare, toh seedha TEMPLATE DETAIL page par jaye usi card ke data ke sath!
        onSelectTemplate={(filePath) => {
          navigate("/template-detail", { state: { selectedFile: filePath } });
          window.scrollTo({ top: 0, behavior: "smooth" });
        }} 
      />
      
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