import React from "react";
import { menuItems } from "./menuItems";
import "./navbar.css";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import {
  IconButton,
  Link,
  Typography,
  AppBar,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../media-files/myLogo4.svg";
import { useState, useEffect } from "react";

const Navbar = (props) => {
  const { theme, setTheme } = props;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const themeMui = useTheme();
  const isSmallScreen = useMediaQuery(themeMui.breakpoints.down("md"));

  useEffect(() => {
    if (!isSmallScreen) {
      setDrawerOpen(false); // Close the drawer on larger screens
    }
  }, [isSmallScreen]);

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const ModeIcon = ({ theme }) => {
    const icon =
      theme === "light" ? (
        <DarkModeIcon sx={{ color: "#000" }} />
      ) : (
        <LightModeIcon color="secondary" />
      );
    return (
      <IconButton
        color="secondary"
        onClick={toggleTheme}
        sx={{ marginLeft: 2, marginRight: 2 }}
      >
        {icon}
      </IconButton>
    );
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        enableColorOnDark={true}
        elevation={0}
        sx={{
          display: "flex",
          backdropFilter: "blur(12px)",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? "rgba(209, 250, 229, 0.88)"
              : "rgba(13, 59, 46, 0.88)",
          borderBottom: (theme) =>
            `1px solid ${
              theme.palette.mode === "light"
                ? "rgba(16, 185, 129, 0.2)"
                : "rgba(52, 211, 153, 0.15)"
            }`,
        }}
      >
        <div>
          {isSmallScreen ? (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Link href="#landing" sx={{ flex: 1 }}>
                <img id="image" src={logo} height={60} width={80} />
              </Link>
              <ModeIcon style={{ padding: "20px" }} theme={theme} />
              <IconButton
                color="inherit"
                onClick={handleDrawerOpen}
                sx={{ marginRight: 2 }}
              >
                <MenuIcon />
              </IconButton>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              <Link href="#landing" sx={{ flex: 1 }}>
                <img id="image" src={logo} height={70} width={150} />
              </Link>
              {menuItems.map((item, index) => {
                return (
                  <Link
                    key={index}
                    className={item.cName}
                    href={item.url}
                    color="inherit"
                    underline="none"
                  >
                    <Typography
                      color="text"
                      sx={{ marginRight: 6, marginLeft: 6 }}
                      variant="h6"
                      fontSize={14}
                    >
                      {item.title}
                    </Typography>
                  </Link>
                );
              })}
              <ModeIcon theme={theme} />
            </div>
          )}
        </div>
      </AppBar>
      {isSmallScreen && (
        <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
          <List>
            {menuItems.map((item, index) => (
              <ListItem
                key={index}
                button
                onClick={handleDrawerClose}
                component="a"
                href={item.url}
              >
                <ListItemText primary={item.title} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      )}
    </>
  );
};

export default Navbar;
