import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/home/Home';
import ProductDetail from './screens/product-detail/ProductDetail';
import Login from './screens/login/Login';


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path='/' />
                <Route element={<Login />} path='/login' />
                <Route element={<ProductDetail />} path='/products/:id' />
                <Route element={<p>Not Found</p>} path='*'/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;