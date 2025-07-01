import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import Testimonials from "../components/Testimonial";
import Contact from "../components/Contact";
import ReadyJoin from "../components/ReadyJoin";
import Footer from "../components/Footer";
import Founder from "../components/Founder";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Founder/>
      <Features />
      <Testimonials />
      <Contact />
      <ReadyJoin />
      <Footer />
    </>
  );
}
