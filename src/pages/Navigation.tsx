import { NavLink } from "react-router-dom";
import "./Navigation.scss";
import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setDrawerOpen(open);
    };

  return (
    <div className="navigation">
      <Button className="hamburger-btn" onClick={toggleDrawer(true)}>
        <FontAwesomeIcon icon={faBars} size="xl" />
      </Button>
      <NavLink to={"/"}>
        <div className="title">
          <span className="title">TF2 Hub</span>
          <img
            src="/img/logo_small.png"
            className="padding-left: 1rem; height: 50px"
          />
        </div>
      </NavLink>
      <div className="nav-items">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/cleantf2"}>CleanTF2</NavLink>
        <NavLink to={"/trashcan"}>Trashcan</NavLink>
        <a href="https://github.com/sponsors/theaswanson" target="_blank">
          Become a Sponsor
        </a>
      </div>
      <div className="spacer"></div>
      <Drawer
        className="mobile-nav"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <NavLink to={"/"}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>
            </NavLink>
            <NavLink to={"/cleantf2"}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="CleanTF2" />
                </ListItemButton>
              </ListItem>
            </NavLink>
            <NavLink to={"/trashcan"}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Trashcan" />
                </ListItemButton>
              </ListItem>
            </NavLink>
          </List>
          <Divider />
          <List>
            <a href="https://github.com/sponsors/theaswanson" target="_blank">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Become a Sponsor" />
                </ListItemButton>
              </ListItem>
            </a>
          </List>
        </Box>
      </Drawer>
    </div>
  );
}

export default Navigation;
