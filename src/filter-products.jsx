import styles from './styles/filter.module.css'

const FilterProducts = ({categories}) => {

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Filtrar por categoria:</h1>
        </div>
    )
}

export default FilterProducts