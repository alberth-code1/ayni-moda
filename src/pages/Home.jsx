import logo from '../assets/logo.png';

export default function Home() {
  return (
    <div className="home-hero">
      <h1>
        Bienvenidos a{" "}
        <span style={{ color: "#a3c585" }}>Ayni Market</span>
      </h1>
      <p>
        Promovemos la moda cultural y sostenible conectando a artesanos con consumidores.
      </p>
      <img src={logo} alt="Logo Ayni Market" style={{height:'350px',width:'350px',borderRadius:'50%',objectFit:'cover',margin:'1.5rem auto',display:'block',boxShadow:'0 4px 24px #a3c58544'}} />
      <a href="#" className="home-btn">
        Explora el marketplace
      </a>
    </div>
  );
}
