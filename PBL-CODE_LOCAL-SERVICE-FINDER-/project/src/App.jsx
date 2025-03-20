import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import CustomerLogin from './pages/auth/CustomerLogin';
import CustomerSignup from './pages/auth/CustomerSignup';
import ProviderLogin from './pages/auth/ProviderLogin';
import ProviderSignup from './pages/auth/ProviderSignup';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auth/customer/login" element={<CustomerLogin />} />
            <Route path="/auth/customer/signup" element={<CustomerSignup />} />
            <Route path="/auth/provider/login" element={<ProviderLogin />} />
            <Route path="/auth/provider/signup" element={<ProviderSignup />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;