/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import logo from "./assets/logo.svg";
import lightThemeImage from "./assets/icon-sun.svg";
import darkThemeImage from "./assets/icon-moon.svg";
import avatarImage from "./assets/image-avatar.jpg";
import { useState } from "react";

const Header = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <header id="header">
      <nav>
        <ul>
          <li className="logo-container">
            <img id="logo" src={logo} alt="Logo, click to go to homepage" />
            <div className="logo-background"></div>
          </li>
          <li className="theme-switch-container">
            <img
              src={darkTheme === true ? lightThemeImage : darkThemeImage}
              alt="Theme color switch."
              onClick={() => {
                setDarkTheme(!darkTheme);
              }}
            />
          </li>
          <li className="avatar-container">
            <img
              id="avatar"
              src={avatarImage}
              alt="User avatar, click to go to your profile."
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
