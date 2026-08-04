import { FaBalanceScale, FaFileContract, FaGavel, FaLandmark, FaHandshake, FaShieldAlt } from 'react-icons/fa'

const areas = [
  { title: 'Derecho civil', icon: FaBalanceScale, description: 'Asesoramiento integral en conflictos y derechos de las personas.' },
  { title: 'Contratos', icon: FaFileContract, description: 'Revisión y redacción de contratos con enfoque preventivo.' },
  { title: 'Daños y perjuicios', icon: FaGavel, description: 'Análisis y defensa de reclamos patrimoniales.' },
  { title: 'Sucesiones', icon: FaLandmark, description: 'Acompañamiento en procesos sucesorios y trámites vinculados.' },
  { title: 'Reclamos patrimoniales', icon: FaHandshake, description: 'Estrategia para proteger intereses económicos y derechos.' },
  { title: 'Asesoramiento legal', icon: FaShieldAlt, description: 'Orientación clara para decisiones y procedimientos.' },
]

function PracticeAreas() {
  return (
    <section id="servicios" className="section">
      <div className="container">
        <p className="eyebrow">Áreas de práctica</p>
        <h2>Soluciones jurídicas en materias civiles con enfoque práctico.</h2>
        <div className="card-grid">
          {areas.map((area) => {
            const Icon = area.icon
            return (
              <article key={area.title} className="info-card">
                <div className="card-icon">
                  <Icon />
                </div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PracticeAreas
