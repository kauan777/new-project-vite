import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image.js";

function NavBarComponent() {
  return (
    <header className={styles.header}>
      <Image
        src="/nettracker.svg"
        width={129}
        height={33}
        alt="Logo Nettracker"
      />
    </header>
  );
}

export default NavBarComponent;
