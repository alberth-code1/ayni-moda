import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-hero">
      <h1>
        Bienvenidos a <span style={{ color: "#a3c585" }}>Ayni Market</span>
      </h1>
      <p>
        Promovemos la moda cultural y sostenible conectando a artesanos con
        consumidores.
      </p>
      <img
        src={logo}
        alt="Logo Ayni Market"
        style={{
          height: "350px",
          width: "350px",
          borderRadius: "50%",
          objectFit: "cover",
          margin: "1.5rem auto",
          display: "block",
          boxShadow: "0 4px 24px #a3c58544",
        }}
      />
      <Link to="/list-products">
        <button className="home-btn">Explora el marketplace</button>
      </Link>
    </div>
  );
}
