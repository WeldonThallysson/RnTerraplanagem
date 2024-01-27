import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import LineHorizontalComponent from "../../components/LineHorizontal";
import IconeAluguel from "../../assets/imgIconesCardsServicos/alugueldeequipamentos.png";

import { DataServicos } from "../../Mocks/DataServicos/index";
const Servicos = () => {
  return (
    <Box sx={{ display: "flex", height: "100%", flexDirection: "column" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          gap: 1,
          alignItems: "center",
          width: "100%",
          marginTop: 8,
          height: 200,
          background: "#770000",
        }}
      >
        <LineHorizontalComponent
          width={60}
          height={2}
          borderRadius={0.5}
          background={"white"}
        />
        <Typography
          sx={{ fontFamily: "Bungee", fontSize: "38px", color: "white" }}
        >
          Nossos Serviços
        </Typography>
      </Box>

      <Grid container spacing={2} p={"35px 70px"} gap={8}>
        {DataServicos.map((item) => (
          <Grid
            item
            xs={12}
            md={12}
            lg={15}
            xl={10}
            display={"flex"}
            flexDirection={"column"}
            gap={2}
          >
            {" "}
            <Typography
              sx={{
                fontSize: "24px",
                fontFamily: "Bungee",
                fontWeight: "bold",
              }}
            >
              <img src={item.icone} width={35} /> {item.titulo}
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                fontFamily: "Montserrat",
                textAlign: "justify",
              }}
            >
               {item.descricao}{" "}
            </Typography>
            <Grid item sx={{ display: "flex", gap: 2 }}>
              {item.imgs.map((item) => (
                <img
                  src={item.img}
                  style={{
                    width: "380px",
                    height: "280px",
                    objectFit: "cover",
                    borderRadius: 5,
                  }}
                />
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          gap: 1,
          alignItems: "center",
          width: "100%",
          marginTop: 8,
          height: 200,
          background: "#770000",
        }}
      >
        <LineHorizontalComponent
          width={60}
          height={2}
          borderRadius={0.5}
          background={"white"}
        />
        <Typography
          sx={{ fontFamily: "Bungee", fontSize: "38px", color: "white" }}
        >
          Efeito de Parallax
        </Typography>
      </Box>
    </Box>
  );
};

export default Servicos;
