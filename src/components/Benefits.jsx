const benefits = [
  'Atención personalizada y cercana.',
  'Comunicación clara y constante.',
  'Acompañamiento durante todo el proceso.',
  'Transparencia en cada etapa.',
  'Compromiso profesional y responsable.',
  'Respuestas ágiles y estratégicas.',
]

function Benefits() {
  return (
    <section className="section section-alt">
      <div className="container">
        <p className="eyebrow">¿Por qué elegirnos?</p>
        <h2>Una propuesta de ayuda jurídica sólida, ordenada y comprensible.</h2>
        <div className="benefits-list">
          {benefits.map((benefit) => (
            <div key={benefit} className="benefit-item">
              <span className="benefit-dot" />
              <p>{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
