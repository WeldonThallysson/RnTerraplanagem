import React from "react";
import Cards from "../../components/cards/Cards";
import { Box } from "@mui/material";
import imagemCard1 from '../../assets/imagensCards/imagemCard1.jpg'
import imagemCard2 from '../../assets/imagensCards/imagemCard2.jpg'
import imagemCard3 from '../../assets/imagensCards/imagemCard3.jpg'
const Home = () => {
  const informacoesCards = [
    {
      id: 1,
      imagem: imagemCard1,
      titulo: "Serviços",
      descricao:
        "Todos os nossos serviços estão disponives para melhor lhe atender, clique em saiba mais e contrate um de nossos serviços",
    },
    {
      id: 2,
      imagem: imagemCard2,
      titulo: "Obras",
      descricao:
        "Confira todas as nossas obras com apenas alguns cliques,bbsbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    },
    {
      id: 3,
      imagem: imagemCard3,
      titulo: "Empresa",
      descricao:
        "Conheça a nossa historia toda a nossa trajetoria até chegar aqui, e também um pouco das nossas politicas de preservação ",
    },
  ];
  return (
    <Box display={'flex'} gap={'25px'} justifyContent={'center'} >
      {informacoesCards.map((item) => (
        <Box key={item.id}  >
          <Cards titulo={item.titulo} descricao={item.descricao} imagem={item.imagem} />
        </Box>
      ))}
    </Box>
  );
};

export default Home;
