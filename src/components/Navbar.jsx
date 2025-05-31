import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="navbar" style={{background:'linear-gradient(90deg,#eaf6f0 0%,#a3c585 100%)',boxShadow:'0 2px 12px #a3c58522'}}>
      <div className="navbar-logo" style={{fontWeight:'bold',fontSize:'1.5rem',letterSpacing:'1px',color:'#3b5d3b'}}>Ayni Moda</div>
      <ul className="navbar-links" style={{display:'flex',gap:'1.5rem',margin:0,padding:0,listStyle:'none'}}>
        <li><Link to="/" className={location.pathname==='/' ? 'nav-active' : ''}>Inicio</Link></li>
        <li><Link to="/nosotros" className={location.pathname==='/nosotros' ? 'nav-active' : ''}>Nosotros</Link></li>
        <li><Link to="/principios" className={location.pathname==='/principios' ? 'nav-active' : ''}>Principios</Link></li>
        <li><Link to="/valores" className={location.pathname==='/valores' ? 'nav-active' : ''}>Valores</Link></li>
      </ul>
    </nav>
  );
}
