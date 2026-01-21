import { Grid, TextField , Button} from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getUser, login } from '../../state/Auth/Action'

const LoginForm = () => {
    const dispatch = useDispatch();
    const jwt=localStorage.getItem("jwt");
    const {auth}=useSelector(store=>store)

    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);

        const userData = {
            email:data.get("email"),
            password:data.get("password")
        }
        dispatch(login(userData));
        console.log(userData);
    }

    useEffect(()=>{
        if(jwt){
            dispatch(getUser(jwt))
        }
      },[jwt,auth.jwt]);
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="email"
                        name="email"
                        label="Email"
                        fullWidth
                        autoComplete='email'
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="password"
                        name="password"
                        label="Password"
                        fullWidth
                        autoComplete='password'
                    />
                </Grid>
                <Grid item xs={12}>
                <Button type='submit' className='w-full'
                    sx={{bgcolor:"#9155fd", color:"white"}}
                    size='large'>login
                </Button>
                </Grid>
            </Grid>
        </form>
        <div className='flex justify-center flex-col items-center'>
            <div className='py-3 flex items-center'>
                <p>If you Don't have acccount ?</p>
                <Button onClick={()=>navigate("/register")} size='small'>register</Button>
            </div>
        </div>
    </div>
  )
}

export default LoginForm