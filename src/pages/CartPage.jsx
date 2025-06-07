import { useCart } from "../context/CartProvider";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  if (cart.length === 0)
    return <div className="text-center mt-10">Tu carrito está vacío.</div>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Carrito de compras</h2>
      <ul>
        {cart.map((item, idx) => (
          <li
            key={item.product.id + item.size + idx}
            className="flex items-center justify-between border-b py-4"
          >
            <div>
              <div className="font-semibold">{item.product.name}</div>
              <div className="text-sm text-gray-600">
                Talla: {item.size || "N/A"}
              </div>
              <div className="text-sm text-gray-600">
                Cantidad: {item.quantity}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-bold text-green-700">
                {(item.product.price * item.quantity).toFixed(2)}bs.
              </span>
              <button
                className="text-red-600 underline"
                onClick={() => removeFromCart(item.product.id, item.size)}
              >
                Quitar
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="text-right mt-6 text-xl font-bold">
        Total: {total.toFixed(2)} bs.
      </div>
    </div>
  );
}
