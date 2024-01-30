import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Logo from "../../assets/Logo.png";
import "./Header.css";
import { Link } from "react-scroll";
import { Link as Linked } from "react-router-dom";
const drawerWidth = 240;
const navItems = [
  {
    id: 1,
    offset: -600,
    label: "Home",
    pathRoute: "/",
  },
  {
    id: 2,
    offset: -300,
    label: "Empresa",
    pathRoute: "/Empresa",
  },
  {
    id: 3,
    offset: 200,
    pathRoute: "/obras",
    label: "Obras",
  },

  {
    id: 4,
    offset: 200,
    pathRoute: "/servicos",
    label: "Serviços",
  },
  {
    id: 5,
    offset: 200,
    pathRoute: "/trabalheconosco",
    label: "Trabalhe Conosco",
  },
];

const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton sx={{ textAlign: "center", fontSize: "10px" }}>
              <Button sx={{ color: "#141414" }} href={item.pathRoute}>
                <ListItemText primary={item.label} />
              </Button>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        sx={{ background: "#141414", margin: "0", padding: "0 ", width: "100%"  }}
        component="nav"
      >
        <Toolbar sx={{ margin: "0" }}>
          <Box sx={{ 
            display: 
            { 
            md: "none", 
            sm: "flex", 
            width: "100%" 
             } }}>
            <a href="/">
              <img
                src={Logo}
                alt="Imagem da logo"
                style={{
                  width: "130px",
                }}
              />
            </a>
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 0, display: { md: "none" }, }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            sx={{
              flexGrow: 1,
              display: { md: "flex", xs: "none" },
              justifyContent: "space-between",
              alignItems: "center",
      
              
            }}
          >
            <a href="/">
              <img
                src={Logo}
                alt="Imagem da logo"
                style={{
                  width: "150px",
                }}
              />
            </a>
          </Box>
          <Box sx={{ 
            display: { xs: "none", sm: "none", md: "flex"},
             
             justifyContent: "center",
             alignItems: "center"
             
             }}>
            {navItems.map((item) => (
              <>
                {
                  <Button key={item.id} href={item.pathRoute}>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        color: "#fff",
                        "@media (max-width: 1080px)": {
                          fontSize: "12px",
                        },
                        "@media (max-width: 900px)": {
                          fontSize: "11px",
                        },
                      }}
                    >
                      {" "}
                      {item.label}{" "}
                    </Typography>
                  </Button>
                }
              </>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { md: "block", lg: "none" },
            
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Header;
