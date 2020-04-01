import React from 'react'
import styled from "styled-components";

export default function CartItem({item, value}) {

    const {id, title, img, price, total, count} = item
    const {increment, decrement, removeItem} = value
    
    return (
        <div className="row my-5 text-capitalize text-center">
           <div className="col-10 mx-auto col-lg-2">
               <img src={img} alt="product" style={{width:'5rem', height:'5rem'}} className="img-fluid" />
           </div>

           <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Product: </span>
                {title}
           </div>

           <div className="col-10 mx-auto col-lg-2">
           <span className="d-lg-none">Price: </span>
                {price}
           </div>

           <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <span className="btn-increment mx-1" onClick={() => decrement(id)}>-</span>
                    <span className="btn-increment-count mx-1">{count} </span>
                    <span className="btn-increment mx-1" onClick={() => increment(id)}>+</span>
                </div>
           </div>

            
           <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={() => removeItem(id)}>
                    <i className="fas fa-trash-alt"></i>
                </div>
           </div>

           <div className="col-10 mx-auto col-lg-2">
                <strong>Total: $ {total}</strong>
           </div>

        </div>
    )
}

