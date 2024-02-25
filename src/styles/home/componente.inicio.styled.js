import styled from "styled-components";
import { Box } from "@mui/material";

export const ContainerPrincipalQuemSomos = styled(Box)`
  display: flex;
  justify-content: center;
  flex-direction: row;
  height: 500px;
  gap: 1;

  @media (max-width: 1080px) {
    flex-direction: column;
    height: 700px;
    justify-content: flex-start;
    align-items: center;
    margin-top: 10px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    height: 700px;
    justify-content: flex-start;
    align-items: center;
  }

  @media (max-width: 550px) {
    flex-direction: column;
    height: 100%;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 4;
  }
`;

export const ContainerLine = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 60px 10px;
  @media (max-width: 1080px) {
    margin: 15px 5px;
    display: none;
  }
  @media (max-width: 900px) {
    margin: 15px 15px;
    display: none;
  }
`;

export const ContainerQuemSomos = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-top: 40px;
  gap: 1;
  @media (max-width: 1540px) {
    width: 45%;
  }
  @media (max-width: 1080px) {
    margin-top: 20px;
    width: 85%;
  }
  @media (max-width: 900px) {
    margin-top: 20px;
    width: 90%;
  }
`;
export const TituloQuemSomos = styled(Box)`
  font-family: Bungee;
  font-size: 35px;
  @media (max-width: 1540px) {
    font-size: 32px;
  }
  @media (max-width: 900px) {
    font-size: 28px;
  }
`;

export const SubTituloQuemSomos = styled(Box)`
  font-family: Montserrat;
  font-size: 25px;
  @media (max-width: 1540px) {
    font-size: 20px;
  }
  @media (max-width: 550px) {
    font-size: 18px;
  }
  @media (max-width: 280px) {
    font-size: 16px;
  }
`;

export const DescricaoQuemSomos = styled(Box)`
      font-family: Montserrat;
      font-size: 18px;
      text-align: justify;
      letter-spacing: -0.06rem;
      @media (max-width: 1540px) {
        font-size: 16px;
        text-align: justify;
       }
      @media (max-width: 550px) {
        font-size: 12px;
        text-align: left;
       }
`;
