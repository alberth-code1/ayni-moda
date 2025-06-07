import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Manta de Alpaca",
    description: "Manta de alpaca suave y cálida, ideal para el invierno.",
    price: 150,
    image:
      "https://labolivianita.com.bo/wp-content/uploads/2024/06/Manta-de-alpaca.jpg",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    name: "Chompa de lana y algodón",
    description: "Chompa de lana y algodón, perfecta para el invierno.",
    price: 130,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHihUYruVIDkz-kkwhHWteQ3OvE447OgGxHA&s",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 3,
    name: "Sueter en lana de alpaca, tejido a mano",
    description: "Suéter de lana de alpaca, tejido a mano con amor y cuidado.",
    price: 180,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQus9b6DfgQidu6xJzK_6ufpgEzMrX_1O33lrY3iH0sdHgp7N1xStSDzAHkbd9NQJYk3-8&usqp=CAU",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 4,
    name: "Pantalón de algodón",
    description:
      "Pantalón de algodón ligero y cómodo, ideal para el día a día.",
    price: 79.99,
    image:
      "https://imgs.search.brave.com/jeyGtXRGsLngYFWqQ1gZHYdJxG_rjrk75m2ZBBAA9NQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/Xzk3OTQ5Mi1NTEE4/MTkyODEwOTcyNl8w/MjIwMjUtVi53ZWJw",
    sizes: ["28", "30", "32", "34"],
  },
  {
    id: 5,
    name: "Chopa de Alpaca",
    description: "Chopa de alpaca suave y cálida para el invierno.",
    price: 120,
    image:
      "https://d2j6dbq0eux0bg.cloudfront.net/images/32596272/1512282928.jpg",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 1,
    name: "Polera de algodón orgánico",
    description:
      "Polera de algodón orgánico, suave y cómoda, ideal para el uso diario.",
    price: 80,
    image:
      "https://imgs.search.brave.com/so4RPgMjoJUmqJ38xke5kgInH06I3Jq6WHATKnZPsI0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Ym9saXZpYW5pdGEu/ZGUvY2RuL3Nob3Av/ZmlsZXMvZnJvbnQt/bGFkaWVzLW9yZ2Fu/aWMtc2hpcnQtZjhm/OGY4LTExMTZ4Xzc4/NDk5MTZkLTUzM2Et/NGZlMi1iN2UxLWIy/YjI2NDI3NzFhMS5w/bmc_dj0xNzI4MDc0/NzQxJndpZHRoPTE0/NDU",
    sizes: ["S", "M", "L", "XL"],
  },
];

const ProductList = () => (
  <div className="max-w-7xl mx-auto p-4">
    <h2 className="text-3xl font-extrabold mb-8 text-center text-green-800 tracking-tight">
      Productos
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 flex-1 transition-all">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

// eslint-disable-next-line react-refresh/only-export-components
export { ProductList, products };
