
import './App.css'
import Button from './components/Button'
import Footer from './components/footer'
import Header from './components/Header'
import Hero from './components/hero'
import ModeSwitch from './components/ModeSwitch'
import Profil from './components/Profile'
import Projects from './components/Projects'
import Skills from './components/Skills'


function App() {
 

  return (
    <>
    <ModeSwitch></ModeSwitch>

    <Header></Header>
    <Hero></Hero>
    <Button></Button>
    <Skills></Skills>
      <div className="profile">
      <Profil
        name="Busenur Kutluca Yılmaz"
        birthDate="15 Ekim 1996"
        city="İstanbul"
        education="Marmara Üni. / TDE"
        role="Frontend, UI"
      />
      </div>
    <Projects></Projects>
    <Footer></Footer>

    </>
  )
}

export default App
