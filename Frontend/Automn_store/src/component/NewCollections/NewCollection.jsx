import React, { useEffect, useState } from "react";
import './NewCollection.css'
// import newcollections from '../Images/new_collections'
import Item from "../items/Item";

const NewCollection = () => {
    const [new_collections,setNew_collection] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/newcollection')
        .then((response)=>response.json())
        .then((data)=>setNew_collection(data))
    },[])
    return (
        <div className="newcollection">
            <h1>New Collection</h1>
            <hr />
            <div className="collections">
                {new_collections.map((item,i)=>{
                    return <Item key={i} id={item.id} 
                    name={item.name} image={item.image} 
                    new_price={item.new_price} 
                    old_price={item.old_price}
                    />
                })}
            </div>
        </div>
    )
}

export default NewCollection;