import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Empresa from "./pages/empresa/Empresa.jsx";
import Obras from "./pages/obras/Obras.jsx";
import Contato from "./pages/contato/Contato.jsx";
import Servicos from "./pages/servicos/Servicos.jsx";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import App from "./App.jsx";

import ProviderContext from "./contexts/ContextGeral/index.jsx";
import TrabalheConosco from "./pages/trabalheconosco/index.jsx";
import WhatsappButtonComponent from "./components/whatsappButton/index.jsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

  

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/empresa",
    element: <Empresa />,
  },
  {
    path: "/obras",
    element: <Obras />,
  },
  {
    path: "/servicos",
    element: <Servicos />,
  },
  {
    path: "/trabalheconosco",
    element: <TrabalheConosco />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
  <ProviderContext>
     <Header/>
      <ToastContainer />
      <RouterProvider router={router} >
        <App/>
      </RouterProvider>
      
      <WhatsappButtonComponent/>
     <Footer/>
  </ProviderContext>
  </>
);
