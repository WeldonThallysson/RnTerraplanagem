import React from "react";
import CarrosselPrincipal from "../../components/carrosselPrincipal/CarrosselPrincipal";
import Cards from "../../components/cards/Cards";
import { Box, Grid } from "@mui/material";
import imagemCard1 from "../../assets/imagensCards/imagemCard3.jpg";
import imagemCard2 from "../../assets/imagensCards/imagemCard2.jpeg";
import imagemCard3 from "../../assets/imagensCards/imagemCard3.jpeg";
//
import alugueldeEquipamentos from '../../assets/imgIconesCardsServicos/alugueldeequipamentos.png'
import demolicao from '../../assets/imgIconesCardsServicos/Demolicao.png'
import drenagem from '../../assets/imgIconesCardsServicos/drenagem.png'
import aterro from '../../assets/imgIconesCardsServicos/aterro.png'
import escavacoes from '../../assets/imgIconesCardsServicos/escavacoes.png'
import loteamento from '../../assets/imgIconesCardsServicos/loteamento.png'
import terraplanagem from '../../assets/imgIconesCardsServicos/terraplanagem.png'
import areia from '../../assets/imgIconesCardsServicos/areia.png'
import "./Home.css";
import ServicosComponent from "../../components/servicos/ServicosComponent";
import TituloSections from "../../components/tituloSections/TituloSections";
import ComponentSobre from "../../components/sobre";

const Home = () => {
  const informacoesCards = [
    {
      id: 1,
      imagem: imagemCard1,
      titulo: "Terraplanagem",
      descricao:
        "Conheça a RN - Transformando Ideias em Realidade! Somos uma empresa comprometida em...",
    },
    {
      id: 2,
      imagem: imagemCard2,
      titulo: "Obras",
      descricao:
        "Explore o mundo da construção e transformação na RN soluções completas para cada projeto...",
    },
    {
      id: 3,
      imagem: imagemCard3,
      titulo: "Drenagem",
      descricao:
        "Descubra a excelência em serviços da RN Terraplanagem! Estamos aqui para melhor atender você...",
    },
    {
      id: 4,
      imagem: imagemCard3,
      titulo: "Fotos",
      descricao:
        "Descubra a excelência em serviços da RN Terraplanagem! Estamos aqui para melhor atender você...",
    },
  ];

  const informacoesCardsServicos = [
    {
      id: 1,
      imagem: alugueldeEquipamentos,
      titulo: "Aluguel de Equipamento",
      descricao:
        "Descubra a excelência em serviços da RN Terraplanagem! Estamos aqui para melhor atender você... ",
    },
    {
      id: 2,
      imagem: terraplanagem,
      titulo: "Terraplanagem em geral",
      descricao:
        "Explore o mundo da construção e transformação na RN soluções completas para cada projeto...",
    },
    {
      id: 3,
      imagem: demolicao,
      titulo: "Demolição",
      descricao:
        "Conheça a RN - Transformando Ideias em Realidade! Somos uma empresa comprometida em..",
    },
    {
      id: 4,
      imagem: drenagem,
      titulo: "Drenagem",
      descricao:
        "Conheça a RN - Transformando Ideias em Realidade! Somos uma empresa comprometida em..",
    },
    {
      id: 5,
      imagem: loteamento,
      titulo: "Loteamento",
      descricao:
        "Conheça a RN - Transformando Ideias em Realidade! Somos uma empresa comprometida em..",
    },
    {
      id: 6,
      imagem: aterro,
      titulo: "Aterro",
      descricao:
        "Conheça a RN - Transformando Ideias em Realidade! Somos uma empresa comprometida em..",
    },
    {
      id: 7,
      imagem: escavacoes,
      titulo: "Escavações",
      descricao:
        "Conheça a RN - Transformando Ideias em Realidade! Somos uma empresa comprometida em..",
    },
    {
      id: 8,
      imagem: areia,
      titulo: "Pedra,Brita,Areia",
      descricao:
        "Conheça a RN - Transformando Ideias em Realidade! Somos uma empresa comprometida em..",
    },
    {
      id: 9,
      imagem: 'areia',
      titulo: "Reparos em ruas",
      descricao:
        "Conheça a RN - Transformando Ideias em Realidade! Somos uma empresa comprometida em..",
    },
    {
      id: 10,
      imagem: 'areia',
      titulo: "Calçamento de ruas",
      descricao:
        "Conheça a RN - Transformando Ideias em Realidade! Somos uma empresa comprometida em..",
    },
  ];

  return (
    <>
    
      <CarrosselPrincipal />
      {/*<TituloSections titulos={"Clique e Saiba Mais"} />*/}   

      
      
      <Grid display={"flex"} justifyContent={"center"} container spacing={2}>
        {informacoesCards.map((item) => (
          <Grid
            display={"flex"}
            justifyContent={"center"}
            item
            xs={12}
            sm={3.5}
            md={3.5}
            lg={1.3}
            
            margin={"50px 80px 100px 80px"}
          >
            <Cards
              titulo={item.titulo}
              descricao={item.descricao}
              imagem={item.imagem}
            />
          </Grid>
        ))}
      </Grid>
      <Box sx={{display: "flex",height: "420px", background: "#252525"}}>
          <ComponentSobre/>
      </Box>

      <TituloSections titulos={"Principais Serviços"} />

      <Grid display={"flex"} justifyContent={"center"} container spacing={2}>
        {informacoesCardsServicos.map((item) => (
          <Grid
            display={"block"}
            justifyContent={"center"}
            item
            xs={12}
            sm={3.5}
            md={3.5}
            lg={2.3}
            margin={"50px 0 0 0"}
          >
            <ServicosComponent
              titulo={item.titulo}
              descricao={item.descricao}
              imagem={item.imagem}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default Home;
