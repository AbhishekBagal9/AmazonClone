import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format'
const Subtotal = () => {
  return (
    <div className='subtotal'>
       <CurrencyFormat
        renderText={(value) => (
            <>
            <p>
                Subtotal (0 items): <strong>{value}</strong>
            </p>
            <small className='subtotal-gift'>
                <input type="checkbox" /> This order contains a gift
            </small>
            </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
    
       />
       <button className='subtotal__button'>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal