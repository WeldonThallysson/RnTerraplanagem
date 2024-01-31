import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import './CardsStyle.css'

const Cards = ({titulo,descricao,imagem,pathRoute}) => {
  return (
    <Box>
      <Card  sx={{ 
        width: 320, 
        marginBottom:'-40px', 
        transition: "0.3s ease-in-out",
        transform: "translateY(0px)", 
        "&:hover": { 
          transition: "0.3s ease-in-out",
          transform: "translateY(-14px)",
          boxShadow: "2px 2px 12px rgba(0, 0, 0, 0.2)",
          cursor: "pointer"
        },
        "@media (max-width: 1500px)": {
            width: 278

        },
        "@media (max-width: 1366px)": {
          width: 265

      },
        
        "@media (max-width: 1080px)": {
          width: 288

      },
        
        "@media (max-width: 900px)": {
          width: 240

      },
      
      "@media (max-width: 550px)": {
        width: 380

        },
        "@media (max-width: 375px)": {
          width: 340
  
          },
          "@media (max-width: 325px)": {
            width: 300
    
            },
        "@media (max-width: 280px)": {
            width: 260
    
            },
        }}>
        
        <CardMedia 
          sx={{ height: 200}}
          image={imagem}
        />
        
        <CardContent sx={{
          height:120,  
         "@media (max-width: 1500px)": {
            height:95,
  
          },
          "@media (max-width: 900px)": {
            height:110,
  
          }
          }}>
          <Typography sx={{
            fontSize: "25px",
            fontFamily:"Montserrat",
            "@media (max-width: 1500px)": {
              fontSize: "18px"
  
          },
          
            }} gutterBottom variant="h5" component="div">
            {titulo}
          </Typography>
          <Typography  sx={{
            fontSize: "12px",
            fontFamily:"Montserrat",
            "@media (max-width: 1500px)": {
              fontSize: "12px"
  
          },
          "@media (max-width: 500px)": {
            fontSize: "13px"

        },
            }}variant="body2" color="text.secondary">
            {descricao}
          </Typography>
        </CardContent>
        <CardActions >
          <Button sx={{
            fontSize: "12px",
            color: "#910004",
            "&:hover": {
              backgroundColor:  "transparent"
            }
            }} href={pathRoute} size="small">Saiba mais</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Cards;
