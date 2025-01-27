import { HelmetProvider } from "react-helmet-async";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
// importando o Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// assets
import banner1 from "./assets/Pro-vida-banner1.png";
import banner2 from "./assets/Pro-vida-banner2.png";
import banner3 from "./assets/Pro-vida-banner3.png";
import banner4 from "./assets/Pro-vida-banner4.png";
import people from "./assets/people.png";
import car from "./assets/car.png";
import medalha from "./assets/medalha.png";
import dinheiro from "./assets/dinheiro.png";
import concorrencia from "./assets/concorrencia.png";
import medico from "./assets/medico.jpg";
import maps from "./assets/maps.png";
import favicon from "./assets/logo-pro-vida.ico";

// configurando o router
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

//components
import SearchResults from './components/SearchResults.jsx'

// routes
import Home from "./routes/Home/Home.jsx";
import Products from "./routes/Products/Products.jsx";
import Locations from "./routes/Locations/Locations.jsx";
import Services from "./routes/Services/Services.jsx";
import ErrorPage from "./routes/ErrorPage/ErrorPage.jsx";
import LocationsDetails from "./routes/LocationsDetails/LocationsDetails.jsx";
import ServicesDetails from "./routes/ServicesDetails/ServicesDetails.jsx";
import MeiasdeCompressao from "./routes/MeiasDeCompressao/MeiasDeCompressao.jsx";
import MeiasDeCompressaoDetails from "./routes/MeiasDeCompressaoDetails/MeiasDeCompressaoDetails.jsx";
import SapatosSoftWorks from "./routes/SapatosSoftworks/SapatosSoftworks.jsx";
import SapatosSoftWorksDetails from "./routes/SapatosSoftWorksDetails/SapatosSoftWorksDetails.jsx";
import DietasEnterais from "./routes/DietasEnterais/DietasEnterais.jsx";
import DietasEnteraisDetails from "./routes/DietasEnteraisDetails/DietasEnteraisDetails.jsx";
import Curativos from "./routes/Curativos/Curativos.jsx";
import CurativosDetails from "./routes/CurativosDetails/CurativosDetails.jsx";
import MateriaisOrtopedicos from "./routes/MateriaisOrtopedicos/MateriaisOrtopedicos.jsx";
import MateriaisOrtopedicosDetails from "./routes/MateriaisOrtopedicosDetails/MateriaisOrtopedicosDetails.jsx";
import ColchoesTravesseiros from "./routes/ColchoesTravesseiros/ColchoesTravesseiros.jsx";
import ColchoesTravesseirosDetails from "./routes/ColchoesTravesseirosDetails/ColchoesTravesseirosDetails.jsx";
import MateriaisDescartaveis from "./routes/MateriaisDescartaveis/MateriaisDescartaveis.jsx";
import MateriaisDescartaveisDetails from "./routes/MateriaisDescartaveisDetails/MateriaisDescartaveisDetails.jsx";
import Avaliacoes from "./routes/Avaliacoes/Avaliacoes.jsx";
import AparelhosMonitoramento from "./routes/AparelhosMonitoramento/AparelhosMonitoramento.jsx";
import AparelhosMonitoramentoDetails from "./routes/AparelhosMonitoramentoDetails/AparelhosMonitoramentoDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Home
            banner1={banner1}
            banner2={banner2}
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
        ),
      },
      { path: "*", element: <ErrorPage /> },
      {
        path: "/produtos",
        element: <Products banner2={banner2} />,
      },
      {
        path: "/busca",
        element: <SearchResults />,
      },
      {
        path: "/locacoes",
        element: <Locations banner3={banner3} />,
      },
      {
        path: "/servicos",
        element: <Services banner4={banner4} />,
      },
      {
        path: "/avaliacoes",
        element: <Avaliacoes favicon={favicon} />,
      },
      {
        path: "/produtos/meias",
        element: <MeiasdeCompressao banner2={banner2} />,
      },
      {
        path: "/produtos/sapatos",
        element: <SapatosSoftWorks banner2={banner2} />,
      },
      {
        path: "/produtos/dietas",
        element: <DietasEnterais banner2={banner2} />,
      },
      {
        path: "/produtos/curativos",
        element: <Curativos banner2={banner2} />,
      },
      {
        path: "/produtos/ortopedicos",
        element: <MateriaisOrtopedicos banner2={banner2} />,
      },
      {
        path: "/produtos/colchoes",
        element: <ColchoesTravesseiros banner2={banner2} />,
      },
      {
        path: "/produtos/descartaveis",
        element: <MateriaisDescartaveis banner2={banner2} />,
      },
      {
        path: "/produtos/aparelhos",
        element: <AparelhosMonitoramento banner2={banner2} />,
      },
      {
        path: "/locacoes/:id",
        element: <LocationsDetails />,
      },
      {
        path: "/servicos/:id",
        element: <ServicesDetails />,
      },
      {
        path: "/produtos/meias/:id",
        element: <MeiasDeCompressaoDetails />,
      },
      {
        path: "/produtos/sapatos/:id",
        element: <SapatosSoftWorksDetails />,
      },
      {
        path: "/produtos/dietas/:id",
        element: <DietasEnteraisDetails />,
      },
      {
        path: "/produtos/curativos/:id",
        element: <CurativosDetails />,
      },
      {
        path: "/produtos/ortopedicos/:id",
        element: <MateriaisOrtopedicosDetails />,
      },
      {
        path: "/produtos/colchoes/:id",
        element: <ColchoesTravesseirosDetails />,
      },
      {
        path: "/produtos/descartaveis/:id",
        element: <MateriaisDescartaveisDetails />,
      },
      {
        path: "/produtos/aparelhos/:id",
        element: <AparelhosMonitoramentoDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
