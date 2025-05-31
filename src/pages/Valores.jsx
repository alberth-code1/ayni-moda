const valores = [
  "Respeto",
  "Honestidad",
  "Equidad",
  "Solidaridad",
  "Compromiso social y ambiental"
];

export default function Valores() {
  return (
    <section className="section container">
      <h2>Nuestros Valores</h2>
      <div style={{display:'flex', flexWrap:'wrap', gap:'2rem', alignItems:'flex-start', justifyContent:'center'}}>
        <div style={{minWidth:'220px', flex:'1'}}>
          <ul style={{fontSize:'1.1rem', lineHeight:'2'}}>
            <li><strong>Identidad:</strong> Celebramos la herencia Aymara y la creatividad local.</li>
            <li><strong>Equidad:</strong> Garantizamos oportunidades y condiciones justas para todos.</li>
            <li><strong>Innovación:</strong> Combinamos tradición y modernidad en cada diseño.</li>
            <li><strong>Compromiso:</strong> Trabajamos por un impacto social y ambiental positivo.</li>
          </ul>
        </div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBcafFWu9ckC4FdyVo59IWVJLSZqgnnRZaEg&s" alt="Valores Ayni Moda" style={{borderRadius:'12px', width:'240px', boxShadow:'0 2px 12px #eaf6f0'}} />
      </div>
    </section>
  );
}
