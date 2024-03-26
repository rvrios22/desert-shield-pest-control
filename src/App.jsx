import './App.css'
import { AboutMe, Contact, Footer, Landing, Navbar } from './componentExporter'

function App() {

  return (
    <>
      <Navbar />
      <Landing />
      <AboutMe />
      <Contact />
      <Footer />
    </>
  )
}

export default App
