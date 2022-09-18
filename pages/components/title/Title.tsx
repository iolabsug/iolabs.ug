import styles from "./Title.module.scss"

const Title: React.FC<{text: string}> = ({text}) => (
    <h1 className={styles.title}>{text}</h1>
)

export default Title;