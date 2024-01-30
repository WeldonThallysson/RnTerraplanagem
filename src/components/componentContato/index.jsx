import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React, { useContext } from 'react'
import LineHorizontalComponent from '../LineHorizontal'
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useForm } from 'react-hook-form';
import { ContextGeral } from '../../contexts/ContextGeral';

function ComponentContato({background,height}) {

  const {sendContatoEmail} = useContext(ContextGeral)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()


  const onSubmit = (data) => { 
    sendContatoEmail(data)
  }
  return (
    <Box
        id="Contato"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: background ? background : "#660000",
          width: "100%",
          gap: 15,
          height: height ? height : "500px",
          "@media (max-width: 900px)":{
            gap: 5,
          }
        }}
      >
        <Grid
          sx={{ display: "flex", flexDirection: "column" }}
          container
          xs={10}
          sm={6}
          md={5}
          lg={5}
          xl={5}
        > 

          <Box sx={{
             display: "none",
            "@media (max-width: 550px)":{
             display: "flex", padding: "15px",
             justifyContent: "center",
             alignItems:"center"
          }}}>
            <Typography sx={{   fontFamily: "Bungee",
                  fontSize: 20,
                  color: "white",
                  textAlign: "center",}}>Entre em Contato</Typography>
          </Box>
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <Grid item sx={{ display: "flex", gap: 2 }}>
              <TextField
                {...register("Nome")}
                label="Nome"
                variant="filled"
                fullWidth
                sx={{ color: "white", background: "white" }}
              />
              <TextField
                 {...register("Telefone")}
                label="Telefone"
                variant="filled"
                fullWidth
                sx={{ color: "white", background: "white" }}
              />
            </Grid>

            <Grid item sx={{ display: "flex", margin: "1rem 0" }}>
              <TextField
                id="filled-basic"
                {...register("Email")}
                label="Email"
                fullWidth
                variant="filled"
                sx={{ color: "white", background: "white" }}
              />
            </Grid>
            <Grid item sx={{ display: "flex" }}>
              <TextField
               {...register("Mensagem")}
                id="outlined-multiline-flexible"
                label="Mensagem"
                multiline
                fullWidth
                sx={{ color: "white", background: "white" }}
                variant="filled"
                maxRows={3}
              />
            </Grid>
            <Grid
              item
              sx={{ display: "flex", width: "100%", margin: "1rem 0" }}
            >
              <Button
                sx={{
                  display: "flex",
                  width: "100%",
                  background: "#141414",
                  color: "white",
                  "&:hover":{
                    background: "#191919",
                  }
                }}
                type="submit"
              >
                Enviar
              </Button>
            </Grid>
          </form>
        </Grid>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            width: "40%",
            gap: 1,
            marginBottom: "2%",
            "@media (max-width: 550px)":{
              display: "none",
            }
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Bungee",
                  fontSize: 35,
                  color: "white",
                  textAlign: "center",
                  "@media (max-width: 1500px)":{
                    fontSize: 25,
                  },
                  "@media (max-width: 1080px)":{
                    fontSize: 20,
                  },
                  "@media (max-width: 900px)":{
                    fontSize: 28
                  }
                }}
              >
                Entre em Contato
              </Typography>
              <Box sx={{
                display: "flex",
                "@media (max-width: 900px)":{
                  display:"none"
              }}}>
                <LineHorizontalComponent
                  width={"300px"}
                  height={"5px"}
                  background={"white"}
                  lineWidthLg={"150px"}
                  lineWidthMd={"50px"}
                />
              </Box>
             
            </Box>

            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: 20,
                color: "white",
                textAlign: "center",
                "@media (max-width: 1500px)":{
                  fontSize: 18,
                },
                "@media (max-width: 900px)":{
                  fontSize: 12
                }
              }}
            >
              Dúvidas, reclamações ou sugestões?
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: 1,
              marginTop: 2,
            }}
          >
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: 20,
                color: "white",
                textAlign: "center",
                "@media (max-width: 1500px)":{
                  fontSize: 18,
                },
                "@media (max-width: 900px)":{
                  fontSize: 15
                }
              }}
            >
              <LocalPhoneIcon /> 48 99966-8246
            </Typography>
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: 20,
                color: "white",
                textAlign: "center",
                "@media (max-width: 1500px)":{
                  fontSize: 18,
                },
                "@media (max-width: 900px)":{
                  fontSize: 15
                }
              }}
            >
              <InstagramIcon /> @rnterraplanagem
            </Typography>
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: 20,
                color: "white",
                textAlign: "center",
                "@media (max-width: 1500px)":{
                  fontSize: 18,
                },
                "@media (max-width: 900px)":{
                  fontSize: 15
                }
              }}
            >
              <MailIcon /> 48 99966-8246
            </Typography>
            <Typography
              sx={{ fontFamily: "Montserrat", fontSize: 20, color: "white",
              "@media (max-width: 1500px)":{
                fontSize: 18,
              },
              "@media (max-width: 900px)":{
                fontSize: 15
              }
            
            }}
            >
              <LocationOnIcon /> Sombrio - SC
            </Typography>
          </Box>
        </Box>
      </Box>
  )
}

export default ComponentContato