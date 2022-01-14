/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

// Dependencies
import { useState } from "react";

// Assets
import lightThemeImage from "../../assets/icon-sun.svg";
import darkThemeImage from "../../assets/icon-moon.svg";
import avatarImage from "../../assets/image-avatar.jpg";
import logo from "../../assets/logo.svg";

// Styles
import "./Header.css";

const Header = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <header className="header">
      <nav className="header__container">
        <div className="header__logo-container">
          <img
            className="header__logo"
            src={logo}
            alt="Logo, click to go to homepage"
          />
          <div className="header__logo-background"></div>
        </div>
        <div className="header__theme-container">
          <img
            className="header__theme"
            src={darkTheme === true ? lightThemeImage : darkThemeImage}
            alt="Theme color switch."
            onClick={() => {
              setDarkTheme(!darkTheme);
            }}
          />
        </div>
        <div className="header__avatar-container">
          <img
            className="header__avatar"
            src={avatarImage}
            alt="User avatar, click to go to your profile."
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
