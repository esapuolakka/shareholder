import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; // Burger icon
import CloseIcon from "@mui/icons-material/Close"; // X icon
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

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
    <AppBar className={`${styles.navbar} ${styles.isFixedTop}`}>
      <Toolbar className={styles.navbar}>
        <Box className={styles.navbarBrand}>
          <Link to="/">
            <img
              src="/sharevault.png"
              alt="Logo"
              className={styles.navbarLogo}
            />
          </Link>
        </Box>
        {/* Desktop menu */}
        <Box
          sx={{ display: { xs: "none", md: "flex" } }}
          className={styles.navbarMenu}
        >
          {pages.map((page) => (
            <Link key={page.label} to={page.path} className={styles.navbarItem}>
              {page.label}
            </Link>
          ))}
        </Box>

        {/* Mobile menu */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={isMenuOpen ? handleMenuClose : handleMenuOpen}
            className={styles.navbarBurger}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Box>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          sx={{
            "& .MuiPaper-root": {
              boxShadow: "none",
              width: "100%",
              borderRadius: "1px",
            },
            "& .MuiList-root": {
              paddingTop: "0px",
              paddingBottom: "0px",
              width: "100%",
            },
          }}
          className={styles.navbarMobileMenu}
        >
          {pages.map((page) => (
            <MenuItem
              key={page.label}
              onClick={handleMenuClose}
              component={Link}
              to={page.path}
              className={styles.navbarItemMobile}
            >
              {page.label}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
