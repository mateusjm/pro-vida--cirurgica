import './App.css'

// assets
import logo from './assets/logo-pro-vida.png'
import telefone from './assets/telefone.png'
import email from './assets/email.png'
import facebook from './assets/facebook.png'
import instagram from './assets/instagram.png'
import whatsapp from './assets/whatsapp.png'

// reaproveitando estrutura
import { Outlet } from 'react-router-dom'

// components
import Header from './components/Header'
import Footer from './components/Footer'

// hooks
import ScrollToTop from './hooks/ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTop/>
      <Header logo={logo}/>
      <Outlet/>
      <Footer 
        logo={logo} 
        telefone={telefone} 
        email={email}
        facebook={facebook}
        instagram={instagram}
        whatsapp={whatsapp}
        />
    </>
  )
}

export default App
