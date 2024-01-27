import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LogoUpStudio from "../../assets/LogoUpStudio.png";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "flex-start",
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  "@media all": {
    minHeight: 128,
  },
}));

const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1, } }>

      <AppBar position="static" sx={{ backgroundColor: " #141414",  }}>

        <StyledToolbar sx={{ display: "flex", justifyContent: "center", alignItems:'flex-end',marginTop:'-70px' }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
            
          >  
           <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{ flexGrow: 1, alignSelf: "flex-start", fontSize: "10px", marginBottom:'-47px' }}
            >
              
              Desenvolvido por
            </Typography>
            <img
              style={{ width: "70px", marginBottom: "-20px" }}
              src={LogoUpStudio}
              alt="Logo da agência que criou o site, em cor laranja e branco"
              
            />
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{ flexGrow: 1, alignSelf: "flex-end", fontSize: "10px" }}
            >
              
              © Copyright RN Terraplanagem
            </Typography>
          </Box>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
};

export default Footer;
