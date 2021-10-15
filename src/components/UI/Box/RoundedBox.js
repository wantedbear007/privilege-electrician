import React from "react";
import styles from "./RoundedBox.module.css";
import photo from "../../../screens/Contact/image.png";

const RoundedBox = (props) => {
  return (
    <React.Fragment>
    <div className={styles.boxContainer}>
      <div>
        <img src={photo} />
      </div>
      <label>Person</label>
      </div>
    </React.Fragment>
  );
};
export default RoundedBox;
