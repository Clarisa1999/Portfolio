import React from "react";
import { menuItems } from "./menuItems";
import "./navbar.css";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { IconButton, Link, Typography, useMediaQuery, useTheme } from "@mui/material";
import logo from "../../media-files/myLogo4.svg";
import { useState, useEffect } from "react";

const NavbarDesktop = (props) => {
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

  //   const handleDrawerOpen = () => {
  //     setDrawerOpen(true);
  //   };

  //   const handleDrawerClose = () => {
  //     setDrawerOpen(false);
  //   };

  return (
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
      <Link href="resume.pdf" underline="none" target="_blank" color="inherit">
        <Typography
          color="text"
          sx={{ marginRight: 6, marginLeft: 6 }}
          variant="h6"
          fontSize={14}
        >
          Download Resume
        </Typography>
      </Link>
      <ModeIcon theme={theme} />
    </div>
  );
};

export default NavbarDesktop;
