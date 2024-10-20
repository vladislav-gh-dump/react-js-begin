import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductService } from "../../../services/product.service";
import styles from './ProductDetail.module.css';
import { formatPrice } from '../../../utils/price-formatter';


const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        if (!id) return 

        const fetchData = async () => {
            const productData = await ProductService.getById(id);

            setProduct(productData);
        }

        fetchData();
    }, [id])

    if (!product.name) return <p>Product not found...</p>

    return (
        <div>
            <Link className="btn navBack" to='/'>Back</Link>

            <h1>{product.name}</h1>
            <div className={styles.productDetail}>
                <div 
                    className={styles.image}
                    style={{
                        backgroundImage: `url(${product.photoUrl})`,
                    }}
                />
                <div className={styles.info}>
                    <p>{product.description}</p>
                    <h2>{formatPrice(product.price)}</h2>
                    <button className="btn">Buy</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;