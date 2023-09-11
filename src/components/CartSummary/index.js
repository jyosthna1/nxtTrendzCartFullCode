// Write your code here
import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(cartItem => {
        total += cartItem.quantity * cartItem.price
      })
      return (
        <>
          <div className="cart-summary-container">
            <h1 className="order-total">
              <span className="order-total-text">Order Total: </span>Rs {total}
              /-
            </h1>
            <p className="items-in-cart">{cartList.length} items in cart</p>
            <button className="checkout-button display-small" type="button">
              Checkout
            </button>
          </div>
          <button className="checkout-button display-large" type="button">
            Checkout
          </button>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
