import React, { useEffect } from 'react'
import AddressCard from '../AdressCard/AddressCard'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderById } from '../../../state/order/Action';
import { useLocation } from 'react-router-dom';
import CartItem from '../Cart/CartItem';
import { Button } from '@mui/material';

const OrderSummary = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const {order} = useSelector(store=>store);
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");

  useEffect(()=>{
    dispatch(getOrderById(orderId))
  },[orderId])
  return (
    <div>
      <div className='p-5 shadow-lg rounded-s-md border'>
        <AddressCard address={order.order?.shippingAdress}/>
      </div>
      <div className='lg:grid grid-cols-3 relative'>
        <div className='col-span-2'>
            {order.order?.orderItems.map((item)=>
              <CartItem item={item}/>
            )}
        </div>
        <div className='px-5 sticky top-0 h-[100vh] mt-10'>
                <div className='border'>
                    <p className='uppercase font-bold opacity-60 pb-4'>
                        Price Details
                    </p>
                    <hr/>
                    <div className='space-y-3 font-semibold'>
                        <div className='flex justify-between pt-3 text-black'>
                            <span>
                                Price
                            </span>
                            <span>
                            {order.order?.totalPrice}
                            </span>
                        </div>
                        <div className='flex justify-between pt-3 text-black'>
                            <span>
                                Discount
                            </span>
                            <span className='text-green-600'>
                                {order.order?.discount}
                            </span>
                        </div> 
                        <div className='flex justify-between pt-3 text-black'>
                            <span>
                                Delivery charge
                            </span>
                            <span className='text-green-600'>
                                FREE
                            </span>
                        </div>    
                        <div className='flex justify-between pt-3 text-black font-bold'>
                            <span>
                                Total Amount
                            </span>
                            <span className='text-green-600'>
                                {order.order?.totalDiscountedPrice}
                            </span>
                        </div>
                    </div>
                    <Button className='w-full mt-5' sx={{bgcolor:"#9155fd", color:"white"}}>checkout</Button>
                </div>
            </div>
      </div>
    </div>
  )
}

export default OrderSummary