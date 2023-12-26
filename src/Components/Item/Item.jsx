import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

function Item(props) {
    let name = props.name
    let image = props.image
    let new_price = props.new_price;
    let old_price= props.old_price;
    return ( 
    <div className='item'>
       <Link to={`/product/${props.id}`}> <img src={image} width={250} height={300} onClick={window.scrollTo(0,0)}/> </Link>
        <p>{name}</p>
        <div className='item-prices'>

            <div className='item-price-new'>
                ${new_price}
            </div>
            <div className='item-price-old'>
                ${old_price}
            </div>
        </div>


    </div>
  )
}

export default Item