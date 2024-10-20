/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import styles from './ProductCards.module.css';
import { formatPrice } from '../../../../utils/price-formatter';


const ProductCard = ({ product }) => (
    <div className={styles.productCard}>
        <div 
            className={styles.image}
            style={{
                backgroundImage: `url(${product.photoUrl})`,
            }}
        />
        <div className={styles.info}>
            <h2>{product.name}</h2>
            <p># {product.category}</p>
            <p>{formatPrice(product.price)}</p>
            <Link className="btn" to={`/products/${product.id}`}>Read more</Link>
        </div>
    </div>
)

export default ProductCard;