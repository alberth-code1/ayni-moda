import { useState } from "react";
import { useCart } from "../context/CartProvider";

const ProductDetail = ({ product, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10));
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Por favor selecciona una talla.");
      return;
    }
    addToCart(product, quantity, selectedSize);
    if (onAddToCart) onAddToCart();
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-md object-cover"
          />
        </div>

        <div className="md:w-1/2 space-y-5">
          <h1 className="text-2xl font-semibold text-gray-900">
            {product.name}
          </h1>
          <p className="text-sm text-gray-600">{product.description}</p>
          <p className="text-xl font-medium text-gray-800">
            {product.price.toFixed(2)}bs.
          </p>

          <div>
            <label htmlFor="size" className="block text-sm text-gray-700 mb-1">
              Talla
            </label>
            <select
              id="size"
              name="size"
              className="w-full border border-gray-300 rounded-md p-2 bg-white text-sm"
              value={selectedSize}
              onChange={handleSizeChange}
            >
              <option value="">Seleccionar talla</option>
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="quantity"
              className="block text-sm text-gray-700 mb-1"
            >
              Cantidad
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              className="w-full border border-gray-300 rounded-md p-2 text-sm"
              value={quantity}
              onChange={handleQuantityChange}
            />
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full bg-gray-900 text-white text-sm py-2 rounded hover:bg-gray-800 transition"
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export { ProductDetail };
