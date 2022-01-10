import styles from '../styles/imagecarousel.module.css'

const ImageCarousel = ({images}) => {
    return (
        <div className={styles.product_images}>
            {
                images.map((i, index) => {
                    return (
                        <img className={styles.product_img} src={i.src} alt={i.alt} key={`${index}${i.src}`}></img>
                    )
                })
            }
        </div>
    )
}

export default ImageCarousel