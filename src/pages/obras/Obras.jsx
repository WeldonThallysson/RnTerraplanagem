import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import LineHorizontalComponent from '../../components/LineHorizontal'
import sobre1 from '../../assets/imagensSobreEmpresa/sobre1.jpg'
import sobre2 from '../../assets/imagensSobreEmpresa/sobre2.jpg'
import sobre3 from '../../assets/imagensSobreEmpresa/sobre3.jpg'
const Obras = () => {

  const data = {
    dadosObras: [  
     {
      id: 1,
      img: sobre1,
      tituloServico: "Serviço 1"
     },
     {
       id: 2,
       img: sobre2, 
       tituloServico: "Serviço 2"
     } ,
     {
       id: 3,
       img: sobre3,
       tituloServico: "Serviço 3"
     },
     {
      id: 4,
      img: sobre3,
      tituloServico: "Serviço 4"
    },
   
  
   
   ],
 
  }


  return (
    <Box sx={{display: "flex", height:'100%',flexDirection: "column"}}>
    <Box sx={{display: "flex",flexDirection: "row",justifyContent: "flex-start", gap: 1, alignItems: "center", width: "100%",marginTop: 8, height:200, background: "#770000"}} >
        <LineHorizontalComponent width={60} height={2} borderRadius={0.5} background={"white"}/>
        <Typography sx={{fontFamily: "Bungee",fontSize: "38px",color: "white"}}>Nossas Obras</Typography>
    </Box>  

    <Grid container spacing={2} p={"35px 70px"} gap={8}>
       <Grid item xs={12} md={12} lg={15} xl={15} display={"flex"} flexDirection={"column"} gap={2}>
          <Grid item sx={{display: "flex", flexDirection: "row", gap: 1,width: "100%"}} xs={12} md={12} lg={15}  xl={15}>
            {data.dadosObras.map((item) => (
               <Box columns={3} sx={{display: "flex",flexDirection: "column", gap: 1, width: "100%"}}>
                <Typography sx={{ fontSize: "24px", fontFamily: "Bungee", fontWeight: "bold" }}>{item.tituloServico}</Typography>
                 <img src={item.img} style={{width: "420px",height: "280px", objectFit: "cover",borderRadius: 5}}/>
               </Box>
            ))}
          </Grid>
          <Grid item sx={{display: "flex", flexDirection: "row", gap: 1,width: "100%"}} xs={12} md={12} lg={15}  xl={15}>
            {data.dadosObras.map((item) => (
               <Box columns={3} sx={{display: "flex",flexDirection: "column", gap: 1, width: "100%"}}>
                <Typography sx={{ fontSize: "24px", fontFamily: "Bungee", fontWeight: "bold" }}>{item.tituloServico}</Typography>
                 <img src={item.img} style={{width: "420px",height: "280px", objectFit: "cover",borderRadius: 5}}/>
               </Box>
            ))}
          </Grid>
          <Grid item sx={{display: "flex", flexDirection: "row", gap: 1,width: "100%"}} xs={12} md={12} lg={15}  xl={15}>
            {data.dadosObras.map((item) => (
               <Box columns={3} sx={{display: "flex",flexDirection: "column", gap: 1, width: "100%"}}>
                <Typography sx={{ fontSize: "24px", fontFamily: "Bungee", fontWeight: "bold" }}>{item.tituloServico}</Typography>
                 <img src={item.img} style={{width: "420px",height: "280px", objectFit: "cover",borderRadius: 5}}/>
               </Box>
            ))}
          </Grid>
          
                 </Grid>
    </Grid>
    <Box sx={{display: "flex",flexDirection: "row",justifyContent: "flex-start", gap: 1, alignItems: "center", width: "100%",marginTop: 8, height:200, background: "#770000"}} >
        <LineHorizontalComponent width={60} height={2} borderRadius={0.5} background={"white"}/>
        <Typography sx={{fontFamily: "Bungee",fontSize: "38px",color: "white"}}>Efeito de Parallax</Typography>
    </Box>  
  </Box>
  )
}

export default Obras