import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import { Portfolio } from './components/Portfolio/Portfolio'
import { Skills } from './components/Skills/Skills'

function App() {
  return (
    <>
      {/* https://codesandbox.io/s/throbbing-architecture-4mg0cp?file=/src/Temp.js */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="skills" element={<Skills />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
