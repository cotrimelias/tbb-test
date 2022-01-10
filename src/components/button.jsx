import styles from '../styles/button.module.css'

const Button = ({children, clickFunc}) => {
    
    return (
        <button className={styles.button} onClick={clickFunc}>{children}</button>
    )
}

export default Button