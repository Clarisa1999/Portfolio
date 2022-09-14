import React from "react";
import { menuItems } from "./menuItems";
import "./navbar.css";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { IconButton, Link, Typography, AppBar, Toolbar } from "@mui/material";
import myImage from "../../media-files/myImage.JPG";
import logo from "../../media-files/myLogo4.svg";

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
        sx={{ marginLeft: 2, marginRight: 2, marginTop: -1 }}
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
        display: "flex",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.background.default
            : theme.palette.background.default,
      }}
    >
      <div id="items">
        <Link href="#landing" sx={{ flex: 0.98 }}>
          <img id="image" src={logo} height={50} width={200} />
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
                fontSize={16}
              >
                {item.title}
              </Typography>
            </Link>
          );
        })}

        <Link href="resume.pdf" underline="none" target="_blank">
          <Typography
            color="text.primary"
            sx={{ marginRight: 6, marginLeft: 6 }}
            variant="h6"
            fontSize={16}
          >
            Download Resume
          </Typography>
        </Link>

        <ModeIcon theme={theme} />
      </div>
    </AppBar>
  );
};

export default Navbar;
