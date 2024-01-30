import { Box, Typography } from '@mui/material'
import React from 'react'
import LineHorizontalComponent from '../LineHorizontal'

function ParallaxFooter({titulo, backgroundParallax,backgroundPosition,height}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        gap: 1,
        alignItems: "center",
        width: "100%",
        marginTop: 8,
        height: height ? height : 280,
        backgroundPosition: backgroundPosition ,
        backgroundImage:`url(${backgroundParallax})`,
        backgroundAttachment: "fixed",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        "&:before":{
          width: "100%",
          height: "100%",
          content:"''",
          position: "relative",
          zIndex: 1,
          background: "linear-gradient(90deg, rgba(34,34,35,0.8) 0%, rgba(41,41,41,0.7) 35%, rgba(15,15,15,0.9) 100%);" 
        },
        "@media (max-width: 550px)": {
          marginTop: 5,
        }
      }}
  >
       <Box sx={{    
      display:"flex",
      width: "100%",  
      zIndex: 2,
      
      alignItems:"center",
      position: "absolute",}}>
        <Typography
          sx={{ fontFamily: "Bungee", fontSize: "38px", color: "white",
          "@media (max-width: 550px)": {
            fontSize: "28px",
          } }}
        >
          {titulo}
        </Typography>
    </Box>
  </Box>
  )
}

export default ParallaxFooter