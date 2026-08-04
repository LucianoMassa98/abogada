import { Link } from 'react-router-dom'
import heroImage from '../assets/hero-legal.svg'

function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Abogada civil en San Juan</p>
          <h1>Defensa jurídica seria, clara y cercana para cada etapa.</h1>
          <p className="lead">
            Acompaño a personas y empresas en asuntos civiles con una mirada estratégica, profesional y cercana.
          </p>
          <div className="button-group">
            <a className="button button-primary" href="https://wa.me/542644826664?text=Hola%20Juana%2C%20encontr%C3%A9%20tu%20p%C3%A1gina%20web%20y%20quisiera%20realizar%20una%20consulta." target="_blank" rel="noreferrer">
              Solicitar consulta
            </a>
            <a className="button button-secondary" href="#servicios">
              Conocer servicios
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <img src={heroImage} alt="Representación visual del trabajo jurídico de Juana Matuz" />
        </div>
      </div>
    </section>
  )
}

export default Hero
