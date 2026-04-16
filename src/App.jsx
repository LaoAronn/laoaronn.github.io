import "./App.css"

/**
 * Node Modules
 */
import { ReactLenis } from 'lenis/react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

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