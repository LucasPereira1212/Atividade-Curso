import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./profile.module.css";
import { SlSocialYoutube } from "react-icons/sl";

export function Profile(props) {
  return (
    <div className={styles.container}>
      <img src={props.avatar} alt={props.name} className={styles.avatar} />
      <h2 className={styles.name}>{props.name}</h2>
      <div className={styles.info}>{props.bio}</div>
      <div className={styles.info}>{props.phone}</div>
      <div className={styles.info}>{props.email}</div>
      <div className={styles.links}>
        <a
          className={
            props.thema === "male" ? styles.linkButtonMale : styles.linkButton
          }
          href={props.githunUrl}
          target='_blank'
          rel='noreferer'
        >
          <FaGithub className={styles.icons} />
          Github
        </a>
        <a
          className={
            props.thema === "male" ? styles.linkButtonMale : styles.linkButton
          }
          href={props.linkendinUrl}
          target='_blank'
          rel='noreferer'
        >
          <FaLinkedin className={styles.icons} />
          Linkedin
        </a>
        <a
          className={
            props.thema === "male" ? styles.linkButtonMale : styles.linkButton
          }
          href={props.instagramUrl}
          target='_blank'
          rel='noreferer'
        >
          <FaInstagram className={styles.icons} />
          Instagram
        </a>
      </div>
    </div>
  );
}
