const testimonios = [
  {
    quote: 'Recibí una atención clara, seria y muy humana. Me ayudó a entender cada etapa del proceso.',
    name: 'María P.',
  },
  {
    quote: 'La orientación fue precisa y profesional desde el primer contacto. Me sentí acompañada.',
    name: 'Sergio R.',
  },
  {
    quote: 'Una propuesta muy seria y cercana. Me permitió tomar decisiones con mayor tranquilidad.',
    name: 'Lucía M.',
  },
]

function Testimonials() {
  return (
    <section className="section section-alt">
      <div className="container">
        <p className="eyebrow">Testimonios</p>
        <h2>Lo que destacan quienes han confiado en el acompañamiento profesional.</h2>
        <div className="card-grid">
          {testimonios.map((item) => (
            <article key={item.name} className="info-card">
              <p className="testimonial-quote">“{item.quote}”</p>
              <strong>{item.name}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
