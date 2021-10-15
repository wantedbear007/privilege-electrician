import React from "react";
import styles from "./HeaderButtons.module.css";

const HeaderButton = (props) => {
  return (
    <React.Fragment>
      <button className={`${styles.button} ${props.className}`} onClick={props.onClick}>
        {props.children}
      </button>
    </React.Fragment>
  );
};

export default HeaderButton;
