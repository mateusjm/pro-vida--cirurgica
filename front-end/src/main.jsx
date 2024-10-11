import { HelmetProvider } from 'react-helmet-async';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
// importando o Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

// assets
import banner1 from './assets/Pro-vida-banner1.png'
import banner2 from './assets/Pro-vida-banner2.png'
import banner3 from './assets/Pro-vida-banner3.png'
import banner4 from './assets/Pro-vida-banner4.png'
import people from './assets/people.png'
import car from './assets/car.png'
import medalha from './assets/medalha.png'
import dinheiro from './assets/dinheiro.png'
import concorrencia from './assets/concorrencia.png'
import medico from './assets/medico.jpg'
import maps from './assets/maps.png'
import favicon from './assets/logo-pro-vida.ico'

// configurando o router
import {createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom'

// routes 
import Home from './routes/Home/Home.jsx'
import Locations from './routes/Locations/Locations.jsx';
import Services from './routes/Services/Services.jsx'
import ErrorPage from './routes/ErrorPage/ErrorPage.jsx'
import LocationsDetails from './routes/LocationsDetails/LocationsDetails.jsx'
import ServicesDetails from './routes/ServicesDetails/ServicesDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home 
          banner1={banner1} 
          banner3={banner3} 
          banner4={banner4} 
          people={people} 
          car={car}
          medalha={medalha}
          dinheiro={dinheiro}
          concorrencia={concorrencia}
          medico={medico}
          maps={maps}
          favicon={favicon}
        />
      },
      {
        path: '/locacoes',
        element: <Locations 
          banner3={banner3}
        />
      },
      {
        path: '/servicos',
        element: <Services
          banner4={banner4}
        />
      },
      {
        path: '/locacoes/:id',
        element: <LocationsDetails/>
      },
      {
        path: '/servicos/:id',
        element: <ServicesDetails/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>,
)
