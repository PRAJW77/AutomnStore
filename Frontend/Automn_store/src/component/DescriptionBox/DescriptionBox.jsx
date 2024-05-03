import React from "react";
import './DescriptionBox.css'

const DescriptionBox = () =>{
    return (
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
                <div className="descriptionbox-description">
                    <p>Discover the essence of style this AUTOMN MENS-WEAR
                       with our curated collection of men's wear.
                        From cozy sweaters to sophisticated jackets,
                        elevate your wardrobe effortlessly. Shop now
                        for timeless pieces that blend comfort and fashion
                        seamlessly.Get exclussive offers.
                    </p>
                    <p>E-commerce websites typically display products or services along with detailed descriptions,
                        images,prices, and available variations (eg. size,colors). Each product 
                        usually has its own dedicated page with relevant information.
                    </p>
                </div>
        </div>
    )
}

export default DescriptionBox;
