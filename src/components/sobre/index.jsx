import React from "react";
import { Box, Button, Typography } from "@mui/material";
import SobreImg from "../../assets/sobre.jpg";
import { useNavigate } from "react-router-dom";
import LineHorizontalComponent from "../LineHorizontal";
export default function ComponentSobre() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{ 
        display: "flex", 
        height: "420px", 
        background: "#c10000", 
        alignItems: "center",
        justifyContent: "center",
        "@media (max-width: 1500px)":{
          width: "100%"
        },
        "@media (max-width: 550px)":{
          width: "100%",
          height: "420px", 
        },
        "@media (max-width: 375px)":{
          width: "100%",
          height: "480px", 
        },
    }}
    
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "420px",
          background: "#252525",
          borderBottomRightRadius: 380,
          boxShadow: "2px 1px 15px rgba(0,0,0,0.5)",
          "@media (max-width: 1500px)":{
            width: "100%"
          },
          "@media (max-width: 1080px)":{
            width: "100%",
            borderBottomRightRadius: 150
          },
          "@media (max-width: 550px)":{
            width: "100%",
            height: "420px", 
            borderBottomRightRadius: 150
          },
          "@media (max-width: 375px)":{
            width: "100%",
            height: "480px", 
          },     
          
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 40px",
            width: "100%",
            gap: 2,
            "@media (max-width: 1500px)": {
              margin: "0 30px",
            },
            "@media (max-width: 1080px)": {
              margin: "0px",
              width: "95%",
            },
            "@media (max-width: 900px)": {
              margin: "0px",
              width: "100%",
            },
          }}
        >
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"} 
          sx={{ 
            width: 680,
            "@media (max-width: 1500px)": {
            width: 650,
          },
          "@media (max-width: 1080px)":{
            width: 400,
        },
          "@media (max-width: 900px)": {
            display: "none"
          }}}>
            <img
              src={SobreImg}
              style={{ 
                width: "100%",
                objectFit: "cover", 
                borderRadius: 4,
             }}
            />
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            gap={1.8}
            flexDirection={"column"}
            
            sx={{
              padding: "0 20px", 
              width: "100%",
              "@media (max-width: 1080px)":{
                  width: "65%"
              },
              "@media (max-width: 900px)":{
                width: "100%"
            }
           }}
          >
            <Box
              sx={{ 
                display: "flex",
                flexDirection: "row", 
                width:"100%",
                margin: 0,
                gap: 3,
              }}
            >
              <Box sx={{ display: "flex", margin: 0 }}>
                <Typography
                  sx={{
                  fontFamily: "bungee", 
                  fontSize: 35, color: "white", 
                  "@media (max-width: 1500px)": {
                    fontSize: 25,
                  }, 
                  "@media (max-width: 1080px)": {
                    fontSize: 25,
                  }, 
                  "@media (max-width: 900px)": {
                    fontSize: 25,
                  }, 
                  "@media (max-width: 500px)": {
                    fontSize: 25,
                  }, 
                  "@media (max-width: 375px)": {
                    fontSize: 20,
                  }, 
                }}
                >
                  Sobre Nós
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                
                }}
              >
                <LineHorizontalComponent
                  width={"920px"}
                  height={"3px"}
                  borderRadius={"1px"}
                  background={"white"}
                  lineWidthXl={"590px"}
                  lineWidthLg={"340px"}
                  lineWidthMd={"440px"}
                  lineWidthSm={"200px"}
                  lineWidthXs={"180px"}
                  lineWidthXss={"130px"}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                width: "90%",
                "@media (max-width: 1500px)": {
                  width: "80%",
                }, 
                "@media (max-width: 1080px)": {
                  width: "100%",
                }, 
              }}
            >
              <Typography
                sx={{ color: "white", fontSize: 14, fontFamily: "Montserrat",
                "@media (max-width: 1500px)": {
                  fontSize: 12,
                }, 
                "@media (max-width: 1080px)": {
                  fontSize: 10,
                }, 
                "@media (max-width: 900px)": {
                  fontSize: 12,
                }, 
                "@media (max-width: 550px)": {
                  fontSize: 10,
                }, 
               }}
              >
                A RN Terraplanagem é uma empresa especializada em terraplanagem,
                desempenhando um papel fundamental no início de diversas
                construções. A terraplanagem consiste no nivelamento e modelagem
                do terreno, preparando-o para a execução de obras. Através de
                maquinário pesado e técnicas específicas, nossa equipe realiza a
                escavação, corte, aterro e compactação do solo, garantindo uma
                base sólida para projetos residenciais, comerciais e
                industriais.
              </Typography>
              <Typography
                sx={{ color: "white", fontSize: 14, fontFamily: "Montserrat",
                "@media (max-width: 1500px)": {
                  fontSize: 12,
                }, 
                "@media (max-width: 1080px)": {
                  fontSize: 10,
                }, 
                "@media (max-width:  900px)": {
                  fontSize: 12,
                }, 
                "@media (max-width: 550px)": {
                  fontSize: 10,
                }, 
              
              }}
              >
                Além da terraplanagem, a RN Terraplanagem se destaca na execução
                de obras e concretagem. Obras compreendem a construção civil em
                si, abrangendo desde a fundação até a entrega do projeto final.
                Nossa equipe qualificada e experiente gerencia cada etapa,
                assegurando eficiência e qualidade. A concretagem, por sua vez,
                envolve o despejo de concreto em moldes estruturais, conferindo
                resistência e durabilidade às edificações. Trabalhamos para
                proporcionar soluções integradas, atendendo às demandas de
                nossos clientes com excelência e comprometimento.
              </Typography>
            </Box>

            <Box>
              <Button
                sx={{ color: "crimson" }}
                onClick={() => {
                  navigate("/empresa");
                }}
              >
                Conhecer mais...
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
