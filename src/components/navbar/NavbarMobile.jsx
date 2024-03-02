import React from "react";
import "./navbar.css";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { IconButton, Link, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../media-files/myLogo4.svg";
import { useState, useEffect } from "react";

const NavbarMobile = (props) => {
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

  //   const handleDrawerClose = () => {
  //     setDrawerOpen(false);
  //   };

  return (
    <div>
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
        <IconButton color="inherit" onClick={handleDrawerOpen} sx={{ marginRight: 2 }}>
          <MenuIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default NavbarMobile;
