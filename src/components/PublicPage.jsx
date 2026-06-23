const SERVICIOS = [
  { icon: '📱', titulo: 'Cambio de pantallas',      desc: 'Módulos originales y compatibles para todas las marcas' },
  { icon: '🔋', titulo: 'Cambio de batería',        desc: 'Batería nueva con garantía incluida' },
  { icon: '🔌', titulo: 'Pines de carga',           desc: 'Conectores USB-C, Lightning y Micro USB' },
  { icon: '💧', titulo: 'Equipos mojados',          desc: 'Diagnóstico y recuperación por daño de agua' },
  { icon: '⚙️', titulo: 'Software',                 desc: 'Actualizaciones, reseteos y fallas de sistema' },
  { icon: '🛡️', titulo: 'Vidrios y accesorios',    desc: 'Templados, fundas y más para tu equipo' },
]

export default function PublicPage({ onLoginClick }) {
  return (
    <div className="public-page">
      {/* Nav */}
      <nav className="public-nav">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: 'linear-gradient(135deg,#c44dff,#4A90E2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18
          }}><img src="/logo.png" alt="Tech Repair" style={{ width: 40, height: 40, objectFit: 'contain' }} /></div>
          <span style={{ color: '#fff', fontWeight: 900, fontSize: 18 }}>
            Tech <span className="grad-text">Repair</span>
          </span>
        </div>
        <div className="nav-links">
          <a href="#servicios">Servicios</a>
          <a href="#contacto">Contacto</a>
          <button className="btn btn-ghost btn-sm" onClick={onLoginClick}>Admin</button>
        </div>
      </nav>

      {/* Hero */}
      <div className="hero">
        <img src="/logo.png" alt="Tech Repair" style={{ width: 100, height: 100, objectFit: 'contain', marginBottom: 24 }} />
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          padding: '5px 14px', borderRadius: 50,
          background: 'rgba(196,77,255,.15)', border: '1px solid rgba(196,77,255,.3)',
          color: '#c44dff', fontSize: 12, fontWeight: 700,
          textTransform: 'uppercase', letterSpacing: '.6px',
          marginBottom: 20
        }}>
          📍 Río Cuarto, Córdoba
        </div>

        <h1>
          Servicio Técnico<br />
          <span className="grad-text">Especializado</span>
        </h1>
        <p>
          Reparación profesional de celulares, venta de accesorios y equipos.
          Diagnóstico sin cargo y garantía en todos los trabajos.
        </p>

        <div className="pills">
          <div className="pill">✅ Presupuesto sin cargo</div>
          <div className="pill">⚡ Atención rápida</div>
          <div className="pill">🏆 Repuestos de calidad</div>
          <div className="pill">🔒 Seguridad de tu equipo</div>
        </div>
      </div>

      {/* Servicios */}
      <h2 className="section-title" id="servicios">¿Qué hacemos?</h2>
      <div className="services-grid">
        {SERVICIOS.map((s, i) => (
          <div key={i} className="svc-card">
            <div className="svc-icon">{s.icon}</div>
            <div className="svc-name">{s.titulo}</div>
            <div className="svc-desc">{s.desc}</div>
          </div>
        ))}
      </div>

      {/* Contacto */}
      <div className="contact-section" id="contacto">
        <h2 className="section-title">Contacto</h2>
        <p style={{ color: 'rgba(255,255,255,.5)', fontSize: 14, marginBottom: 28 }}>
          Tecnología en buenas manos
        </p>
        <div className="contact-pills">
          <a
            href="https://wa.me/54TUNUMERO"
            className="contact-pill"
            target="_blank"
            rel="noopener"
          >
            💬 WhatsApp
          </a>
          <span className="contact-pill" style={{ cursor: 'default' }}>
            📍 Río Cuarto, Córdoba
          </span>
        </div>
      </div>

      {/* Footer badges */}
      <div className="footer-badges">
        {['Experiencia y confianza', 'Garantía en reparaciones', 'Todas las marcas', 'Tu equipo en buenas manos'].map((v, i) => (
          <div key={i} className="footer-badge">
            <span>✓</span> {v}
          </div>
        ))}
      </div>
    </div>
  )
}
