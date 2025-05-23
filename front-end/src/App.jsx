import "./App.css";

// assets
import logo from "./assets/logo-pro-vida.png";
import telefone from "./assets/telefone.png";
import email from "./assets/email.png";
import facebook from "./assets/facebook.png";
import instagram from "./assets/instagram.png";
import whatsapp from "./assets/whatsapp.png";
import maps from "./assets/maps.png";
import home from "./assets/home.png";

// reaproveitando estrutura
import { Outlet } from "react-router-dom";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

// hooks
import ScrollToTop from "./hooks/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <WhatsAppButton />
      <header>
        <Header logo={logo} />
      </header>
      <main role="main">
        <Outlet />
      </main>
      <footer>
        <section>
          <Footer
            logo={logo}
            home={home}
            maps={maps}
            telefone={telefone}
            email={email}
            facebook={facebook}
            instagram={instagram}
            whatsapp={whatsapp}
          />
        </section>
      </footer>
    </>
  );
}

export default App;
