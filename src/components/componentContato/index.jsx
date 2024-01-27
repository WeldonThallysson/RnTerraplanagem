import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import LineHorizontalComponent from '../LineHorizontal'
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import InstagramIcon from "@mui/icons-material/Instagram";

function ComponentContato() {
  return (
    <Box
        id="Contato"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#660000",
          width: "100%",
          gap: 12,
          height: "500px",
        }}
      >
        <Grid
          sx={{ display: "flex", flexDirection: "column" }}
          container
          sm={1}
          md={3}
          lg={3}
          xl={5}
        >
          <form
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <Grid item sx={{ display: "flex", gap: 2 }}>
              <TextField
                label="Nome"
                variant="filled"
                fullWidth
                sx={{ color: "white", background: "white" }}
              />
              <TextField
                label="Telefone"
                variant="filled"
                fullWidth
                sx={{ color: "white", background: "white" }}
              />
            </Grid>

            <Grid item sx={{ display: "flex", margin: "1rem 0" }}>
              <TextField
                id="filled-basic"
                label="Email"
                fullWidth
                variant="filled"
                sx={{ color: "white", background: "white" }}
              />
            </Grid>
            <Grid item sx={{ display: "flex" }}>
              <TextField
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
                  fontSize: 40,
                  color: "white",
                  textAlign: "center",
                }}
              >
                Entre em Contato
              </Typography>
              <LineHorizontalComponent
                width={"300px"}
                height={"5px"}
                background={"white"}
              />
            </Box>

            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: 25,
                color: "white",
                textAlign: "center",
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
                fontSize: 25,
                color: "white",
                textAlign: "center",
              }}
            >
              <LocalPhoneIcon /> 48 99966-8246
            </Typography>
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: 25,
                color: "white",
                textAlign: "center",
              }}
            >
              <InstagramIcon /> @rnterraplanagem
            </Typography>
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: 25,
                color: "white",
                textAlign: "center",
              }}
            >
              <MailIcon /> 48 99966-8246
            </Typography>
            <Typography
              sx={{ fontFamily: "Montserrat", fontSize: 25, color: "white" }}
            >
              <LocationOnIcon /> Sombrio - SC
            </Typography>
          </Box>
        </Box>
      </Box>
  )
}

export default ComponentContato