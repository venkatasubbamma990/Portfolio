import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.title}>Hi, I'm Venkata subbamma</h3>
        <p className={styles.description}>
          I'm a full-stack developer with 2 years of experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:venkatasubbamma990@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/sudha.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
        style={{width:"500px",height:"400px",borderRadius:"50%"}}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
