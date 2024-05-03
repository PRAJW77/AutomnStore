import React,{createContext, useEffect, useState} from "react";
// import all_product from '../component/Images/all_product'


export const ShopContext = createContext(null);
const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 300+1; index++) {
        cart[index] = 0;
    }
    return cart;
}

export const ShopContextProvider = (props) =>{

    const [all_product,setAll_Product] = useState([]);
    const[cartItems,setCartItems] = useState(getDefaultCart());

    useEffect(()=>{
        fetch('http://localhost:3000/allproducts')
        .then((response)=>response.json())
        .then((data)=>setAll_Product(data))

        if(localStorage.getItem('token')){
            fetch('http://localhost:3000/getcart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'token':`${localStorage.getItem('token')}`,
                    'Content-Type':'application/json',
                },
                body:"",
            })
            .then((response)=>response.json())
            .then((data)=>setCartItems(data))
        }
    },[])

    const addToCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        if(localStorage.getItem('token')){
            fetch('http://localhost:3000/addtocart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'token':`${localStorage.getItem('token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId}),
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data))
        }
    }

    
    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
        if(localStorage.getItem('token')){
            fetch('http://localhost:3000/removefromcart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'token':`${localStorage.getItem('token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId}),
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data))
        }
    }

    const getTOtalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((Product) => Product.id === Number(item));
                if (itemInfo) { // Check if itemInfo is not undefined
                    totalAmount += itemInfo.new_price * cartItems[item];
                }
            }
        }
        return totalAmount;
    }
    

    const getTotalCartItems = () =>{
        let totalItem = 0;
        for (const item in cartItems){
            if(cartItems[item]>0){
                totalItem+=cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue = {getTotalCartItems,getTOtalCartAmount,all_product,cartItems,addToCart,removeFromCart}

    return (
        <ShopContext.Provider value ={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;