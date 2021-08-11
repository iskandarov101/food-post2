import { useState } from "react";

import ButtonOrder from "../../components/buttonOrder/buttonOrder";
import SelectItem from '../../components/SelectItem/SelectItem';
import OrderTotal from "../../components/orderTotal/OrderTotal";

import './Order.scss';

const Order = ({setDrawerState, drawerState,resItems})=> {
  
  const [btnState, setBtnState] = useState('Dine In')
  const totalPrice = resItems.reduce((a,c)=> a+c.foodPrice*c.qty,0);
  // console.log('manasizga ', resItems)

  return(
    <div className="order-box">
      <h1 className='order-info'>Orders #34562</h1>
      <div className='order-btns'>
          <ButtonOrder buttonActive={btnState} setBtnState={setBtnState} buttonInfo='Dine In' />
          <ButtonOrder buttonActive={btnState} setBtnState={setBtnState} buttonInfo='To Go' />
          <ButtonOrder buttonActive={btnState} setBtnState={setBtnState} buttonInfo='Delivery' />
      </div>
      <div className='row'>
        <div>
          <p className='order-items'>Item</p>
        </div>
        <div className='row-order-left'>
          <p className='order-items'>Qty</p>
          <p className='order-items'>Price</p>
        </div>            
      </div>
      <div className='zakaz'>
      {
        resItems.map(item=> (
          <SelectItem 
        foodName={item.foodName} 
        img={item.foodImg} 
        price={'$' + `${(item.foodPrice*item.qty).toFixed(2)}`} 
        value={item.qty} 
        quantity={item.isAvailable}/>
        ))
      }
      </div>
      <div>
        <OrderTotal  drawerState={drawerState} setDrawerState={setDrawerState} totalPrice={totalPrice}/>
      </div>
    </div>
  )
}

export default Order;


