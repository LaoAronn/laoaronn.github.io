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
import ThemeToggle from "./components/ThemeToggle";
import { ThemeProvider } from "./context/ThemeContext";
import About from "./pages/About";
import Works from "./pages/Works";
import Projects from "./pages/Projects";
import Footer from "./pages/Footer";

const AppRoutes = () => {
  const location = useLocation();

  return (
    <main className="text-[var(--text)]">
      <Routes>
        <Route path="/" element={<About />} /> {/* Default route */}
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </main>
  )
}

const App = () => {
  return (
    <ThemeProvider>
      <ReactLenis root>
        <BrowserRouter>
          <Header />
          <AppRoutes />
          <Footer />
          <ThemeToggle />
        </BrowserRouter>
      </ReactLenis>
    </ThemeProvider>
  )
}

export default App;