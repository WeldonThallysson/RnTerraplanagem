import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { informacoesCardsServicos } from "../../Mocks/DataInformacoesServico";
import LineHorizontalComponent from "../../components/LineHorizontal";
import CardsServicosComponent from "../../components/servicos/cardsServicosComponent";
import { 
  ContainerPrincipalNossosServicos, 
  ContainerLineNossosServicos,
  ContainerNossosServicos,
  ContainerSubNossosServicos
} from "../../styles/home/componente.nosso.servicos.styled";

function ComponenteNossosServicos() {
  return (
    <ContainerPrincipalNossosServicos>
      <ContainerSubNossosServicos>
        <ContainerLineNossosServicos >
          <LineHorizontalComponent
            width={"76px"}
            height={"5px"}
            borderRadius={"1px"}
            background={"#a50000"}
          />
        </ContainerLineNossosServicos>
      
        <ContainerNossosServicos>
          <Typography
            sx={{
              fontFamily: "Bungee",
              fontSize: 35,
              "@media (max-width: 900px)": {
                fontSize: 25,
              },
              "@media (max-width: 280px)": {
                fontSize: 20,
              },
            }}
          >
            Nossos Serviços
          </Typography>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: 25,
              textAlign: "left",
              "@media (max-width: 900px)": {
                fontSize: 20,
              },
              "@media (max-width: 550px)": {
                fontSize: 18,
              },
            }}
          >
            Conheça nossos serviços !{" "}
          </Typography>
        </ContainerNossosServicos>
      </ContainerSubNossosServicos>

      <Grid
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        container
        spacing={2}
      >
        {informacoesCardsServicos.map((item) => (
          <Grid
            item
            xs={9.6}
            sm={3.5}
            md={3.5}
            lg={2.3}
            xl={2.1}
            margin={"5px 0 "}
          >
            <CardsServicosComponent
              titulo={item.titulo}
              descricao={item.descricao}
              imagem={item.imagem}
            />
          </Grid>
        ))}
      </Grid>
    </ContainerPrincipalNossosServicos>
  );
}

export default ComponenteNossosServicos;
