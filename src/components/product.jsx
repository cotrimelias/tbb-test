import CategoryTitle from './categorytitle'
import ImageCarousel from './imagecarousel'
import Title from './title'
import BuyButton from './buybutton'
import styles from '../styles/product.module.css'

const Product = ({product, productorder}) => {
    return(
        <div className={styles.product} category={product.category.name} category_id={product.id} order={productorder} key={`${product.id}key`}>
            <CategoryTitle>{product.category.name}</CategoryTitle>
            <ImageCarousel images={product.images} />
            <Title>{product.name}</Title>
            <BuyButton>Comprar</BuyButton>
        </div>
    )
}

export default Product