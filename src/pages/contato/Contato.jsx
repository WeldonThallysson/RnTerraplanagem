import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import LineHorizontalComponent from '../../components/LineHorizontal'
import sobre1 from '../../assets/imagensSobreEmpresa/sobre1.jpg'
import sobre2 from '../../assets/imagensSobreEmpresa/sobre2.jpg'
import sobre3 from '../../assets/imagensSobreEmpresa/sobre3.jpg'
import EquipamentosTerraplanagem1 from '../../assets/imagensSobreEmpresa/EquipamentosTerraplanagem1.jpeg'
import EquipamentosTerraplanagem2 from '../../assets/imagensSobreEmpresa/EquipamentosTerraplanagem2.jpeg'
import EquipamentosTerraplanagem3 from '../../assets/imagensSobreEmpresa/EquipamentosTerraplanagem3.jpeg'
import terraplanagem1 from '../../assets/imagensSobreEmpresa/terraplanagem1.jpg'
import terraplanagem2 from '../../assets/imagensSobreEmpresa/terraplanagem2.jpg'
import terraplanagem3 from '../../assets/imagensSobreEmpresa/terraplanagem3.jpg'
import caminhaocarregado from '../../assets/imagensObras/caminhaocarregado.jpeg'
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