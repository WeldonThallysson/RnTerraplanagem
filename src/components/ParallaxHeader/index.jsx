import { Box, Typography } from '@mui/material'
import React from 'react'
import LineHorizontalComponent from '../LineHorizontal'

function ParallaxHeader({titulo, backgroundParallax,backgroundPosition,height}) {
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
        "@media (max-width: 550px)": {
          marginTop: 5,
        },
        
        "&:before":{
          width: "100%",
          height: "100%",
          content:"''",
          position: "relative",
          zIndex: 1,
          background: "linear-gradient(90deg, rgba(34,34,35,0.6) 0%, rgba(41,41,41,0.6) 35%, rgba(15,15,15,0.8) 100%);" 
        }
      }}
  >

    <Box sx={{    
      display:"flex",
      width: "100%",  
      zIndex: 2,
      alignItems:"center",
      position: "absolute",
      }}>
        <LineHorizontalComponent
          width={60}
          height={2}
          borderRadius={0.5}
          background={"white"}
        />
        <Typography
          sx={{ 
          fontFamily: "Bungee",
          fontSize: "38px",

          color: "white",
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

export default ParallaxHeader