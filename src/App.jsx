import "./App.css"

/**
 * Node Modules
 */
import { ReactLenis } from 'lenis/react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/**
 * Register GSAP plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Components
*/
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Photography from "./components/Photography";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Works from './components/Work';

const App = () => {

  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up');

    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: '-200 bottom',
          end: 'bottom 80%',
          scrub: true
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
      })
    })
  });

  return (
    <ReactLenis root>
      <BrowserRouter>
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<><Hero /><About /><Skill /><Work /><Photography /><Contact /></>} />
            <Route path="/works" element={<Works />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </ReactLenis>
  )
}

export default App;