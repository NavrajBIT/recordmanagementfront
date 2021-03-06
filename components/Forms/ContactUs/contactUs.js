import React, { useState } from "react";

import styles from "../../../styles/contactUs.module.css";
// import Navbar from "./Navbar";

const ContactUs = () => {
  // New
  // code
  const [info, setinfo] = useState({
    heading: "",
    description: "",
  });
  const handleChange = (e) => {
    const name = e.target.name; 
    const value = e.target.value;
    setinfo({ ...info, [name]: value });
  };

  return (
    <>
    <div className={styles.background}>
      <div className={styles.contactUs}>
        <div className={styles.contactInfo}>
            <h2>Contact Us</h2>
            <div className={styles.headingBlock}>
              <label htmlFor="heading">Heading</label>
              <input
                type="text"
                id="heading"
                name="heading"
                placeholder="Add Heading"
                value={info.heading}
                onChange={handleChange}
                autoComplete='off'
              />
            </div>
            <div className={styles.descriptionBlock}>
              <label className={styles.descLabel} htmlFor="description">
                Description
              </label>
              <textarea
                name="description"
                id="description"
                cols="30"
                rows="10"
                placeholder="Write Your Query Here....."
                value={info.description}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className={styles.buttonSection}>
              <button>Browse</button>
              <button>Submit</button>
            </div>
        </div>
      </div>
    </div>
    </>
  );
//change
};
export default ContactUs;