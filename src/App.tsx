import { Routes, Route } from "react-router-dom";
import Header from "../src/components/Header.jsx";
import Footer from "../src/components/Footer.jsx";
import HomePage from "../src/pages/Home.jsx";
import AboutPage from "../src/pages/About.jsx";
import ServicesPage from "../src/pages/Services.jsx";

import ProductsPage from "../src/pages/Products.jsx";
import ClientsPage from "../src/pages/Clients.jsx";
import ContactPage from "../src/pages/Contact.jsx";

import WhatsAppFloating from "../src/components/WhatsAppFloat.jsx";
import ScrollToTop from "@/lib/scrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <WhatsAppFloating />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          {/* <Route path="/projects" element={<ProjectsPage />} /> */}
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
