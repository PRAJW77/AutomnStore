import React, { useContext } from "react";
import './Productdisplay.css'
import star_icon from '../Images/star_icon.png';
import star_dull from '../Images/star_dull_icon.png';
import { ShopContext } from "../../Context/ShopContext";


const Productdisplay = (props)=> {
    const {Product} = props;
    const {addToCart} = useContext(ShopContext);
    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={Product.image} alt="" />
                    <img src={Product.image} alt="" />
                    <img src={Product.image} alt="" />
                    <img src={Product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={Product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{Product.name}</h1>
                <div className="productdisplay-right-stars">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${Product.old_price}</div>
                    <div className="productdisplay-right-price-new">${Product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                Written in Heptapod B (the written language of the Heptapods)
                 from the short story-inspired movie "Arrival." This is my favorite
                  line in the movie, and is the biggest spoiler, so to spare those who
                   haven't seen it, I'll give you the gist: Louise sees f_
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(Product.id)}}>ADD TO CART</button>
                <p className="productdisplay-right-category"><span>Category :</span>Clothing, T-Shirts, Casula Wear</p>
                <p className="productdisplay-right-category"><span>Tags :</span>Modern, Latest</p>

            </div>
        </div>
    )
}

export default Productdisplay;