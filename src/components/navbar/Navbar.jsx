import React from "react";
import { menuItems } from "./menuItems";
import "./navbar.css";

const Navbar = (props) => {
  // TODO: implement switch between light and dark mode
  const { theme, setTheme } = props;
  return (
    <div className="NavbarItems">
      <div id="logo">Rue</div>
      <div id="items">
        {menuItems.map((item, index) => {
          return (
            <a key={index} className={item.cName} href={item.url}>
              {item.title}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
