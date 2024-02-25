import { Box } from '@mui/material'
import React from 'react'

function LineHorizontalComponent({width,height,borderRadius,background,lineWidthXl,lineWidthLg,lineWidthMd,lineWidthSm,lineWidthXs,lineWidthXss,lineWidthXXss}) {
  return (
    <Box sx={{
      width: width, 
      height: height,
      borderRadius: borderRadius,
      background: background,
      "@media (max-width: 1980px)":{
        width: width, 
       },
      "@media (max-width: 1540px)": {
         width: lineWidthXl
      },
      "@media (max-width: 1040px)": {
        width: lineWidthLg
      },
      "@media (max-width: 900px)": {
        width: lineWidthMd
      },
      "@media (max-width: 550px)": {
        width: lineWidthSm
      },
      "@media (max-width: 375px)": {
        width: lineWidthXs
      },
      "@media (max-width: 320px)": {
        width: lineWidthXss
      },
      "@media (max-width: 280px)": {
        width: lineWidthXXss
      }
    
    
    
    }}/>
  )
}

export default LineHorizontalComponent