import React from "react";
import { menuItems } from "./menuItems";
import "./navbar.css";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { IconButton, Link, Typography, AppBar, Toolbar } from "@mui/material";
import myImage from "../../media-files/myImage.JPG";
import logo from "../../media-files/myLogo4.svg";
import useMediaQuery from "@mui/material/useMediaQuery";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Navbar = (props) => {
  const { theme, setTheme } = props;
  const isWebView = useMediaQuery("(min-width:600px)");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
        sx={{ marginLeft: 2, marginRight: 2, marginTop: -3 }}
      >
        {icon}
      </IconButton>
    );
  };

  // const mobileNavBar = (
  //   <>
  //   <Button
  //       id="basic-button"
  //       aria-controls={open ? 'basic-menu' : undefined}
  //       aria-haspopup="true"
  //       aria-expanded={open ? 'true' : undefined}
  //       onClick={handleClick}
  //     >
  //       Dashboard
  //       </Button>
  //   <Menu
  //       id="basic-menu"
  //       anchorEl={anchorEl}
  //       open={open}
  //       onClose={handleClose}
  //       MenuListProps={{
  //         'aria-labelledby': 'basic-button',
  //       }}
  //     >
  //       <MenuItem onClick={handleClose}>Profile</MenuItem>
  //       <MenuItem onClick={handleClose}>My account</MenuItem>
  //       <MenuItem onClick={handleClose}>Logout</MenuItem>
  //     </Menu>
  //     </>
  // )

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
        <Link href="#landing" sx={{ flex: 1 }}>
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
    </AppBar>
  );
};

export default Navbar;
