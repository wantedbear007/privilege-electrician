import React from "react";
import styles from "./Header.module.css";
import HeaderButton from "./HeaderButtons";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <h1>Privilege Electrician</h1>
      <div className={styles.buttons}>
        <NavLink activeClassName={styles.activeLink} to="/home">
          <HeaderButton>Home</HeaderButton>
        </NavLink>
        <NavLink activeClassName={styles.activeLink} to="/about">
          <HeaderButton>About</HeaderButton>
        </NavLink>
        <NavLink activeClassName={styles.activeLink} to="/work">
          <HeaderButton>My Work</HeaderButton>
        </NavLink>
        <NavLink activeClassName={styles.activeLink} to="/services">
          <HeaderButton>Services</HeaderButton>
        </NavLink>
        <NavLink activeClassName={styles.activeLink} to="/contact">
          <HeaderButton>Contact</HeaderButton>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
