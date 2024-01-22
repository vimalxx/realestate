import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Hidden,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import LogoutForm from "./LogoutForm";

const NavbarComponent = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "black" }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          onClick={handleDrawerOpen}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ flexGrow: 1, textDecoration: "none", color: "inherit" }}
        >
          <img
            src="favicon_io/favicon.ico"
            alt="Your Logo"
            width="30"
            height="30"
            sx={{ mr: 1 }}
          />
          REALTY KING
        </Typography>

        {/* Desktop Navbar Links */}
        <Hidden smDown>
          <nav style={{ display: "flex" }}>
            <Button
              component={Link}
              to="/"
              color="inherit"
              sx={{ fontWeight: "bold", mx: 1 }}
            >
              Home
            </Button>
            <Button
              component={Link}
              to="/property"
              color="inherit"
              sx={{ fontWeight: "bold", mx: 1 }}
            >
              Property
            </Button>
            <Button
              component={Link}
              to="/about"
              color="inherit"
              sx={{ fontWeight: "bold", mx: 1 }}
            >
              About
            </Button>
            <Button
              component={Link}
              to="/services"
              color="inherit"
              sx={{ fontWeight: "bold", mx: 1 }}
            >
              Services
            </Button>
            <Button
              component={Link}
              to="/contact"
              color="inherit"
              sx={{ fontWeight: "bold", mx: 1 }}
            >
              Contact
            </Button>
            <LoginForm />
            <LogoutForm />
          </nav>
        </Hidden>

        {/* Mobile Drawer */}
        <Hidden mdUp>
          <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
            <List>
              <ListItem
                button
                component={Link}
                to="/"
                onClick={handleDrawerClose}
              >
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/property"
                onClick={handleDrawerClose}
              >
                <ListItemText primary="Property" />
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/about"
                onClick={handleDrawerClose}
              >
                <ListItemText primary="About" />
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/services"
                onClick={handleDrawerClose}
              >
                <ListItemText primary="Services" />
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/contact"
                onClick={handleDrawerClose}
              >
                <ListItemText primary="Contact" />
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/profile"
                onClick={handleDrawerClose}
              >
                <ListItemText primary="Profile" />
              </ListItem>
              <LogoutForm />
            </List>
            <Divider />
            {/* Add additional Drawer items for login, logout, profile as needed */}
          </Drawer>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarComponent;
