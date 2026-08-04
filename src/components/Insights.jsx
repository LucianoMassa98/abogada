const insights = [
  {
    title: 'Consejos legales para actuar con seguridad',
    description: 'Recomendaciones útiles para tomar decisiones informadas antes de iniciar un procedimiento o firmar un documento.',
  },
  {
    title: 'Preguntas frecuentes sobre derechos civiles',
    description: 'Una guía breve para entender mejor los pasos, los plazos y las obligaciones que suelen generar dudas.',
  },
  {
    title: 'Aspectos clave antes de firmar contratos',
    description: 'Información práctica para revisar cláusulas, riesgos y condiciones con mayor claridad.',
  },
]

function Insights() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Aportes de valor</p>
        <h2>Contenido pensado para generar confianza y orientar mejor a quienes necesitan asesoramiento.</h2>
        <div className="card-grid insights-grid">
          {insights.map((item) => (
            <article key={item.title} className="info-card insight-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Insights
