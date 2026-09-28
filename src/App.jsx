import { HashRouter, Routes, Route } from "react-router-dom";
import CustomCursor from "./components/CustomCursor";
import Header from "./components/Header";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import OurServices from "./pages/OurServices";
import OurEvents from "./pages/OurEvents";
import News from "./pages/News";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";

export default function App() {
  return (
    <HashRouter>
      <div className="font-body">
        <ScrollToTop />
        <CustomCursor />
        <Header />
        <WhatsAppButton />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/our-services" element={<OurServices />} />
            <Route path="/our-events" element={<OurEvents />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
