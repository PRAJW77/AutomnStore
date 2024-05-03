import React from "react"
import "./Breadcrums.css"
import arrow_icon from '../Images/breadcrum_arrow.png'

const Breadcrums = (props) => {
  const { Product } = props;
  return (
    <div className="breadcrum">
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {Product.category}<img src={arrow_icon} alt=""/>{Product.name}
    </div>
  )
}

export default Breadcrums