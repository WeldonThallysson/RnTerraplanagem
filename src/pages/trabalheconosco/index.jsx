import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import LineHorizontalComponent from '../../components/LineHorizontal'
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { useDropzone } from 'react-dropzone';

const TrabalheConosco = () => {

  const { getRootProps,getInputProps } = useDropzone({})

  const pdfjs = require('pdfjs-dist');

  return (
    <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#e8e8e8",
      width: "100%",
      flexDirection: "column",
      gap: 1,
      height:"100vh"
    }}
  >
     <Box sx={{display: "flex",flexDirection: "row",justifyContent: "flex-start", gap: 1, alignItems: "center", width: "100%",marginTop: 8, height:200, background: "#770000"}} >
        <LineHorizontalComponent width={60} height={2} borderRadius={0.5} background={"white"}/>
        <Typography sx={{fontFamily: "Bungee",fontSize: "38px",color: "white"}}>Trabalhe Conosco</Typography>
    </Box> 
   
    <Box sx={{display: "flex",  
      background: "#e8e8e8",
      width: "100%",
      flexDirection: "row",
      gap: 20,
      height:"100vh",
      margin: "0px 0px",
      justifyContent: "center",alignItems:"center"}}>
        
      
    <Grid
      sx={{ display: "flex", flexDirection: "column",}}
      container
      sm={1}
      md={3}
      lg={3}
      xl={5}
    >
        <Grid item xl={15}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 2,
            margin: "2rem 0"
          }}
        >
          <Typography
            sx={{
              fontFamily: "Bungee",
              fontSize: 30,
              color: "black",
              textAlign: "center",
            }}
          >
           Cadastrar Curriculo
          </Typography>
          <LineHorizontalComponent
            width={"382px"}
            height={"3px"}
            background={"black"}
          />
        </Grid>
        
      <form
        style={{ display: "flex", flexDirection: "column", width: "100%" }}
      >
        <Grid item sx={{ display: "flex", gap: 2 }}>
          <TextField
            label="Nome"
            variant="filled"
            fullWidth
            sx={{ color: "white", background: "white",border: "1px solid black"  }}
          />
          <TextField
            label="Sobrenome"
            variant="filled"
            fullWidth
            sx={{ color: "white", background: "white",border: "1px solid black"  }}
          />
        </Grid>

        <Grid item sx={{ display: "flex", margin: "1rem 0" }}>
          <TextField
            id="filled-basic"
            label="CPF"
            fullWidth
            variant="filled"
            sx={{ color: "white", background: "white",border: "1px solid black"  }}
          />
        </Grid>
        <Grid item sx={{ display: "flex", margin: "1rem 0" }}>
          <TextField
            id="filled-basic"
            label="Email"
            fullWidth
            variant="filled"
            sx={{ color: "white", background: "white",border: "1px solid black"  }}
          />
        </Grid>
        <Grid item sx={{ display: "flex", margin: "1rem 0",gap: 2 }}>
          <TextField
            id="filled-basic"
            label="Estado Civil"
            fullWidth
            variant="filled"
            sx={{ color: "white", background: "white",border: "1px solid black"  }}
          />
          <TextField
            label="Telefone"
            variant="filled"
            fullWidth
            sx={{ color: "white", background: "white",border: "1px solid black"  }}
          />
        </Grid>
        <Grid item sx={{ display: "flex", margin: "1rem 0" }}>
        <TextField
            id="filled-basic"
            label="CEP"
            fullWidth
            variant="filled"
            sx={{ color: "white", background: "white",border: "1px solid black"  }}
          />
        
        </Grid>
      

        <Grid item sx={{ display: "flex", gap: 2 }}>
          <TextField
            label="Numero"
            variant="filled"
            fullWidth
            sx={{ color: "white", background: "white",border: "1px solid black"  }}
          />
          <TextField
            label="Endereço"
            variant="filled"
            fullWidth
            sx={{ color: "white", background: "white",border: "1px solid black"  }}
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
    <Grid
    item
    xl={15}
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
          {...getRootProps()}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            marginTop: '16px', padding: '16px', border: '2px dashed #ccc', borderRadius: '4px', cursor: 'pointer'
          }}
        >
          <input {...getInputProps()}/>
          <Typography
            sx={{
              fontFamily: "Bungee",
              fontSize: 40,
              color: "black",
              textAlign: "center",
            }}
          >

             Anexar Curriculo
          
          </Typography>
       
         </Box>
       </Box>
      </Grid>
      
    </Box> 
  
  </Box>
  )
}

export default TrabalheConosco