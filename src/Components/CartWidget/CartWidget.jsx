import React from 'react'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className='cartWidgetContainer'>
            <div className='cartWidget'>
                <span className="material-symbols-rounded">
                    shopping_cart
                </span>
                <strong>10</strong>
            </div>
        </div>
    )
}

export default CartWidget