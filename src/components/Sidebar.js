import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import { NavLink, useLocation } from "react-router-dom";
import {
  Avatar,
  Box,
  Collapse,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { Close, ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import GasMeterIcon from "@mui/icons-material/GasMeter";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import Menu from "@mui/icons-material/Menu";

function Sidebar({ openSidebar, setOpenSidebar, linkStyle }) {
  const [open, setOpen] = useState(true);
  const location = useLocation();

  const linkStyles2 = (path) => {
    return {
      backgroundColor: location.pathname === path ? "#333" : null,
    };
  };

  const handleCollapse = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Drawer
        anchor="left"
        open={openSidebar}
        onClose={() => setOpenSidebar(false)}
      >
        <Box role="presentation" width="300px">
          <Box
            display="flex"
            justifyContent="flex-end"
            width={270}
            height={50}
            paddingRight={2}
          >
            <IconButton edge="end">
              <Close />
            </IconButton>
            {/* <Avatar />

            <Typography>Frebby Tech Consults</Typography> */}
          </Box>
          <List
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Shop
              </ListSubheader>
            }
          >
            <ListItemButton>
              <ListItemIcon>
                <GasMeterIcon />
              </ListItemIcon>

              <NavLink to="/" style={linkStyle}>
                DASHBOARD
              </NavLink>
            </ListItemButton>

            <ListItemButton onClick={handleCollapse}>
              <ListItemIcon>
                <AirplaneTicketIcon />
              </ListItemIcon>

              <NavLink to="evoucher" style={linkStyle}>
                E-VOUCHERS
              </NavLink>
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Starred" />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton>
              <ListItemIcon>
                <GasMeterIcon />
              </ListItemIcon>

              <NavLink to="prepaid" style={linkStyle}>
                PREPAID UNITS
              </NavLink>
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <CreditScoreIcon />
              </ListItemIcon>
              <NavLink to="airtime" style={linkStyle}>
                BULK TRANSFERS
              </NavLink>
            </ListItemButton>
            <Divider />
          </List>
        </Box>
      </Drawer>
    </div>
  );
}

export default Sidebar;

Sidebar.proptype = {
  openSidebar: PropTypes.bool,
  setOpenSidebar: PropTypes.func,
};
