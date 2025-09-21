import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Places from './pages/Places';
import DestinationPage from './components/DestinationPage';
import Booking from './pages/Booking';
import About from './pages/About';
import Admin from './pages/Admin';
import AdminLogin from './pages/AdminLogin';
import Whatsapp from './components/Whatsapp';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

function Main() {
  const location = useLocation();
  const hideNavAndFooter = location.pathname.startsWith("/admin");

  return (
    <>
      {!hideNavAndFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/places" element={<Places />} />
        <Route path="/place/:destinationId" element={<DestinationPage />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
      {!hideNavAndFooter && <Whatsapp />}
      {!hideNavAndFooter && <Footer />}
    </>
  );
}

export default App;
