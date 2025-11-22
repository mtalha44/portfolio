import About from './section/About'
import Clients from './section/Clients'
import Contact from './section/Contact'
import Hero from './section/Hero'
import Navbar from './section/Navbar'
import Projects from './section/Projects'
import Skills from './section/Skills'

function App() {
  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar />
      <Hero/> 
      <About/>
      <Projects/>
      <Clients />
      <Skills />
      <Contact />
    </main>
  )
}

export default App