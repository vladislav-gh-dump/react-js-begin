/* eslint-disable react/prop-types */

import styles from './ProductCards.module.css';
import ProductCard from './ProductCard';
import { useId, useMemo, useState } from 'react';


const defaultCategory = 'all';

const ProductCards = ({ products }) => {
    const categoryId = useId();
    const [category, setCategory] = useState(defaultCategory);

    const filteredProducts = useMemo(() => {
        if (category !== defaultCategory) {
            return products.filter(product => product.category === category)
        }
        return products;
    }, [category, products])

    const setSelectedCategory = (value) => {
        setCategory(value);
    }

    return (
        <div>
            <div className={styles.filter}>
                <label htmlFor={categoryId}>Category:</label>
                <select 
                    id={categoryId}
                    className='input' 
                    name='categories' 
                    defaultValue={defaultCategory}
                    onChange={e => setSelectedCategory(e.target.value)}
                >
                    <option value="all">all</option>
                    <option value="physical">physical</option>
                    <option value="digital">digital</option>
                </select>
            </div>

            <div className={styles.productCards}>
                {
                    filteredProducts.length ? (
                        filteredProducts.map(product => (
                            <ProductCard 
                                key={product.id} 
                                product={product} 
                            />
                        ))
                    ) : (
                        <p>There are no products</p>
                    )
                }
            </div>
        </div>
    )
}


export default ProductCards;
