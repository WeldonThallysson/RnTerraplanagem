import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import LineHorizontalComponent from "../../components/LineHorizontal";
import IconeAluguel from "../../assets/imgIconesCardsServicos/alugueldeequipamentos.png";

import { DataServicos } from "../../Mocks/DataServicos/index";
import ParallaxHeader from "../../components/ParallaxHeader";
import ServicosParallax from '../../assets/parallaxImages/ServicosParallax.jpg'
import ParallaxFooter from "../../components/ParallaxFooter";


const Servicos = () => {

  
  return (
    <Box sx={{ display: "flex", height: "100%", flexDirection: "column" }}>
      <ParallaxHeader titulo={"Nossos Serviços"} backgroundParallax={ServicosParallax}  backgroundPosition={"auto"}/>

      <Grid container spacing={2} p={"35px 25px"} gap={8}>
        {DataServicos.map((item) => (
          <Grid
            item
            xs={15}
            md={12}
            lg={15}
            xl={10}
            display={"flex"}
            flexDirection={"column"}
            gap={2}
            id={item.id}
          >
            {" "}
            <Typography
              sx={{
                fontSize: "22px",
                fontFamily: "Bungee",
                fontWeight: "bold",
                letterSpacing: "1px;",
               
              }}
            >
              <img src={item.icone} width={35} /> {item.titulo}
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                fontFamily: "Montserrat",
                textAlign: "justify",
                letterSpacing: "-0.08rem;",
                "@media (max-width: 550px)": {
                  fontSize: "15px",
                },
              }}
            >
               {item.descricao}{" "}
            </Typography>
            <Grid container 
             sx={{ display: "flex", gap: 2 }}>
              {item.imgs.map((item) => (
                <Grid 
                item
                xs={15}
                sm={12}
                md={5}
                lg={2.8}
                xl={2.9} 
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                >
                   <img
                  src={item.img}
                  style={{
                    width: "100%",
                    height: "280px",
                    objectFit: "cover",
                    borderRadius: 5,
                  }}
                />

                </Grid>
               
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>
      <ParallaxFooter titulo={""} height={"120px"} backgroundParallax={ServicosParallax} backgroundPosition={"auto"}/>
    </Box>
  );
};

export default Servicos;
