import React from 'react'
import { Box, Button } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
function WhatsappButtonComponent() {
  return (
    <Box sx={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: "1000",
        transition: "0.3s ease-in-out",
        transform: "translateY(1)",
        "&:hover": {
           transition: "0.3s ease-in-out",
           transform: "translateY(-10px)",
      
        }
        }}> 
         <a href="https://api.whatsapp.com/send?phone=5548999668246&text=Olá gostaria de fazer um orçamento !" target="_blank" style={{
             display: "flex",
             justifyContent: "center",
             alignItems: "center",
             backgroundColor: "#00a078",
             color: "#fff",
             margin: "0px",
             padding: "12px",
             border: "none",
             textAlign: "center",
             borderRadius: "35px",
             cursor: "pointer",
             boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
             "&:hover": {
                transition: "0.3s ease-in-out",
                backgroundColor: "#017c5e",
           
             }
         }}>
            <WhatsAppIcon fontSize="large" />
         </a>

    </Box>
  )
}

export default WhatsappButtonComponent