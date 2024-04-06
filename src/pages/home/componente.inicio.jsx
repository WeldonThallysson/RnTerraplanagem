import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { informacoesCards } from "../../Mocks/DataInformacoesInicial";
import LineHorizontalComponent from "../../components/LineHorizontal";
import Cards from "../../components/cards/Cards";
import {
  ContainerPrincipalQuemSomos,
    ContainerLine,
    ContainerQuemSomos,
    TituloQuemSomos,
    SubTituloQuemSomos,
    DescricaoQuemSomos
} from '../../styles/home/componente.inicio.styled'
function ComponenteInicio() {
  return (
    <ContainerPrincipalQuemSomos>
      <ContainerLine>
        <LineHorizontalComponent
          width={"76px"}
          height={"5px"}
          borderRadius={"1px"}
          background={"#a50000"}
          lineWidthMd={"200px"}
          lineWidthLg={"300px"}
          lineWidthXl={"60px"}
        />
      </ContainerLine>

      <ContainerQuemSomos>
        <TituloQuemSomos>
          Quem Somos{" "}
         </TituloQuemSomos>
        <SubTituloQuemSomos >
          Conheça a RN Terraplanagem !{" "}
        </SubTituloQuemSomos>
        <DescricaoQuemSomos>
          Somos uma empresa comprometida em transformar terrenos em
          oportunidades. Conheça nossos serviços especializados e explore o site
          para encontrar a solução ideal para suas necessidades. Deixe-nos ser
          parte do sucesso do seu projeto! 🚀
        </DescricaoQuemSomos>

        <Button
          sx={{
            width: 150,
            margin: "10px 0",
            background: "#a50000",
            color: "white",
            "&:hover": {
              background: "#6b0000",
            },
          }}
          href="/empresa"
        >
          Conheça mais...
        </Button>
      </ContainerQuemSomos>

      <Grid
        display={"flex"}
        justifyContent={"center"}
        container
        spacing={2}
        p={0}
        gap={0}
      >
        {informacoesCards.map((item) => (
          <Grid
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            item
            xs={12}
            sm={1.5}
            md={1.7}
            lg={1.7}
            xl={1.9}
            margin={"0px 80px 100px 80px"}
            sx={{
              "@media (max-width: 1366px)": {
                margin: "0px 80px 100px 80px",
              },
            }}
          >
            <Cards
              titulo={item.titulo}
              descricao={item.descricao}
              imagem={item.imagem}
              pathRoute={item.pathRoute}
            />
          </Grid>
        ))}
      </Grid>
    </ContainerPrincipalQuemSomos>
  );
}

export default ComponenteInicio;
