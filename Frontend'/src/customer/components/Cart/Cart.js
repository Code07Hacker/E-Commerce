import React, { useEffect } from 'react'
import CartItem from './CartItem'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCartItem } from '../../../state/cart/Action'

const Cart = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {cart} = useSelector(store=>store);

    const handleCheckOut=()=>{
        navigate(`/checkout?step=2`)
    }

    useEffect(()=>{
        dispatch(getCartItem())
    },[cart.deleteCartItem,cart.updateCartItem])
  return (
    <div>
        <div className='lg:grid grid-cols-3 lg:px-16 relative'>
            <div className='col-span-2'>
            {cart.cart?.cartItems.map((item)=><CartItem item={item}/>)}
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
                            {cart.cart?.totalPrice}
                            </span>
                        </div>
                        <div className='flex justify-between pt-3 text-black'>
                            <span>
                                Discount
                            </span>
                            <span className='text-green-600'>
                                -{cart.cart?.discount}
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
                                {cart.cart?.totalDiscountedPrice}
                            </span>
                        </div>
                    </div>
                    <Button onClick={handleCheckOut} className='w-full mt-5' sx={{bgcolor:"#9155fd", color:"white"}}>checkout</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart