import React from "react";
import CarrosselPrincipal from "../../components/carrosselPrincipal/CarrosselPrincipal";
import Cards from "../../components/cards/Cards";
import {
  Box,
  Button,
  Grid,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import imagemCard1 from "../../assets/imagensCards/imagemCard3.jpg";
import imagemCard2 from "../../assets/imagensCards/imagemCard2.jpeg";
import imagemCard3 from "../../assets/imagensCards/imagemCard3.jpeg";
//
import alugueldeEquipamentos from "../../assets/imgIconesCardsServicos/alugueldeequipamentos.png";
import demolicao from "../../assets/imgIconesCardsServicos/Demolicao.png";
import drenagem from "../../assets/imgIconesCardsServicos/drenagem.png";
import aterro from "../../assets/imgIconesCardsServicos/aterro.png";
import escavacoes from "../../assets/imgIconesCardsServicos/escavacoes.png";
import loteamento from "../../assets/imgIconesCardsServicos/loteamento.png";
import terraplanagem from "../../assets/imgIconesCardsServicos/terraplanagem.png";
import areia from "../../assets/imgIconesCardsServicos/areia.png";
import reparoderuas from "../../assets/imgIconesCardsServicos/reparoderuas.png";
import calcamento from "../../assets/imgIconesCardsServicos/calcamento.png";
import "./Home.css";
import ServicosComponent from "../../components/servicos/ServicosComponent";
import TituloSections from "../../components/tituloSections/TituloSections";
import ComponentSobre from "../../components/sobre";
import LineHorizontalComponent from "../../components/LineHorizontal";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import InstagramIcon from "@mui/icons-material/Instagram";
import ComponentContato from "../../components/componentContato";

const Home = () => {
  const informacoesCards = [
    {
      id: 1,
      imagem: imagemCard1,
      titulo: "Terraplanagem",
      descricao:
        "Conheça a RN - Transformando Ideias em Realidade! Somos uma empresa comprometida em...",
      pathRoute: "/servicos"  
    },
    {
      id: 2,
      imagem: imagemCard2,
      titulo: "Obras",
      descricao: "Explore o mundo da construção e transformação na RN soluções completas para cada projeto...",
      pathRoute: "/obras" 
    },
    {
      id: 3,
      imagem: imagemCard3,
      titulo: "Drenagem",
      descricao: "Descubra a excelência em serviços da RN Terraplanagem! Estamos aqui para melhor atender você...",
      pathRoute: "/servicos"   
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
      imagem: reparoderuas,
      titulo: "Reparos em ruas",
      descricao:
        "Conheça a RN - Transformando Ideias em Realidade! Somos uma empresa comprometida em..",
    },
    {
      id: 10,
      imagem: calcamento,
      titulo: "Calçamento de ruas",
      descricao:
        "Conheça a RN - Transformando Ideias em Realidade! Somos uma empresa comprometida em..",
    },
  ];

  return (
    <>
      <CarrosselPrincipal />

      <Box
        sx={{ 
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          height:"500px",
         
          gap: 1,
        "@media (max-width:1080px)":{
          flexDirection: "column",
          height:"700px",
          justifyContent: "flex-start",
          alignItems: "center",
          marginTop: "10px",
        },
        "@media (max-width:900px)":{
          flexDirection: "column",
          height:"700px",
          justifyContent: "flex-start",
          alignItems: "center",
        },
        "@media (max-width: 550px)":{
          flexDirection: "column",
          height:"100%",
          justifyContent: "flex-start",
          alignItems: "center",
          marginBottom: 4
          
        }
      
      }}
      >
        <Box 
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            margin: "60px 15px",
            "@media (max-width: 1080px)":{
              margin: "15px 5px",
              display: "none",
            },
            "@media (max-width: 900px)":{
              margin: "15px 15px",
              display: "none",
            }
          }}
        >
          <LineHorizontalComponent
            width={"76px"}
            height={"5px"}
            borderRadius={"1px"}
            background={"#a50000"}
            lineWidthMd={"200px"}
            lineWidthLg={"300px"}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "60%",
            marginTop: "40px",
            gap: 1,
            "@media (max-width: 1500px)":{
             
              width: "45%",
            },
            "@media (max-width: 1080px)":{
              marginTop: "20px",
              width: "85%",
            } ,
            "@media (max-width: 900px)":{
              marginTop: "20px",
              width: "90%",
            } 
          }}
        >
          <Typography sx={{ fontFamily: "Bungee", fontSize: 35,
            "@media (max-width: 1500px)":{
              fontSize: 32,
            },
            "@media (max-width: 900px)":{
              fontSize: 28,
            }
         }}>
            Quem Somos{" "}
          </Typography>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: 25 ,
            "@media (max-width: 1500px)":{
              fontSize: 20,
            },
            "@media (max-width: 550px)":{
              fontSize: 18,
            },
            
            "@media (max-width: 280px)":{
              fontSize: 16,
            }  
            }}>
            Conheça a RN Terraplanagem !{" "}
          </Typography>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: 18,
            "@media (max-width: 1500px)":{
                      fontSize: 16,
                      textAlign: "justify"
              },
            "@media (max-width: 550px)":{
                fontSize: 12,
                textAlign: "left"
            }}}>
            Somos uma empresa comprometida em transformar terrenos em
            oportunidades. Conheça nossos serviços especializados e explore o
            site para encontrar a solução ideal para suas necessidades.
            Deixe-nos ser parte do sucesso do seu projeto! 🚀
          </Typography>
          <Button
            sx={{
              width: 150,
              margin: "10px 0",
              background: "#a50000",
              color: "white",
              "&:hover": {

                 background: "#6b0000" 
             
                },
            }}
          >
            Conheça mais...
          </Button>
        </Box>

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
              sm={1.4}
              md={1.5}
              lg={1.7}
              xl={1.9}
              margin={"30px 80px 30px 80px"}
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
      </Box>
      
       <ComponentSobre />
   
      <Box
        sx={{
        display: "flex", 
        flexDirection: "column",
        margin: "0 0 55px 0",
        "@media (max-width: 550px)":{
          display: "flex",
          justifyContent: 'center',
          alignItens: 'center'
        }
       }} 
      >
        <Box sx={{ display: "flex", flexDirection: "row"   }}>
          <Box sx={{ display: "flex", margin: "65px 15px", 
          "@media (max-width: 900px)":{
             display: "none",
          } }}>
            <LineHorizontalComponent
              width={"76px"}
              height={"5px"}
              borderRadius={"1px"}
              background={"#a50000"}
            />
          </Box>
          <Box
            sx={{ 
              display: "flex",
              margin: "42px 0", 
              flexDirection: "column",
              "@media (max-width: 900px)":{
                margin: "30px", 
             }
            
            }}
          >
            <Typography sx={{ 
              fontFamily: "Bungee", 
              fontSize: 35,
              "@media (max-width: 900px)":{
                fontSize: 25,
              },
              "@media (max-width: 280px)":{
                fontSize: 20,
              } }}>
              Nossos Serviços
            </Typography>
            <Typography
              sx={{ 
                fontFamily: "Montserrat",
                fontSize: 25, 
                textAlign: "left", 
                "@media (max-width: 900px)":{
                  fontSize: 20,
                },
                "@media (max-width: 550px)":{
                  fontSize: 18,
                },
                "@media (max-width: 280px)":{
                  fontSize: 15,
                }}}
            >
              Conheça nossos serviços !{" "}
            </Typography>
          </Box>
        </Box>

        <Grid display={"flex"} alignItems={"center"}  justifyContent={"center"} container spacing={2}>
          
            {informacoesCardsServicos.map((item) => (
              <Grid
                item
                xs={9.5}
                sm={3.5}
                md={3.5}
                lg={2.3}
                xl={2.1}
                margin={"5px 0 "} 
               
              >
                <ServicosComponent
                  titulo={item.titulo}
                  descricao={item.descricao}
                  imagem={item.imagem}
                />
              </Grid>
            ))}    
 
        
        </Grid>
      </Box>

     <ComponentContato/>
    </>
  );
};
export default Home;
