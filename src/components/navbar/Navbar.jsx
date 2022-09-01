import React, { Component } from "react";
import { menuItems } from "./menuItems";
import "./navbar.css";

class Navbar extends Component {
  render() {
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
      </div>
    );
  }
}

export default Navbar;
