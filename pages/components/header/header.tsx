import styles from "./header.module.scss";

const Header = () => (
  <nav className={styles.header}>
    <div className={styles.links}>
      <p>Join iolabs</p>
      <p>Hire iolabs</p>
      <p>Portfolio</p>
      <p>Contacts</p>
    </div>
  </nav>
);

export default Header;
