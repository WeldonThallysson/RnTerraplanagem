import React from "react";
import Cards from "../../components/cards/Cards";
import { Box, Grid } from "@mui/material";
import imagemCard1 from "../../assets/imagensCards/imagemCard1.jpg";
import imagemCard2 from "../../assets/imagensCards/imagemCard2.jpg";
import imagemCard3 from "../../assets/imagensCards/imagemCard3.jpg";
import "./Home.css";

const Home = () => {
  const informacoesCards = [
    {
      id: 1,
      imagem: imagemCard1,
      titulo: "Serviços",
      descricao:
        "Descubra a excelência em serviços da RN Terraplanagem! Estamos aqui para melhor atender você... ",
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
      titulo: "Empresa",
      descricao:
        "Conheça a RN - Transformando Ideias em Realidade! Somos uma empresa comprometida em..",
    },
  ];
  return (

    <Grid display={'flex'} justifyContent={"center"}  container spacing={2}>

      {informacoesCards.map((item) => (
        <Grid display={'flex'} justifyContent={"center"} item xs={12} sm={3} md={3} lg={3} margin={'50px 0 0 0'}>
          <Cards
            titulo={item.titulo}
            descricao={item.descricao}
            imagem={item.imagem}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Home;
