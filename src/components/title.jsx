import styles from '../styles/title.module.css'

const Title = ({children}) => {
    return <h1 className={styles.product_title}>{children}</h1>
}

export default Title