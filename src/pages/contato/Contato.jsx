import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import ParallaxHeader from '../../components/ParallaxHeader'
import ComponentContato from '../../components/componentContato'
const Contato = () => {


  return (
    <Box sx={{display: "flex", height:'100%',flexDirection: "column"}}>
     <ParallaxHeader titulo={"Contato"}/>
     <ComponentContato height={"600px"} background={"#561c1c"}/>
    </Box>
  )
}

export default Contato