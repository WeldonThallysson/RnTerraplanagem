import React from "react";
import { Box, Button, Typography } from "@mui/material";
import SobreImg from "../../assets/sobre_11zon.webp";
import { useNavigate } from "react-router-dom";

import LineHorizontalComponent from "../../components/LineHorizontal";
import { 
  ContainerPrincipalSobre,
  ContainerSubSobre,
  ContainerSobreNos,
  ContainerImgSobreNos,
  ContainerConteudoSobreNos,
  ContainerConteudoGeralSobreNos,
  TituloSobreNos,
  ContainerLineSobreNos,
  ContainerDescricaoSobreNos,
  DescricaoSobreNos

} from "../../styles/home/componente.sobre.styled";
export default function ComponentSobre() {
  const navigate = useNavigate();
  return (
    <ContainerPrincipalSobre>
      <ContainerSubSobre>
        <ContainerSobreNos>
          <ContainerImgSobreNos>
            <img
              src={SobreImg}
              style={{ 
                width: "100%",
                objectFit: "cover", 
                borderRadius: 4,
             }}
            />
          </ContainerImgSobreNos>
          
          <ContainerConteudoSobreNos>
            <ContainerConteudoGeralSobreNos  >
              <Box sx={{ display: "flex", margin: 0 }}>
                <TituloSobreNos>
                  Sobre Nós
                </TituloSobreNos>
              </Box>
              <ContainerLineSobreNos >
                <LineHorizontalComponent
                  width={"920px"}
                  height={"3px"}
                  borderRadius={"1px"}
                  background={"white"}
                  lineWidthXl={"590px"}
                  lineWidthLg={"340px"}
                  lineWidthMd={"440px"}
                  lineWidthSm={"200px"}
                  lineWidthXs={"180px"}
                  lineWidthXss={"130px"}
                  lineWidthXXss={"100px"}
                />
              </ContainerLineSobreNos>
            </ContainerConteudoGeralSobreNos>
            <ContainerDescricaoSobreNos>
              <DescricaoSobreNos>
                A RN Terraplanagem é uma empresa especializada em terraplanagem,
                desempenhando um papel fundamental no início de diversas
                construções. A terraplanagem consiste no nivelamento e modelagem
                do terreno, preparando-o para a execução de obras. Através de
                maquinário pesado e técnicas específicas, nossa equipe realiza a
                escavação, corte, aterro e compactação do solo, garantindo uma
                base sólida para projetos residenciais, comerciais e
                industriais.
              </DescricaoSobreNos>
              <DescricaoSobreNos >
                Além da terraplanagem, a RN Terraplanagem se destaca na execução
                de obras e concretagem. Obras compreendem a construção civil em
                si, abrangendo desde a fundação até a entrega do projeto final.
                Nossa equipe qualificada e experiente gerencia cada etapa,
                assegurando eficiência e qualidade. A concretagem, por sua vez,
                envolve o despejo de concreto em moldes estruturais, conferindo
                resistência e durabilidade às edificações. Trabalhamos para
                proporcionar soluções integradas, atendendo às demandas de
                nossos clientes com excelência e comprometimento.
              </DescricaoSobreNos>
            </ContainerDescricaoSobreNos>

            <Box>
              
              <Button
                sx={{ color: "crimson" }}
                onClick={() => {
                  navigate("/empresa");
                }}
              >
                Conhecer mais...
              </Button>
            </Box>
          </ContainerConteudoSobreNos>
        </ContainerSobreNos>
      </ContainerSubSobre>
    </ContainerPrincipalSobre>
  );
}
