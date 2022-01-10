import styles from '../styles/categorytitle.module.css'

const CategoryTitle = ({children}) => {
    return (
    <h3 className={styles.product_category}>{children}</h3>
    )
}

export default CategoryTitle