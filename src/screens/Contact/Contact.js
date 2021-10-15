import React from "react";
import styles from "./Contact.module.css";
import photo from "./image.png";
import RoundedBox from "../../components/UI/Box/RoundedBox";

const Contact = (props) => {
  return (
    <React.Fragment>
      {/* <p>CONTACT</p>
      <div className={styles.contactContainer}>
        <div className={styles.imageContainer}>
          <img src={photo} alt="photo" />
          <label>Name</label> */}
          <RoundedBox />
          <RoundedBox />
        {/* </div>
      </div> */}
    </React.Fragment>
  );
};

export default Contact;
