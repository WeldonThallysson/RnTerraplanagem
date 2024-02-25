import { Box } from "@mui/material";
import styled from "styled-components";

export const ContainerPrincipalNossosServicos = styled(Box)`
    display: flex;
    flex-direction: column;
    margin: 0 0 55px 0;
    @media (max-width: 550px){
      display: flex;
      justify-content: center;
      align-items: center;
    }
`
export const ContainerSubNossosServicos = styled(Box)`
     display: flex;
     flex-direction: row; 
`
export const ContainerLineNossosServicos = styled(Box)`
    display: flex;
    margin: 65px 15px;
    @media (max-width: 900px){
      display: none,
    }
`

export const ContainerNossosServicos = styled(Box)`
      display: flex;
      margin: 42px 0;
      flex-direction: column;
      @media (max-width: 900px) {
              margin: 30px,
      }        
`