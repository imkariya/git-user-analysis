import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import "./navbar.css";

const NavBarComponent = () => {
  const [state, setState] = useState({
    isActive: false,
  });
  useEffect(() => {
    if (window.location.pathname) {
      const isActive = window.location.pathname.split("/")[1];
      setState((prevState) => {
        return {
          ...prevState,
          isActive,
        };
      });
    }
  }, []);
  const handleClick = (active) => {
    setState((prevState) => {
      return {
        ...prevState,
        isActive: active,
      };
    });
  };
  return (
    <>
      <MenuList className="navbar-box">
        <Link to="/git-user-detail">
          <MenuItem
            id="nav-home"
            className={classNames({
              active:
                state.isActive === "" || state.isActive === "git-user-detail",
              statice: !(
                state.isActive === "" || state.isActive === "git-user-detail"
              ),
            })}
            alt="nav-home-button"
            onClick={() => handleClick("git-user-detail")}
          >
            User
          </MenuItem>
        </Link>
        <Link to="/git-user-repos">
          <MenuItem
            id="nav-content"
            className={classNames({
              active: state.isActive === "git-user-repos",
              statice: !(state.isActive === "git-user-repos"),
            })}
            alt="nav-content-button"
            onClick={() => handleClick("git-user-repos")}
          >
            Repos
          </MenuItem>
        </Link>
      </MenuList>
    </>
  );
};

export default NavBarComponent;
