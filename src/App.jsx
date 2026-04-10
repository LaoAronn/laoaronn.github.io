import "./App.css"

/**
 * Node Modules
 */
import { ReactLenis } from 'lenis/react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

/**
 * Register GSAP plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Components & Pages
*/
import Header from "./components/Header";
import Hero from "./pages/Hero";
import AboutPage from "./pages/About";
import Works from "./pages/Works";
import PhotographyPage from "./pages/Photography";
import ContactPage from "./pages/Contact";

const AppRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [location]);

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
    <main>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/works" element={<Works />} />
        <Route path="/photography" element={<PhotographyPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </main>
  )
}

const App = () => {
  return (
    <ReactLenis root>
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>
    </ReactLenis>
  )
}

export default App;