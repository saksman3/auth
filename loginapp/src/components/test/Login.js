import Cookies from "js-cookie";
import React,{useState,useEffect} from "react";

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const theme = createTheme();

const Login = ()=>{
   const [email,setEmail] = useState('');
   const [password,setPassword] = useState('');
   const [errors,setErrors] = useState(false);
   const [loading, setLoading] = useState(true);
   
   useEffect(() =>{
       if(Cookies.get('token')){
           window.location.replace('http://localhost:3000/dashboard');
       }else{
           setLoading(false);
       }
   },[]);
   const onSubmit = e =>{
       e.preventDefault();
       const user = {
           email,
           password
       };
       fetch('http://127.0.0.1:8000/api/login',{
           method:'POST',
           headers:{
               'Content-Type': 'application/json'
           },
           body:JSON.stringify(user)
       }).then(res=>res.json())
       .then(data => {
           if(data.token){
               Cookies.set('token',data.token);
               console.log(Cookies.get('token'));
               window.location.replace('http://127.0.0.1:3000/dashboard');
           }else{
               setEmail('');
               setPassword('');
               Cookies.remove('token');
               setErrors(true);
           }

       });
   };

   
   return (
       <Box
       component="form"
       display="flex"
       onSubmit={onSubmit}
       justifyContent="center"
       alignContent="center"
         
       >
           
            {loading === false && <h1>Login</h1>}
           {errors === true && <h2>Loggin Details incorrect</h2>}
           {loading === false && (
               <div >
                 <TextField
                    id="outlined-basic"
                    label="Enter Email"
                    placeholder="Placeholder"
                    multiline
                    variant="filled"
                    onChange={e=> setEmail(e.target.value)}
                    value={email}
                    required
                    />
                   <br/>
                   <TextField
                     id="outlined-password-input"
                     label="Password"
                     type="password"
                     value={password}
                     autoComplete="current-password"
                     onChange={e=>setPassword(e.target.value)}
                     variant="outlined"
                   />
                   {' '}
                   <br/>
                   <input type='submit' value='Login'/>
               </div>
           )}
       </Box>
   );
};
export default Login;