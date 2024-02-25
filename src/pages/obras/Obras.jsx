import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import ParallaxHeader from '../../components/ParallaxHeader'
import ObrasParallax from '../../assets/parallaxImages/ObrasParallax_11zon.webp'
import ParallaxFooter from '../../components/ParallaxFooter'
import { DataObras } from '../../Mocks/DataObras'

const Obras = () => {

  return (
    <Box sx={{display: "flex", height:'100%',flexDirection: "column"}}>
     <ParallaxHeader titulo={"Nossas Obras"} backgroundParallax={ObrasParallax} backgroundPosition={"auto"}/>

      <Grid container spacing={2} p={"35px 20px"} gap={8}>
        <Grid item xs={12} md={12} lg={15} xl={15} display={"flex"} flexDirection={"column"} gap={2}>
            <Grid container sx={{display: "flex", flexDirection: "row", gap: 1,width: "100%", padding: 0, margin: 0}}>
              {DataObras.dadosObras.map((item) => (
                <Grid item xs={15} sm={12} md={3.9} lg={3.9} xl={2.9} sx={{display: "flex",flexDirection: "column", gap: 1, width: "100%",}}>
                    <img src={item.img} style={{
                      width: "100%",
                      height: "280px", 
                      objectFit: "cover",
                      borderRadius: 5, 
                    }}/>
                </Grid>
              ))}
            </Grid>
        
       </Grid>
    </Grid>
    <ParallaxFooter titulo={""} height={"120px"} backgroundParallax={ObrasParallax} backgroundPosition={"auto"}/>
  </Box>
  )
}

export default Obras