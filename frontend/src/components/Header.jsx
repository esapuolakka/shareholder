import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; // Burger icon, switched to svg
import CloseIcon from "@mui/icons-material/Close"; // X icon
import { Link } from "react-router-dom";
import "./header.css";

const pages = [
  { label: "Osakasluettelo", path: "/osakasluettelo" },
  { label: "Osakenumerot", path: "/osakenumerot" },
  { label: "Merkintähistoria", path: "/merkintahistoria" },
  { label: "Osakkaiden tiedot", path: "/osakkaidentiedot" },
  { label: "Lisää uusi", path: "/lisaa-uusi" },
];

export default function HeaderNavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar className="navbar is-fixed-top">
      <Toolbar className="navbar">
        <Box className="navbar-brand">
          <Link to="/osakasluettelo">
            <img
              src="/phz.png"
              alt="PHZ Full Stack Logo"
              className="navbar__logo"
            />
          </Link>
        </Box>
        {/* desktop */}
        <Box
          sx={{ display: { xs: "none", md: "flex" } }}
          className="navbar-menu"
        >
          {pages.map((page) => (
            <Link key={page.label} to={page.path} className="navbar-item">
              {page.label}
            </Link>
          ))}
        </Box>

        {/* mobile view */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={isMenuOpen ? handleMenuClose : handleMenuOpen}
            className="navbar-burger"
          >
            {isMenuOpen ? (
              <CloseIcon /> // Display "X" icon
            ) : (
              <MenuIcon /> // Display burger icon
            )}
          </IconButton>
        </Box>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          sx={{
            "& .MuiPaper-root": {
              boxShadow: "none",
              width: "100vw",
              //marginTop: "0px",
              borderRadius: "1px",
            },
            "& .MuiList-root": {
              paddingTop: "0px",
              paddingBottom: "0px",
              width: "100vw",
            },
          }}
          className="navbar-mobile-menu"
        >
          {pages.map((page) => (
            <MenuItem
              key={page.label}
              onClick={handleMenuClose}
              component={Link}
              to={page.path}
              className="navbar-item"
            >
              {page.label}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
