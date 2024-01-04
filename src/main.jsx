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
    path: "/contato",
    element: <Contato />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>

    <Header/>
     <RouterProvider router={router} />
    <Footer/>
  </>
);
