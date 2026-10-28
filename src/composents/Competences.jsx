function Competences() {
  const competences = ['HTML', 'CSS', 'JavaScript', 'React', 'Git et GitHub']

  return (
    <section className="bloc">
      <h2>Compétences</h2>
      <ul>
        {competences.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </section>
  )
}

export default Competences 