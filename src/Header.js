import React, { useState } from "react";
import "./Header.css";

import Logo from "./Logo.png";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";
import ReorderIcon from "@material-ui/icons/Reorder";
import { Avatar } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <ReorderIcon className="header__icon" fontSize="large" />
        </IconButton>
        <Link to="/">
          <img className="header__logo" src={Logo} alt="" />
        </Link>
      </div>
      <div className="header__input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="Search"
          type="text"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>
      <div className="header__icons">
        <IconButton>
          <VideoCallIcon className="header__icon" fontSize="large" />
        </IconButton>
        <IconButton>
          <AppsIcon className="header__icon" fontSize="large" />
        </IconButton>
        <IconButton>
          <NotificationsIcon className="header__icon" fontSize="large" />
        </IconButton>
        <Avatar className="header__avatar" alt="Kacper H" src="" />
      </div>
    </div>
  );
}

export default Header;
