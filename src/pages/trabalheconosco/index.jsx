import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import LineHorizontalComponent from "../../components/LineHorizontal";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { useDropzone } from "react-dropzone";
import TrabalheConoscoImg from '../../assets/trabalheconosco.jpg'
import { Parallax } from "swiper/modules";
import ParallaxHeader from "../../components/ParallaxHeader";
import TrabalheConoscoParallax from '../../assets/parallaxImages/TrabalheConoscoParallax.jpg'
import ParallaxFooter from "../../components/ParallaxFooter";
import { useForm } from "react-hook-form";
import { ContextGeral } from "../../contexts/ContextGeral";

const TrabalheConosco = () => {
  const [anexo,setAnexo] = useState()
  const {sendCurriculum} = useContext(ContextGeral)
  

  const onDrop = (accessFiles) => {
    setAnexo(accessFiles)
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => { 
    const dadosCurriculo = {
      ...data,
      Anexo: anexo
    }

    console.log(dadosCurriculo)
    sendCurriculum(dadosCurriculo)
  }
  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  
  return (
    <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#e8e8e8",
        width: "100%",
        flexDirection: "column",
        gap: 1,
        height: "100%",
      }}>
        
      <ParallaxHeader titulo={"Trabalhe Conosco"} backgroundParallax={TrabalheConoscoParallax} backgroundPosition={"auto"}/>

      <Box
        sx={{
          display: "flex",
          background: "#e8e8e8",
          width: "100%",
          flexDirection: "row",
          gap:20,
          margin: "15px 0px",
          justifyContent: "center",
          alignItems: "center",

        }}
      >
        <Grid
          sx={{ display: "flex", flexDirection: "column" }}
          container
          sm={5}
          md={5}
          lg={5}
          xl={5}
        >
          <Grid
            item
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              margin: "1rem 1rem ",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Bungee",
                fontSize: 30,
                color: "black",
                textAlign: "center",
                "@media (max-width: 550px)":{
                  fontSize: 20,
                  textAlign: "center",
                }
              }}
            >
              Cadastrar Curriculo
            </Typography>
            <Box sx={{display: "none"}}>
              <LineHorizontalComponent
                width={"382px"}
                height={"3px"}
                background={"black"}
                lineWidthXs={"100px"}
              />
            </Box>
           
          </Grid>

          <form
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
            onSubmit={handleSubmit(onSubmit)}

          >
            <Grid item sx={{ display: "flex", gap: 2 }}>
              <TextField
                {...register("Nome")}
                label="Nome"
                variant="filled"
                
                fullWidth
                sx={{
                  color: "white",
                  background: "white",
                  border: "1px solid black",
                }}
              />
              <TextField
                {...register("Sobrenome")}
                label="Sobrenome"
                variant="filled"
                fullWidth
                sx={{
                  color: "white",
                  background: "white",
                  border: "1px solid black",
                }}
              />
            </Grid>

            <Grid item sx={{ display: "flex", margin: "1rem 0" }}>
              <TextField
                {...register("CPF")}                  
                id="filled-basic"
                label="CPF"
                type="number"
                fullWidth
                variant="filled"
                sx={{
                  color: "white",
                  background: "white",
                  border: "1px solid black",
                }}
              />
            </Grid>
            <Grid item sx={{ display: "flex", margin: "1rem 0" }}>
              <TextField
              {...register("Email")}                  
                id="filled-basic"
                label="Email"
                type="email"
                fullWidth
                variant="filled"
                sx={{
                  color: "white",
                  background: "white",
                  border: "1px solid black",
                }}
              />
            </Grid>
            <Grid item sx={{ display: "flex", margin: "1rem 0", gap: 2 }}>
            
              <TextField
              {...register("Telefone")}
                label="Telefone"
                variant="filled"
                fullWidth
                sx={{
                  color: "white",
                  background: "white",
                  border: "1px solid black",
                }}
              />
            </Grid>
            <Grid item sx={{ display: "flex", margin: "1rem 0" }}>
              <TextField
                {...register("CEP")}
                id="filled-basic"
                label="CEP"
                type="number"
                fullWidth
                variant="filled"
                sx={{
                  color: "white",
                  background: "white",
                  border: "1px solid black",
                }}
              />
            </Grid>

            <Grid item sx={{ display: "flex", gap: 2 }}>
              <TextField
               {...register("Numero")}
                label="Numero"
                type="number"
                variant="filled"
                fullWidth
                sx={{
                  color: "white",
                  background: "white",
                  border: "1px solid black",
                }}
              />
              <TextField
               {...register("Endereco")}
                label="Endereço"
                variant="filled"
                fullWidth
                sx={{
                  color: "white",
                  background: "white",
                  border: "1px solid black",
                }}
              />
            </Grid>
            <Grid
              item
              xl={15}
              sx={{ display: "flex", width: "100%", margin: "1rem 0" }}
            >
              <Grid
                item
                xl={15}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  width: "100%",
                  gap: 1,
                  marginBottom: "2%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: 1,
                    width: "100%",
                  }}
                >
                  <Box
                    {...getRootProps()}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 2,
                      width: "100%",
                      marginTop: "5px",
                      padding: "5px",
                      border: "2px dashed #ccc",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    <input {...getInputProps()} />
                    <Typography
                      sx={{
                        fontFamily: "Bungee",
                        fontSize: 20,
                        color: "black",
                        textAlign: "center",
                      }}
                    >
                      Anexar Curriculo
                    </Typography>
                  </Box>
                </Box>
              </Grid>
          

            </Grid>

            <Button
                sx={{
                  display: "flex",
                  width: "100%",
                  padding: 1,
                  background: "#141414",
                  color: "white",
                  "&:hover": {
                    background: "#191919",
                  },
                }}
                type="submit"
              >
                Enviar
              </Button>
          </form>
        </Grid>
   
              <Grid
                item
                xl={15}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "40%",
                  gap: 1,
                  marginBottom: "2%",
                  "@media (max-width: 1080px)": {
                    display: "none"
                  }
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 2,
                      marginTop: "5px",
                      padding: "5px",
                      border: "2px solid #ccc",
                      borderRadius: "4px",
                    }}
                  >
                    <img src={TrabalheConoscoImg} style={{width: "100%", height: "500px",borderRadius: "4px"}}/>
                  </Box>
                </Box>
              </Grid>
    
      </Box>
      <ParallaxFooter titulo={""} height={"150px"} backgroundParallax={TrabalheConoscoParallax} backgroundPosition={"auto"}/>
    </Box>
  );
};

export default TrabalheConosco;
