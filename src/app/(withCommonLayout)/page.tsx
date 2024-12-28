"use client";

import AboutMe from "@/src/components/ui/homepage/AboutMe";
import Banner from "@/src/components/ui/homepage/Banner";
import Experience from "@/src/components/ui/homepage/Experience";
import ScrollToTop from "@/src/components/ui/homepage/ScrollToTop";
import Skills from "@/src/components/ui/homepage/Skills";


export default function Home() {
  return (
    <>
      <Banner />
      <AboutMe />
      <Experience/>
      <Skills/>
      <ScrollToTop />
    </>
  );
}
