import React from "react";
import { menuItems } from "./menuItems";
import "./navbar.css";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { IconButton } from "@mui/material";

const Navbar = (props) => {
  const { theme, setTheme } = props;

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const ModeIcon = ({ theme }) => {
    return theme === "light" ? (
      <LightModeIcon color="secondary" />
    ) : (
      <DarkModeIcon color="secondary" />
    );
  };

  return (
    <div className="NavbarItems">
      <div id="logo" />
      <div id="items">
        {menuItems.map((item, index) => {
          return (
            <a key={index} className={item.cName} href={item.url}>
              {item.title}
            </a>
          );
        })}
      </div>
      <IconButton color="primary" onClick={toggleTheme}>
        <ModeIcon theme={theme} />
      </IconButton>
    </div>
  );
};

export default Navbar;
