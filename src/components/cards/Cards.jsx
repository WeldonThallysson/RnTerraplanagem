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
        }
        }}>
        
        <CardMedia 
          sx={{ height: 200}}
          image={imagem}
        />
        
        <CardContent sx={{height:120}}>
          <Typography sx={{fontSize: "25px",fontFamily:"Montserrat"}} gutterBottom variant="h5" component="div">
            {titulo}
          </Typography>
          <Typography  sx={{fontSize: "12px",fontFamily:"Montserrat"}}variant="body2" color="text.secondary">
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
