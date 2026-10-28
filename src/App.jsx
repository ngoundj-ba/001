import './App.css'
import InfoPerso from './composents/infoperso'
import Experience from './composents/Experience'
import Competences from './composents/Competences'

function App() {
  return (
    <main className="cv">
      <InfoPerso />
      <Experience />
      <Competences />
    </main>
  )
}

export default App