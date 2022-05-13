import React from 'react';
import "./Product.css"
import { useStateValue } from './StateProvider';
function Product({title,image,price,rating,}) {
    const [{basket},dispatch]= useStateValue()
    const addtobasket=()=>{
 dispatch({type: 'ADD_TO_CART',
item:{
   
    title:title,
    image:image,
    price:price,
    rating:rating
}})
    }
  return <div className="product">
 
       <div className="product_info">
           <p>{title}</p>
           <p className="product_price">
               <small>SAR</small>
               <strong>{price}</strong>
           </p>
          <div className="product_rating">
              {Array(rating)
              .fill()
              .map((_,i) =>(
                    <p className="star">⭐️</p>
              ))}
               <button  onClick={addtobasket}id="one">Add to Cart</button>
</div>
</div>
<img src={image} />
                   
            

            
  

</div>



  

}
export default Product;
