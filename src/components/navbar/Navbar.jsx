import React from "react";
import { menuItems } from "./menuItems";
import "./navbar.css";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { IconButton, Link, Typography, AppBar, Toolbar } from "@mui/material";

const Navbar = (props) => {
  const { theme, setTheme } = props;

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
        sx={{ marginLeft: 2, marginRight: 2, marginTop: -0.5 }}
      >
        {icon}
      </IconButton>
    );
  };

  return (
    <AppBar
      position="sticky"
      enableColorOnDark={true}
      elevation={0}
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.background.default
            : theme.palette.background.default,
      }}
    >
      <div id="items">
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
              >
                {item.title}
              </Typography>
            </Link>
          );
        })}

        <ModeIcon theme={theme} />
      </div>
    </AppBar>
  );
};

export default Navbar;
