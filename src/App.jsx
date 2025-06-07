import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Principios from "./pages/Principios";
import Valores from "./pages/Valores";
import { ProductList } from "./components/PrductList";
import ProductDetailPage from "./pages/ProductDetailPage";
import { CartProvider } from "./context/CartProvider";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/ayni-moda/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/principios" element={<Principios />} />
          <Route path="/valores" element={<Valores />} />
          <Route path="/list-products" element={<ProductList />} />
          <Route path="/list-products/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
