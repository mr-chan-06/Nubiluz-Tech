import React from 'react';
import Nav from "./Nav";
import Hero from "./Hero";
import Services from "./Services";
import MarketingExpertise from "./MarketingExpertise";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <MarketingExpertise />
      </main>
      <Footer />
    </>
  );
}
