import { Box, Button, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const[login,setLogin]=useState(
    {email:'',pwd:''}
  )
const navigate=useNavigate()

function handleInput(event){

  const{name,value}=event.target

  setLogin((pre)=>{
    return {...pre,
      [name]:value
    }
  }
)
console.log(login)
}

function onSubmitting(){
  
  navigate("/admin")
}


  return (
    <Box display="flex" flexDirection='column' alignItems='center' gap={4} justifyContent='center'>
      <Typography variant='h4' >Login</Typography>
    <TextField
     name="email"
     type='email'
     label='email'
     size='small' onChange={handleInput} >
</TextField>
<TextField
     name='pwd'
     label='password'
     type='password'
     size='small' onChange={handleInput}>
</TextField>
 <Button variant='contained' onClick={onSubmitting}>Submit</Button>
    </Box>
  )
}

export default Login