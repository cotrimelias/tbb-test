import styles from './styles/product-list.module.css'

const ProductList = ({products}) => {

    return (
        <div className={styles.product_list}>
            {
            products.map((i, index) => {
                return (
                <div className={styles.product} category={i.category.id} order={index} key={i.id}>
                    <h3 className={styles.product_category}>{i.category.name}</h3>
                    <div className={styles.product_images}>
                    {
                        i.images.map((i, index) => {
                            return (
                                <img className={styles.product_img} src={i.src} alt={i.alt} key={`${index}${i.src}`}></img>
                            )
                        })
                    }
                    </div>
                    <h1 className={styles.product_title}>{i.name}</h1>
                    <button className={styles.product_buy_button}>Comprar</button>
                </div>
                )
            })
            }
        </div>
        )
}

export default ProductList