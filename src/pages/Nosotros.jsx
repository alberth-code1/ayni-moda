export default function Nosotros() {
  return (
    <section className="section container">
      <h2>¿Quiénes somos?</h2>
      <p style={{ fontSize: '1.15rem', marginBottom: '1.5rem' }}>
        Ayni Moda es una comunidad digital que une a artesanos y diseñadores Aymaras
        con personas que valoran la moda sostenible, la identidad cultural y el
        comercio justo.
      </p>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src="https://www.shutterstock.com/image-vector/handknit-hat-rgb-color-icon-600nw-1673552794.jpg"
          alt="Artesana Aymara"
          style={{
            borderRadius: '12px',
            width: '260px',
            boxShadow: '0 2px 12px #eaf6f0',
          }}
        />
        <div style={{ maxWidth: '400px' }}>
          <h3 style={{ color: '#5e7c5b' }}>Nuestra misión</h3>
          <p>
            Promover la moda ética, inclusiva y respetuosa con el medio ambiente,
            visibilizando el talento y la herencia cultural de los pueblos
            originarios.
          </p>
        </div>
      </div>
    </section>
  );
}
