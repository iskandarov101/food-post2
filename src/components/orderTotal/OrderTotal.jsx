import './orderTotal.scss';
const OrderTotal = ({setDrawerState, drawerState,totalPrice})=> {

  return(
    <div className="total-boc">
      <div className="row">
        <p className='order-total-title'>Discount</p>
        <h2 class='order-total-price'>$ {(totalPrice/6).toFixed(2)}</h2>
      </div>
      <div className='row'>
        <p className='order-total-title'> Sub total </p> 
        <h2 class='order-total-price'>  $ {totalPrice.toFixed(2)} </h2>
      </div>
      <button onClick={() => setDrawerState(!drawerState)} type='button' className='payment-btn'>
        Continue to Payment
      </button>
    </div>
  )
}

export default OrderTotal;