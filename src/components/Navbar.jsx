import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState, useEffect } from "react";

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 700);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = () => setOpen((v) => !v);
  const handleClose = () => setOpen(false);

  return (
    <nav
      className="navbar"
      style={{
        background: "#a3c585",
        boxShadow: "0 2px 18px #a3c58522",
        position: "relative",
      }}
    >
      <div
        className="navbar-logo"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.7rem",
          fontWeight: "bold",
          fontSize: "1.9rem",
          letterSpacing: "1px",
          color: "#3b5d3b",
        }}
      >
        <img
          src={logo}
          alt="Logo Ayni Market"
          style={{
            height: "40px",
            width: "40px",
            borderRadius: "50%",
            background: "#fff",
          }}
        />
        Ayni Market
      </div>
      {isMobile && (
        <button
          className="navbar-toggle"
          onClick={handleToggle}
          aria-label="Abrir menú"
          style={{
            background: "none",
            border: "none",
            fontSize: "2rem",
            color: "#3b5d3b",
            cursor: "pointer",
            marginLeft: "auto",
          }}
        >
          ☰
        </button>
      )}
      <ul
        className="navbar-links"
        style={{
          display: isMobile ? (open ? "flex" : "none") : "flex",
          flexDirection: isMobile ? "column" : "row",
          position: isMobile && open ? "absolute" : "",
          top: isMobile && open ? "100%" : "",
          left: isMobile && open ? 0 : "",
          width: isMobile && open ? "100%" : "",
          background: isMobile && open ? "#a3c585" : "",
          boxShadow: isMobile && open ? "0 8px 24px #a3c58533" : "",
          zIndex: isMobile && open ? 10 : "",
          gap: isMobile ? "0.5rem" : "1.5rem",
          margin: 0,
          padding: isMobile && open ? "1rem 0" : 0,
          listStyle: "none",
          transition: "all 0.2s",
        }}
      >
        <li>
          <Link
            to="/"
            className={location.pathname === "/" ? "nav-active" : ""}
            onClick={handleClose}
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            to="/nosotros"
            className={location.pathname === "/nosotros" ? "nav-active" : ""}
            onClick={handleClose}
          >
            Nosotros
          </Link>
        </li>
        <li>
          <Link
            to="/principios"
            className={location.pathname === "/principios" ? "nav-active" : ""}
            onClick={handleClose}
          >
            Principios
          </Link>
        </li>
        <li>
          <Link
            to="/valores"
            className={location.pathname === "/valores" ? "nav-active" : ""}
            onClick={handleClose}
          >
            Valores
          </Link>
        </li>
        <li>
          <Link
            to="/cart"
            className={location.pathname === "/cart" ? "nav-active" : ""}
            onClick={handleClose}
          >
            Carrito
          </Link>
        </li>
      </ul>
    </nav>
  );
}
