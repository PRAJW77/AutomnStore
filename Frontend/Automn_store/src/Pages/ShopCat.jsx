import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import Item from "../component/items/Item";
// import all_product from '../component/Images/all_product';
import dropDown from '../component/Images/dropdown_icon.png'

const ShopCat = (props) => {
    const {all_product} = useContext(ShopContext);

    console.log('contextProducts:', all_product);
    return (
        <div className='shop-category'>
            <img className='shopcategory-banner' src={props.banner} alt="" />
            <div className="shopcategory-idexSort">
                <p>
                    <span>Showing 1-12</span> out of 36products
                </p>
                <div className="shopcategory-sort">
                    Sort by <img src={dropDown} alt="" />
                </div>
            </div>
            <div className="shopcategory-products">
                {all_product.map((item, i) => {
                    if (props.category === item.category) {
                        return <Item key={i} id={item.id}
                                     name={item.name} image={item.image}
                                     new_price={item.new_price}
                                     old_price={item.old_price}
                        />
                    } else {
                        return null;
                    }
                })}
            </div>
            <div className="shopcategory-loadmore">
                Explore more
            </div>
        </div>
    );
};

export default ShopCat;
