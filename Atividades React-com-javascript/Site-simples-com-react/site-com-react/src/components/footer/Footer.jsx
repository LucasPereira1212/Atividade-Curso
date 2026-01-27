import React from "react";
import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()} HashtagProfile. Todos os direitos
        reservados
      </p>
    </footer>
  );
}
