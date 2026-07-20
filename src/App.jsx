import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./components/Contact";
import NotFound from "./Pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={ <Home />} />
      </Routes>

      <Footer />
    </BrowserRouter>

  );
}