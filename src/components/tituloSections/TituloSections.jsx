import { Typography,Box } from '@mui/material'
import React from 'react'
import './TituloSections.css'


const TituloSections = ({titulos,}) => {
  return (
    <Box id='caixa-geral-titulos'>
        <Typography id='titulos-sections' component={"h2"}>
           {titulos}
        </Typography>
        <Box id="traco">

        </Box>
    </Box>
  )
}

export default TituloSections