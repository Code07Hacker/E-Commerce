import { Grid } from '@mui/material'
import React from 'react';
import AdjustSharpIcon from '@mui/icons-material/AdjustSharp';
import { useNavigate } from 'react-router-dom';

const OrderCart = () => {

    const navigate = useNavigate();

  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-md shadow-black hover:shadow-2xl border'>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
            <Grid item xs={6}>
                <div className='flex cursor-pointer'>
                    <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://images.bestsellerclothing.in/data/JJ/30-mar-2024/219824201_g1.jpg?width=415&height=550&mode=fill&fill=blur&format=auto" alt=".."/>
                    <div className='ml-5 space-y-2'>
                        <p className=''>Men Slim Mid Black Jeans</p>
                        <p className='opacity-50 text-xs font-semibold '>Size : M</p>
                        <p className='opacity-50 text-xs font-semibold '>Color : Black</p>
                    </div>
                </div>
            </Grid>
            <Grid item xs={2}>
                <p>$1999</p>
            </Grid>
            <Grid item xs={4}>
                {true && <div>
                    <p>
                        <AdjustSharpIcon sx={{width:"15px",height:"15px"}} className='text-green-600 mr-2 text-sm'/>
                        <span>
                        Delivered on March 10
                        </span>
                    </p>
                    <p className='text-xs '>
                        Your item has been delivered.
                    </p>
                </div>}
                {false && <p>
                    <span>
                    Expected Delivered on March 10
                    </span>
                </p>}
            </Grid>
        </Grid>
    </div>
  )
}

export default OrderCart