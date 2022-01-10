import React, { useState } from 'react'
import styles from './styles/product-list.module.css'
import Product from './components/product'
import Button from './components/button'

const ProductList = ({products}) => {
    
    const allCategories = [...new Set(products.map(i => i.category.name))]

    const [currentcategory, setCategory] = useState(allCategories)

    const filterProducts = (categoryname) => {
        const filteredData = products.filter(i => categoryname.includes(i.category.name))
        return filteredData
    }

    return (
        <div>
            {
                <Button clickFunc={() => setCategory(allCategories)}>Todos</Button>
            }
            {
                allCategories.map(i => {
                    return <Button clickFunc={() => setCategory(i)} key={`categoria${i}`}>{i}</Button>
                })
            }
            
            <div>
                <div className={styles.product_list}>
                    {
                    filterProducts({currentcategory}.currentcategory).map((i, index) => {
                        return (
                            <Product product={i} productorder={index} key={`produto-${index}`}/>
                        )
                    })
                    }
                </div>
            </div>
        </div>
        )
}

export default ProductList