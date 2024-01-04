import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import SobreImg from '../../assets/sobre.jpg'
import {useNavigate} from 'react-router-dom'
export default function ComponentSobre() {
  const navigate = useNavigate()
  return (
    <Box display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"} gap={10} margin={"0 40px"} > 
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} >
           <img src={SobreImg} width={560} height={330} style={{objectFit:'cover',borderRadius: 4}}/>     
        </Box>
        <Box display={"flex"} justifyContent={"center"}  gap={1.8} flexDirection={"column"}>
            <Typography sx={{color: "white",fontSize: 14}}>A RN Terraplanagem é uma empresa especializada em terraplanagem, desempenhando um papel fundamental no início de diversas construções. A terraplanagem consiste no nivelamento e modelagem do terreno, preparando-o para a execução de obras. Através de maquinário pesado e técnicas específicas, nossa equipe realiza a escavação, corte, aterro e compactação do solo, garantindo uma base sólida para projetos residenciais, comerciais e industriais.</Typography> 
            <Typography sx={{color: "white", fontSize: 14}}>Além da terraplanagem, a RN Terraplanagem se destaca na execução de obras e concretagem. Obras compreendem a construção civil em si, abrangendo desde a fundação até a entrega do projeto final. Nossa equipe qualificada e experiente gerencia cada etapa, assegurando eficiência e qualidade. A concretagem, por sua vez, envolve o despejo de concreto em moldes estruturais, conferindo resistência e durabilidade às edificações. Trabalhamos para proporcionar soluções integradas, atendendo às demandas de nossos clientes com excelência e comprometimento.</Typography>    
            <Box>
                <Button sx={{color: "crimson"}} onClick={() => {navigate("/empresa")}}>Conhecer mais...</Button>   
            </Box>      
        </Box>
    </Box>
  )
}
