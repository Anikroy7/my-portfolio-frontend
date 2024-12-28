"use client";

import AboutMe from "@/src/components/ui/homepage/AboutMe";
import Banner from "@/src/components/ui/homepage/Banner";
import Blogs from "@/src/components/ui/homepage/Blogs";
import Contact from "@/src/components/ui/homepage/Contact";
import Experience from "@/src/components/ui/homepage/ExperienceAndEducation";
import Footer from "@/src/components/ui/homepage/Footer";
import Projects from "@/src/components/ui/homepage/Projects";
import ScrollToTop from "@/src/components/ui/homepage/ScrollToTop";
import Skills from "@/src/components/ui/homepage/Skills";


export default function Home() {
  return (
    <>
      <Banner />
      <AboutMe />
      <Experience/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Blogs/>
      <ScrollToTop />
      <Footer/>
    </>
  );
}
