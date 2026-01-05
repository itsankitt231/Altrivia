import { useState } from "react";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import { useScrollAnimation } from "./hooks/useScrollAnimation";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import InfiniteLogoScroll from "./components/InfiniteLogoScroll";
import ToolsLogoScroll from "./components/ToolsLogoScroll";
import Tracks from "./components/Tracks";
import GenAIDemo from "./components/GenAIDemo";
import Features from "./components/Features";
import WhyAltriviansWin from "./components/WhyAltriviansWin";
import WhatWillYouMaster from "./components/WhatWillYouMaster";
import Programs from "./components/Programs";
import Mentors from "./components/Mentors";
import Roadmap from "./components/Roadmap";
import Curriculum from "./components/Curriculum";
import Pricing from "./components/Pricing";
import Creation from "./components/Creation";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import JoinUs from "./components/JoinUs";
import LeadForm from "./components/LeadForm";
import Footer from "./components/Footer";
import Inside from "./components/Inside";
import Ribbon from "./components/Ribbon";

function AppContent() {
  const [lead, setLead] = useState(null);
  const { isDarkMode } = useTheme();
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-neutral-950 text-white' : 'bg-white text-slate-900'} transition-colors duration-300`}>
      <Nav />
      <Ribbon />
      <Hero />
      <InfiniteLogoScroll/>
      <Inside />
      <Programs />
      <GenAIDemo />
      <main className={`pb-16 ${isDarkMode ? 'text-neutral-100 bg-neutral-900' : 'text-neutral-800 bg-gray-50'} -mt-12 rounded-t-3xl transition-colors duration-300`}>
        <div className="max-w-6xl mx-auto px-6 pt-16">
          <Mentors />
           <Tracks />
          <Creation />
          <Curriculum />
          <ToolsLogoScroll />
          <WhatWillYouMaster />
          <Testimonials />
          <WhyAltriviansWin />
          <FAQ/>
          <JoinUs/>
          {/* <section
            ref={ref}
            className={`mt-12 transition-all duration-1000 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className={`text-3xl font-bold mb-6 ${isVisible ? 'animate-scale-in' : ''}`}>Apply to join the next cohort</h2>
              <LeadForm onSuccess={(data) => setLead(data)} />
              {lead && <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 text-green-900 dark:text-green-100 rounded transition-colors duration-300">Thanks — we received your submission.</div>}
            </div>
          </section> */}
        </div>
      </main>
      </div>
    );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
