import styles from "./Subtitle.module.scss";

const Subtitle: React.FC<{ text: string }> = ({ text }) => (
  <h1 className={styles.subtitle}>{text}</h1>
);

export default Subtitle;
