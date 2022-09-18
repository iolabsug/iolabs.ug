import styles from "./header.module.scss";
import Image from "next/image";


const Header = () => (
  <nav className={styles.header}>
    <div className={styles.links}>
      <p>Home</p>
      <p>Profiles</p>
      <p>Portfolio</p>
      <p>Contacts</p>
    </div>

  
  </nav>
);

export default Header;
