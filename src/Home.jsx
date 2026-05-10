import React from 'react';
import Nav from "./Nav";
import Hero from "./Hero";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
