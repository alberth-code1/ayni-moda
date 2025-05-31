const principios = [
  "Reciprocidad (Ayni)",
  "Sostenibilidad",
  "Inclusión",
  "Innovación",
  "Transparencia"
];

export default function Principios() {
  return (
    <section className="section container">
      <h2>Nuestros Principios</h2>
      <ul style={{fontSize:'1.1rem', lineHeight:'2', margin:'1.5rem 0'}}>
        <li><strong>Respeto:</strong> Valoramos la diversidad y la dignidad de cada persona y cultura.</li>
        <li><strong>Colaboración:</strong> Fomentamos el trabajo conjunto entre artesanos, diseñadores y consumidores.</li>
        <li><strong>Transparencia:</strong> Promovemos procesos claros y justos en toda la cadena de valor.</li>
        <li><strong>Sostenibilidad:</strong> Impulsamos prácticas responsables con el entorno y los recursos.</li>
      </ul>
      <img src="https://www.noticiasfides.com/images/news/2015/05/moda-boliviana-que-inspira-al-mundo_33980.jpg" alt="Tejido sostenible" style={{width:'100%', maxWidth:'420px', borderRadius:'12px', margin:'0 auto', display:'block', boxShadow:'0 2px 12px #eaf6f0'}} />
    </section>
  );
}
