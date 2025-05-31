import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Principios from './pages/Principios';
import Valores from './pages/Valores';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/principios" element={<Principios />} />
        <Route path="/valores" element={<Valores />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
