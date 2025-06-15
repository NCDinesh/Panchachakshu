import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import Testimonials from './pages/Testimonials';
import Products from './pages/Product';
import { FirstVisitProvider } from './contexts/FirstVisitContext';

function App() {
  return (
    <FirstVisitProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="products" element={<Products></Products>} />
          <Route path="*" element={<div className="container py-20 text-center">Page not found</div>} />
        </Route>
      </Routes>
    </Router>
    </FirstVisitProvider>
  );
}

export default App;
