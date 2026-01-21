import React from 'react'
import AddressCard from '../AdressCard/AddressCard'
import OrderTracker from './OrderTracker'
import AdjustSharpIcon from '@mui/icons-material/AdjustSharp';
import { Box, Grid } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import StarBorderIcon from '@mui/icons-material/StarBorder';
const OrderDetails = () => {
  return (
    <div className='px:5 lg:px-20'>
        <div>
            <h1 className='font-semibold text-xl py-7'>
                Delivery Address
            </h1>
            <AddressCard/>
        </div>
        <div className='py-10'>
            <OrderTracker activeStep={3}/>
        </div>
        {
            [1,1,1,1].map((item)=> <Grid container className='space-x-5'>
            <Grid item container className='shadow-xl rounded-md p-5 border' sx={{alignItems:"center",justifyContent:"space-between"}}>
            <Grid item xs={6}>
                <div className='flex items-center space-x-4'>
                    <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://images.bestsellerclothing.in/data/JJ/30-mar-2024/219824201_g1.jpg?width=415&height=550&mode=fill&fill=blur&format=auto" alt=".."/>
                    <div className='ml-5 space-y-2'>
                        <p className=''>Men Slim Mid Black Jeans</p>
                        <p className='opacity-50 text-xs font-semibold '>Size : M</p>
                        <p className='opacity-50 text-xs font-semibold '>Color : Black</p>
                    </div>
                </div>
            </Grid>
            <Grid item xs={2}>
                
            </Grid>
            <Grid item xs={4}>
                <Box sx={{color:deepPurple[500]}}>
                    <StarBorderIcon/>
                    <span>Rate & review Product</span>
                </Box>
            </Grid>
            </Grid>
        </Grid>)
        }
    </div>
  )
}

export default OrderDetails