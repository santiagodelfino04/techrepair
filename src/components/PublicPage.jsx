import { useState } from 'react'

const SERVICIOS = [
  {
    icon: '📱',
    titulo: 'Cambio de pantallas',
    desc: 'Módulos originales y compatibles para todas las marcas',
    detalle: [
      { cal: 'Original (OEM)', desc: 'Idéntica a la de fábrica. Colores reales, táctil perfecto y garantía extendida.' },
      { cal: 'Hard OLED', desc: 'Para iPhones. Pantalla rígida con excelente color, intermedia entre original y económica.' },
      { cal: 'Compatible', desc: 'Repuesto de terceros con buena calidad. Ideal para quienes buscan precio accesible.' },
    ],
  },
  {
    icon: '🔋',
    titulo: 'Cambio de batería',
    desc: 'Batería nueva con garantía incluida',
    detalle: [
      { cal: 'Alta capacidad', desc: 'Igual o superior a la original, mayor duración por carga.' },
      { cal: 'Compatible', desc: 'Batería genérica funcional a precio accesible.' },
    ],
  },
  {
    icon: '🔌',
    titulo: 'Pines de carga',
    desc: 'Conectores USB-C, Lightning y Micro USB',
    detalle: [
      { cal: 'USB-C', desc: 'Android modernos e iPhone 15 en adelante.' },
      { cal: 'Lightning', desc: 'iPhone 14 y anteriores.' },
      { cal: 'Micro USB', desc: 'Equipos más antiguos.' },
    ],
  },
  {
    icon: '💧',
    titulo: 'Equipos mojados',
    desc: 'Diagnóstico y recuperación por daño de agua',
    detalle: [
      { cal: 'Diagnóstico sin cargo', desc: 'Evaluamos el nivel de daño antes de presupuestar.' },
      { cal: 'Limpieza ultrasónica', desc: 'Proceso profesional para eliminar corrosión en placa.' },
    ],
  },
  {
    icon: '⚙️',
    titulo: 'Software',
    desc: 'Actualizaciones, reseteos y fallas de sistema',
    detalle: [
      { cal: 'Reseteo de fábrica', desc: 'Restauramos el equipo a su estado original.' },
      { cal: 'Actualización de sistema', desc: 'Mejora el rendimiento y la seguridad del dispositivo.' },
      { cal: 'Eliminación de virus', desc: 'Limpieza de malware y apps maliciosas.' },
    ],
  },
  {
    icon: '🛡️',
    titulo: 'Vidrios y accesorios',
    desc: 'Templados, fundas y más para tu equipo',
    detalle: [
      { cal: 'Vidrios templados', desc: 'Protección de pantalla con colocación incluida.' },
      { cal: 'Fundas', desc: 'Variedad de modelos y colores para tu modelo.' },
      { cal: 'Accesorios varios', desc: 'Cables, cargadores, auriculares y más.' },
    ],
  },
]

export default function PublicPage({ onLoginClick }) {
  const [abierto, setAbierto] = useState(null)

  return (
    <div className="public-page">

      {/* Nav */}
      <nav className="public-nav">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="/logo.png" alt="Tech Repair" style={{ width: 40, height: 40, objectFit: 'contain', borderRadius: 10 }} />
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

        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 20 }}>
          <span className="location-badge">📍 Río Cuarto, Córdoba</span>
          <span className="location-badge">📍 Alejandro Roca, Córdoba</span>
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
      <section id="servicios" style={{ maxWidth: 780, margin: '0 auto', padding: '0 24px 80px' }}>
        <h2 className="section-title">¿Qué hacemos?</h2>
        <div className="accordion">
          {SERVICIOS.map((s, i) => (
            <div key={i} className={`acord-item${abierto === i ? ' open' : ''}`}>
              <button
                className="acord-header"
                onClick={() => setAbierto(abierto === i ? null : i)}
              >
                <span className="acord-icon">{s.icon}</span>
                <span className="acord-titulo">{s.titulo}</span>
                <span className="acord-desc-inline">{s.desc}</span>
                <span className="acord-chevron">{abierto === i ? '▲' : '▼'}</span>
              </button>
              {abierto === i && (
                <div className="acord-body">
                  {s.detalle.map((d, j) => (
                    <div key={j} className="acord-row">
                      <div className="acord-cal">{d.cal}</div>
                      <div className="acord-caldesc">{d.desc}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section className="contact-section" id="contacto">
        <h2 className="section-title">Contacto</h2>
        <p style={{ color: 'rgba(255,255,255,.5)', fontSize: 14, marginBottom: 28 }}>
          Tecnología en buenas manos
        </p>
        <div className="contact-pills">
          <a href="https://wa.me/54TUNUMERO" className="contact-pill" target="_blank" rel="noopener">
            💬 WhatsApp
          </a>
          <span className="contact-pill" style={{ cursor: 'default' }}>📍 Río Cuarto, Córdoba</span>
          <span className="contact-pill" style={{ cursor: 'default' }}>📍 Alejandro Roca, Córdoba</span>
        </div>
      </section>

      {/* Mapa */}
      <section style={{ maxWidth: 780, margin: '0 auto', padding: '0 24px 60px' }}>
        <h2 className="section-title">¿Dónde estamos?</h2>
        <div className="map-wrap">
          <iframe
            title="Ubicación Río Cuarto"
            src="https://maps.google.com/maps?q=Rio+Cuarto,+Cordoba,+Argentina&output=embed&z=13"
            width="100%"
            height="280"
            style={{ border: 0, borderRadius: 16 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-badges">
        {['Experiencia y confianza', 'Garantía en reparaciones', 'Todas las marcas', 'Tu equipo en buenas manos'].map((v, i) => (
          <div key={i} className="footer-badge">
            <span>✓</span> {v}
          </div>
        ))}
      </footer>

    </div>
  )
}
