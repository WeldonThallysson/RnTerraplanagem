import React from "react";
import "./Home.css";
import ComponenteInicio from "./componente.inicio";
import ComponentSobre from "./componente.sobre";
import CarrosselPrincipal from "../../components/carrosselPrincipal/CarrosselPrincipal";
import ComponentContato from "./component.contato";
import ComponenteNossosServicos from "./componente.nossos.servicos";

const Home = () => {
  return (
    <>
       <CarrosselPrincipal />
       <ComponenteInicio/>
       <ComponentSobre />
       <ComponenteNossosServicos/>
       <ComponentContato/>
    </>
  );
};
export default Home;
