import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import './CardsStyle.css'

const Cards = ({titulo,descricao,imagem}) => {
  return (
    <Box >
      <Card  id='cards' sx={{ maxWidth: 310, marginBottom:'-40px',}}>
        <CardMedia id='imagemCard'
          sx={{ height: 200}}
          image={imagem}
        />
        
        <CardContent sx={{height:120}}>
          <Typography id="titulo"  gutterBottom variant="h5" component="div">
            {titulo}
          </Typography>
          <Typography  id='descricao' variant="body2" color="text.secondary">
            {descricao}
          </Typography>
        </CardContent>
        <CardActions >
          <Button id="buttonSaibaMais" size="small">Saiba Mais</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Cards;
