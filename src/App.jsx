import About from './section/About'
import Hero from './section/Hero'
import Navbar from './section/Navbar'
import Projects from './section/Projects'

function App() {
  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar />
      <Hero/> 
      <About/>
      <Projects/>
    </main>
  )
}

export default App