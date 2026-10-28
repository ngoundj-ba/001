function InfoPerso() {
  const nom = 'Ngoundj Fall Ba'
  const titre = 'Étudiante en génie logiciel'
  const email = 'ngoundjfr@gmail.com'
  const ville = 'Dakar, Sénégal'

  return (
    <section className="bloc">
      <h1>{nom}</h1>
      <h2>{}</h2>
      <p>Email : {email}</p>
      <p>Ville : {ville}</p>
    </section>
  )
}

export default InfoPerso