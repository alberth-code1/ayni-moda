import { Link } from "react-router-dom";

const ProductCard = ({ product }) => (
  <Link to={`/list-products/${product.id}`}>
    <div
      className="bg-white border-2 border-green-200 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer relative overflow-hidden group hover:scale-105"
      style={{
        minHeight: "350px",
        boxShadow: "0 4px 16px #a3c58522",
        borderColor: "#e5e7eb",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300"
      />
      <div className="p-5">
        <h3 className="text-xl font-bold text-green-900 mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 mb-3">{product.description}</p>
        <p className="text-green-700 font-extrabold text-lg mb-2">
          {product.price.toFixed(2)}bs.
        </p>
        <div className="flex gap-2 mt-2">
          {product.sizes.map((size) => (
            <span
              key={size}
              className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold"
            >
              {size}
            </span>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-green-100 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
    </div>
  </Link>
);

export default ProductCard;
