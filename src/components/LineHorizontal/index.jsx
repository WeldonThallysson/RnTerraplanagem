import { Box } from '@mui/material'
import React from 'react'

function LineHorizontalComponent({width,height,borderRadius,background}) {
  return (
    <Box sx={{width: width, height: height, borderRadius: borderRadius, background: background}}/>
  )
}

export default LineHorizontalComponent