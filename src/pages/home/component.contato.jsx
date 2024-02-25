import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React, { useContext } from 'react'
import LineHorizontalComponent from '../../components/LineHorizontal'
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useForm } from 'react-hook-form';
import { ContextGeral } from '../../contexts/ContextGeral';
import { ContainerConteudoFormasContato, ContainerFormasDeContato, ContainerLineContato, ContainerListaFormasDeContato, ContainerPrincipalContato, ContainerTituloContato, ContainerTituloFormasContato, FormaContatoEmail, FormaContatoInstagram, FormaContatoLocalizacao, FormaContatoTelefone, SubTituloContato, TituloContato, TituloFormularioContato } from '../../styles/home/componente.contato.styled';

function ComponentContato({background,height}) {

  const {sendContatoEmail} = useContext(ContextGeral)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()


  const onSubmit = (data) => { 
    sendContatoEmail(data)
  }
  return (
    <ContainerPrincipalContato background={background} height={height}  >
        <Grid
          sx={{ display: "flex", flexDirection: "column" }}
          container
          xs={10}
          sm={6}
          md={5}
          lg={5}
          xl={5}
        > 

          <ContainerTituloContato >
            <TituloFormularioContato>
                  Entre em Contato
            </TituloFormularioContato>
          </ContainerTituloContato>
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <Grid item sx={{ display: "flex", gap: 2 }}>
              <TextField
                {...register("Nome")}
                label="Nome"
                variant="filled"
                fullWidth
                sx={{ color: "white", background: "white" }}
              />
              <TextField
                 {...register("Telefone")}
                label="Telefone"
                variant="filled"
                fullWidth
                sx={{ color: "white", background: "white" }}
              />
            </Grid>

            <Grid item sx={{ display: "flex", margin: "1rem 0" }}>
              <TextField
                id="filled-basic"
                {...register("Email")}
                label="Email"
                fullWidth
                variant="filled"
                sx={{ color: "white", background: "white" }}
              />
            </Grid>
            <Grid item sx={{ display: "flex" }}>
              <TextField
               {...register("Mensagem")}
                id="outlined-multiline-flexible"
                label="Mensagem"
                multiline
                fullWidth
                sx={{ color: "white", background: "white" }}
                variant="filled"
                maxRows={3}
              />
            </Grid>
            <Grid
              item
              sx={{ display: "flex", width: "100%", margin: "1rem 0" }}
            >
              <Button
                sx={{
                  display: "flex",
                  width: "100%",
                  background: "#141414",
                  color: "white",
                  "&:hover":{
                    background: "#191919",
                  }
                }}
                type="submit"
              >
                Enviar
              </Button>
            </Grid>
          </form>
        </Grid>
        <ContainerFormasDeContato >
          <ContainerConteudoFormasContato  >
            <ContainerTituloFormasContato   >
              <TituloContato >
                Entre em Contato
              </TituloContato>

              <ContainerLineContato>
                <LineHorizontalComponent
                  width={"300px"}
                  height={"5px"}
                  background={"white"}
                  lineWidthXl={"250px"}
                  lineWidthLg={"150px"}
                  lineWidthMd={"50px"}
                />
              </ContainerLineContato>
             
            </ContainerTituloFormasContato>

            <SubTituloContato   >
              Dúvidas, reclamações ou sugestões?
            </SubTituloContato>
          </ContainerConteudoFormasContato>

          <ContainerListaFormasDeContato>
            <FormaContatoTelefone>
              <LocalPhoneIcon /> 48 99966-8246
            </FormaContatoTelefone>
            <FormaContatoInstagram >
              <InstagramIcon /> @rnterraplanagem
            </FormaContatoInstagram>
            <FormaContatoEmail >
              <MailIcon /> 48 99966-8246
            </FormaContatoEmail>
            <FormaContatoLocalizacao>
              <LocationOnIcon /> Sombrio - SC
            </FormaContatoLocalizacao>
          </ContainerListaFormasDeContato>
        </ContainerFormasDeContato>
      </ContainerPrincipalContato>
  )
}

export default ComponentContato