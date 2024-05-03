import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrums from '../component/Breadcrums/Breadcrums'
import Productdisplay from '../component/ProductDisplay/Productdisplay';
import DescriptionBox from '../component/DescriptionBox/DescriptionBox';
import RelatedProducts from '../component/RelatedProducts/RelatedProducts';

const Product = () => {
  const { all_product } = useContext(ShopContext)
  const { ProductId } = useParams()
  const Product = all_product.find((i) => i.id === Number(ProductId));

  return (
    <div>
      <Breadcrums Product={Product} />
      <Productdisplay Product={Product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  );
};

export default Product;