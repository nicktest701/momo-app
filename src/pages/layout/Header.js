import React, { useState } from "react";
import Home from "@mui/icons-material/Home";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Stack,
  Button,
  Divider,
  Avatar,
} from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "../../components/Sidebar";

import logo from "../../assets/images/coat_of_arms.png";
import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [shadow, setShadow] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  window.onscroll = function (e) {
    if (window.scrollY > 2) {
      setShadow(`2px 3px 5px rgba(0,0,0,0.2)`);
    } else {
      setShadow(null);
    }
  };

  const goHome = () => {
    navigate("/", { replace: true });
  };

  const myLinkStyles = ({ isActive }) => {
    return {
      textDecoration: "none",
      backgroundColor: isActive ? "#333" : null,
      borderRadius: 4,
      color: isActive ? "#fff" : null,
      padding: isActive ? 10 : 2,
      width:'100%'
    };
  };

  return (
    <header style={{ zIndex: 20, boxShadow: shadow }}>
      <AppBar
        elevation={0}
        sx={{ justifyContent: "center" }}
        position="sticky"
        variant="elevation"
        color="transparent"
      >
        <Toolbar>
          <IconButton
            edge="start"
            size="large"
            color="inherit"
            onClick={goHome}
          >
            <Avatar src={logo} width={50} />
          </IconButton>
          <Typography
            variant="h5"
            sx={{ flexGrow: 1, cursor: "pointer" }}
            onClick={goHome}
          >
            FrebbyTech Consults
          </Typography>
          <Stack
            direction="row"
            spacing={5}
            sx={{ paddingRight: 10, display: { xs: "none", md: "block" } }}
          >
            <Button href="#evoucher" color="inherit">
              <NavLink to="evoucher" style={myLinkStyles}>
                E-Voucher &#38; pincodes
              </NavLink>
            </Button>
            <Button variant="text" color="inherit">
              <NavLink to="prepaid" style={myLinkStyles}>
                Prepaid units
              </NavLink>
            </Button>
            <Button variant="text" color="inherit">
              <NavLink to="airtime" style={myLinkStyles}>
                Bulk airtime
              </NavLink>
            </Button>
          </Stack>
          <Stack direction="row" sx={{ display: { xs: "none", lg: "block" } }}>
            <Button
              color="inherit"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              endIcon={<KeyboardArrowDownIcon />}
            >
              <Avatar />
            </Button>
            <Button variant="text" color="inherit">
              Log in
            </Button>
            <Button variant="text" color="inherit">
              Sign up
            </Button>
          </Stack>
          <Menu
            id="account-menu"
            MenuListProps={{
              "aria-labelledby": "account-menu",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <Divider />
            <MenuItem>Log Out</MenuItem>
          </Menu>
          <IconButton
            color="inherit"
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={() => setOpenSidebar(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Sidebar
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
        linkStyle={myLinkStyles}
      />
    </header>
  );
}

export default Header;
