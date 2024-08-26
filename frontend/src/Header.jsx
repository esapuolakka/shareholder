import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; // switched to svg
import { Link } from "react-router-dom";
import "./reset.css";
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
          <img
            src="/phz.png"
            alt="PHZ Full Stack Logo"
            className="navbar__logo"
          />
        </Box>
        {/* descktop */}
        <Box
          sx={{ display: { xs: "none", md: "flex" } }}
          className="navbar-menu"
        >
          {pages.map((page) => (
            <a
              key={page.label}
              href={`#${page.label.toLowerCase().replace(/ /g, "-")}`}
              className="navbar-item"
            >
              {page.label}
            </a>
          ))}
          {/*  <Link
//          key={page.label}
//          to={page.path}
//          className="navbar-item"
//           >
//          {page.label}
//          </Link> */}
        </Box>
        {/* mobile view */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
            className="navbar-burger"
          >
            <svg
              width="25"
              height="28" // height, including lineheight
              viewBox="0 0 30 15" // ViewBox for relevant measures
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="0" width="30" height="2" fill="#ed692f" /> {/* First */}
              <rect y="7" width="30" height="2" fill="#ed692f" /> {/* Second */}
              <rect y="14" width="30" height="2" fill="#ed692f" /> {/* Third */}
            </svg>
          </IconButton>
        </Box>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          container={document.body} // Määrittää, että Menu renderöidään suoraan body-elementtiin
          sx={{
            display: { xs: "block", md: "none" },
          }}
          className="navbar-menu"
        >
          {pages.map((page) => (
            <MenuItem
              key={page.label}
              onClick={handleMenuClose}
              component="a"
              href={`#${page.label.toLowerCase().replace(/ /g, "-")}`}
              sx={{
                width: "100%", // Varmistaa, että jokainen MenuItem täyttää koko valikon leveyden
              }}
              className="navbar-item"
            >
              {page.label}
            </MenuItem>
            //            <MenuItem
            //         key={page.label}
            //         onClick={handleMenuClose}
            //         component={Link}
            //         to={page.path}
            //         className="navbar-item"
            //       >
            //         {page.label}
            //       </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
