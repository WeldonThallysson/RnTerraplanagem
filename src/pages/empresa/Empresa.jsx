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
import SobreEmpresa from '../../assets/parallaxImages/SobreEmpresa.jpg'
import ParallaxFooter from '../../components/ParallaxFooter'


const Empresa = () => {


   const data = {
     dadosSobre: [  
      {
       id: 1,
       img: sobre1
      },
      {
        id: 2,
        img: sobre2 
      } ,
      {
        id: 3,
        img: sobre3 
      }
    
    ],
    dadosEquipamentos: [  
     
      {
       id: 1,
       img: EquipamentosTerraplanagem1 
      },
      {
        id: 2,
        img: EquipamentosTerraplanagem2 
      } ,
      {
        id: 3,
        img: EquipamentosTerraplanagem3 
      }
    
    ],
    dadosCarroChefe: [  
     
      {
       id: 1,
       img: terraplanagem1 
      },
      {
        id: 2,
        img: terraplanagem2 
      } ,
      {
        id: 3,
        img: terraplanagem3 
      }
    
    ]
   }


  return (
    <Box sx={{display: "flex", height:'100%',flexDirection: "column"}}>
     <ParallaxHeader titulo={"Sobre nós"} backgroundParallax={SobreEmpresa} backgroundPosition={"auto"}/>

      <Grid container spacing={2} p={"35px 40px"} gap={8}>
         <Grid item xs={15} md={12} lg={15} xl={10} display={"flex"} flexDirection={"column"} gap={2}>
           <Typography sx={{ fontSize: "24px", fontFamily: "Bungee", fontWeight: "bold" }}> A RN Terraplanagem</Typography>
           <Typography sx={{ fontSize: "18px" , fontFamily: "Montserrat", textAlign:"justify", "@media (max-width: 550px)": {
                fontSize: "12px" , 
           }}}>A RN Terraplanagem destaca-se como referência na prestação de serviços especializados, oferecendo soluções completas em terraplanagem, drenagem, aluguel de equipamentos, loteamento, aterro e calçamento de ruas.
            Com uma equipe qualificada e equipamentos de última geração, garantimos eficiência e precisão em cada projeto. A terraplanagem, essencial para o preparo adequado do terreno, é realizada com maestria, assegurando bases sólidas para construções futuras. </Typography>
            <Grid container sx={{display: "flex", gap: 2}}>
              {data.dadosSobre.map((item) => (
                <Grid xs={15} md={3.8} lg={3.9} xl={3.9} >
                 <img src={item.img} style={{width: "100%", height: "280px", objectFit: "cover",borderRadius: 5}}/>
                </Grid>
              ))}
            </Grid>
        
         </Grid>

         <Grid item xs={12} md={12} lg={15} xl={10} display={"flex"} flexDirection={"column"} gap={2}>
           <Typography sx={{ fontSize: "24px", fontFamily: "Bungee", fontWeight: "bold" }}> Equipamentos de Qualidade </Typography>
           <Typography sx={{ fontSize: "18px" , fontFamily: "Montserrat", textAlign:"justify","@media (max-width: 550px)": {
                fontSize: "12px" , 
           }}}>A RN Terraplanagem destaca-se pela utilização de uma frota diversificada e moderna de equipamentos para oferecer serviços eficientes. Caminhões basculantes facilitam o transporte de materiais, enquanto escavadeiras realizam escavações e remoções de solo. Tratores de esteira e pneus são empregados na nivelamento do terreno, e retroescavadeiras atuam em áreas mais restritas. Compactadores garantem a estabilidade do solo, e motoniveladoras proporcionam superfícies planas para construções. A empresa investe em tecnologia de ponta e manutenção regular para assegurar qualidade e segurança em cada projeto. </Typography>
            <Grid container sx={{display: "flex", gap: 2}}>
              {data.dadosEquipamentos.map((item) => (
                <Grid item xs={12} md={3.8}  lg={3.9} xl={3.9} >

                  <img src={item.img} style={{width: "100%", height: "280px", objectFit: "cover",borderRadius: 5}}/>
               </Grid>
          
              ))}
            </Grid>
        
         </Grid>

         <Grid item xs={12} md={12} lg={15} xl={10} display={"flex"} flexDirection={"column"} gap={2}>
           <Typography sx={{ fontSize: "24px", fontFamily: "Bungee", fontWeight: "bold" }}> Nosso Carro-Chefe</Typography>
           <Typography sx={{ fontSize: "18px" , fontFamily: "Montserrat", textAlign:"justify",
          "@media (max-width: 550px)": {
            fontSize: "12px" , 
       }}}>
             O ponto forte que impulsiona a RN Terraplanagem para o sucesso é a excelência em serviços de terraplanagem, tornando-se o carro-chefe da empresa. Especializada na preparação de terrenos, a empresa utiliza uma frota de equipamentos de última geração para realizar com precisão e eficiência atividades como escavação, nivelamento e movimentação de solo. </Typography>
             <Grid container sx={{display: "flex", gap: 2}}>
              {data.dadosCarroChefe.map((item) => (
                  <Grid item xs={12} md={3.8} lg={3.9} xl={3.9} >
                    <img src={item.img} style={{width: "100%",height: "280px", objectFit: "cover",borderRadius: 5}}/>
                  </Grid>
              ))}
            </Grid>
        
         </Grid>
      
          
          
      </Grid>
      <ParallaxFooter titulo={""} height={"150px"} backgroundParallax={SobreEmpresa} backgroundPosition={"auto"}/>
    </Box>
  )
}

export default Empresa