import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import './ServicosStyle.css'

const ServicosComponent = ({titulo,descricao,imagem}) => {
  return (
    
    <Box >

      <Card sx={{  
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transition: "all 0.5s ease-in-out",
        transform: "scale(1)",
        maxWidth: "300px",
        height: "200px",
        "&:hover": {
          transition: "all 0.5s ease-in-out",
          transform: "scale(1.05)",
          cursor: "pointer",
        },
        "@media (max-width: 1500px)":{
          justifyContent: "center",
          maxWidth: "330px",
          height: "200px",
        },
        "@media (max-width: 1080px)":{
          justifyContent: "center",
          maxWidth: "330px",
          height: "200px",
        },
        "@media (max-width: 900px)":{
          justifyContent: "center",
          maxWidth: "330px",
          height: "180px",
        },
        "@media (max-width: 500px)":{
          justifyContent: "center",
          maxWidth: "328px",
          height: "180px",
        },
        "@media (max-width: 425px)":{
          justifyContent: "center",
          maxWidth: "458px",
          height: "180px",
        }

        }} >
        <CardMedia sx={{ width:'70px', height: '70px', }}
         image={imagem}
        />
        <CardContent sx={{ height: 40 }}>
          <Typography 
            sx={{
              color: "black",
              fontFamily: "Roboto ",
              fontWeight: "bolder",
              fontSize: "18px",
              "@media (max-width: 900px)":{
                fontSize: "16px",
              }
            }}
            gutterBottom>
             {titulo}
          </Typography>
        </CardContent>
        <CardActions>
          
        </CardActions>
      </Card>
    </Box>
  );
};

export default ServicosComponent;
