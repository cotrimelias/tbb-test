import styles from '../styles/buybutton.module.css'

const BuyButton = ({children}) => {
    return <button className={styles.product_buy_button}>{children}</button>
}

export default BuyButton