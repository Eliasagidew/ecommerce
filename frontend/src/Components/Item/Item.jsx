import React from 'react'
import './Item.css'
const Item = (props) => {
  return (
    <div className='item'>
      <link to={`/product/${props.id}`}><img src={props.image} alt="" /></link>
      
      <p>{props.name}</p>
      <div className='item_prices'>
        <div className='item-price-new'>
          ${props.new_price}
        </div>
         <div className='item-price-old'>
           ${props.old_price}
         </div>
      </div>
    </div>
  )
}

export default Item
