import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../Store/CartSlice';


function Card() {
    const items = useSelector((state) => state.cart)
    let dispatch = useDispatch();

    const handleremove = (productId) => {
        dispatch(remove(productId))
    } 
    return (
        <>
            {items.map((product) => {
                const { id, image, category, price } = product;
                return (
                    <div className="col-lg-3 col-md-4 text-center mt-2" key={id}>
                        <div className="shadow-sm border rounded p-3">
                            <img src={image} height="100px" width="auto" alt="" />
                            <h5 className="text-center">{category}</h5>
                            <p className="text-center">{price}</p>
                            <button className="btn btn-sm btn-primary" onClick={() =>handleremove(product.id)}>remove</button>
                        </div>
                    </div>
                );
            })}
        </>

    )
}

export default Card