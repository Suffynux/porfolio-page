'use-client'

import Image from "next/image";

import Hero from "./Components/Hero";
import Portfolio from "./Components/Portfolio";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Example from "./Components/Navbar";

export default function Home() {
  return <>
  {/* Hero section */}



  
  {/* <Example/> */}
  <Hero  />
  <Portfolio/>
  <About/>
  <Footer/>

  </>;
}
