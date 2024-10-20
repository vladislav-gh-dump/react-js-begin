// import { useEffect, useState } from "react";
import { useContext } from "react";
import CreateProductForm from './create-product-form/CreateProductForm';
import ProductCards from './product-cards/ProductCards';
import { ProductService } from "../../../services/product.service";
import VideoPlayer from './video-player/VideoPlayer';
import { AuthContext } from './../../../providers/AuthProvider';
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";


const Home = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["products"],
        queryFn: () => ProductService.getAll()
    })

    // const [products, setProducts] = useState([]);
    const { user, setUser } = useContext(AuthContext);

    if (isLoading) return <p>Loading...</p>

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const productsData = await ProductService.getAll();
    //             setProducts(productsData);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }

    //     fetchData();
    // }, [])

    return (
        <div>
            <Link 
                className="btn navBack" 
                to={'/login'} 
                onClick={() => setUser(prevUser => ({
                    ...prevUser,
                    isLogin: false
                })
            )}>Auth</Link>

            { 
                user.isLogin && user.username !== '' ? <>
                    <h1>Products for { user.username }</h1>
                    <VideoPlayer />
                    <CreateProductForm />
                    <ProductCards products={data} />

                    {/* <CreateProductForm setProducts={setProducts} />
                    <ProductCards products={products} /> */}
                </> :
                <p>You are not authed</p>
            }
        </div>
    )
}

export default Home;
