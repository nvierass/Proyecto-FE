import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import ArtworkDetail from "./components/ArtworkDetail.jsx";
import ContactForm from "./components/ContactForm.jsx";

import { Routes, Route } from "react-router-dom";

export default function App() {
    return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="artwork/:id" element={<ArtworkDetail />} />
          <Route path="contacto" element={<ContactForm />} />
        </Routes>
        <Footer />
      </>
    );
  }