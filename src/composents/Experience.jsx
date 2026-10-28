function Experience() {
  const experiences = [
    { poste: 'Stagiaire développeur', lieu: 'sonatel', periode: '2025', description: 'creer de mini site pour les info' },
    { poste: 'Projet scolaire', lieu: 'ISI DAKAR', periode: '2026', description: 'Site avec React et Vite.' },
  ]

  return (
    <section className="bloc">
      <h2>Expérience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="item">
          <h3>{exp.poste}</h3>
          <p>{exp.lieu} — {exp.periode}</p>
          <p>{exp.description}</p>
        </div>
      ))}
    </section>
  )
}

export default Experience