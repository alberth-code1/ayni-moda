import { useParams, useNavigate } from "react-router-dom";
import { products } from "../components/PrductList";
import { ProductDetail } from "../components/ProductDetail";
import { useState, useEffect } from "react";

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showNotif, setShowNotif] = useState(false);
  const product = products.find((p) => p.id === Number(id));

  useEffect(() => {
    let timer;
    if (showNotif) {
      timer = setTimeout(() => setShowNotif(false), 2000);
    }
    return () => clearTimeout(timer);
  }, [showNotif]);

  if (!product) {
    return <div className="text-center mt-10">Producto no encontrado</div>;
  }

  const handleAddToCart = () => {
    setShowNotif(true);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <button
        className="mb-4 text-blue-700 underline font-semibold"
        onClick={() => navigate(-1)}
      >
        Volver
      </button>
      {showNotif && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "2rem 2.5rem",
              borderRadius: "1rem",
              boxShadow: "0 4px 24px #0002",
              fontSize: "1.2rem",
              color: "#256029",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            ¡Producto agregado al carrito!
          </div>
        </div>
      )}
      <ProductDetail product={product} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default ProductDetailPage;
