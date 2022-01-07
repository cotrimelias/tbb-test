import React from 'react';
import styles from './styles/index.module.css';
import ProductList from './product-list.jsx' ;
import data from './data/data.json'

function App() {
  return (
    <div className={styles.main}>
      <ProductList products={data.data.nodes}/>
    </div>
  );
}

export default App;
