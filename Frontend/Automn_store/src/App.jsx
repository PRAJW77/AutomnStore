import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from "./component/navbar/Navigation";
import Shop from './Pages/Shop';
import ShopCat from './Pages/ShopCat';
import Product from './Pages/Product'; // Import Product component
import Cart from './Pages/Cart'; // Import Cart component
import LoginSignup from './Pages/LoginSignup'; // Import LoginSignup component
import Footer from "./component/Foter/Footer";
import men_banner from './component/Images/banner_mens.png' 
import sports_banner from './component/Images/banner_sports.png' 
import kids_banner from './component/Images/banner_kids.png' 


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route path='/' element={<Shop />} />
                    <Route path='/Formals' element={<ShopCat banner={men_banner} category="Formals" />} />
                    <Route path='/Sports' element={<ShopCat banner={sports_banner} category="Sports" />} />
                    <Route path='/Casuals' element={<ShopCat banner={kids_banner} category="Casuals" />} />
                    {/* Define the Product, Cart, and LoginSignup components */}
                    <Route path="Product" element={<Product />}>
                        <Route path=":ProductId" element={<Product />} />
                    </Route>
                    <Route path='/Cart' element={<Cart />} />
                    <Route path='/Login' element={<LoginSignup />} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
};

export default App;
