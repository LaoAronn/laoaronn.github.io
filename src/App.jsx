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
import About from "./pages/About";
import Works from "./pages/Works";
import Projects from "./pages/Projects";
import Footer from "./pages/Footer";

const AppRoutes = () => {
  const location = useLocation();

  return (
    <main>
      <Routes>
        <Route path="/works" element={<Works />} />
        <Route path="/" element={<Projects />} />
        <Route path="/about" element={<About />} />
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
        <Footer />
      </BrowserRouter>
    </ReactLenis>
  )
}

export default App;