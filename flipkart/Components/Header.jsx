// import flipkart from '../images/flipkart-logo.png'
import Person2Icon from '@mui/icons-material/Person2';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import axios from 'axios';
import flipkartimage from '../images/flipkart-logo.png'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function Header() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [token, setToken] = useState(localStorage.getItem("token") || null)
  const [email,setEmail]=useState("");
  const [username,setUsername]=useState("");
  const [cartLength,setCartLength]=useState(0);


  useEffect(()=>{
    const fetchUser=async()=>{
      try{
        const response=await axios.get("http://localhost:4000/",{
          headers:{
            Authorization:`Bearer ${token}`
          }
        })
        console.log("User data:",response?.data);
        localStorage.setItem("user",response?.data?.email);
        setUsername(response?.data?.username)
        setEmail(response?.data?.email)
        setCartLength(response?.data?.cartLength)
      }catch(err){
        console.log("error-dashboard:",err?.response?.data?.message);
        setToken(null)
        // setToken(null)
        // localStorage.removeItem("token")
      }

    }
    fetchUser();
  },[token])





  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose1 = () => {
    setAnchorEl(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user")
    setToken(null);

  }


  return (
    <div className='flex justify-around items-center mt-1'>
      <img src={flipkartimage} className='w-30' />
      {/* <input className='w-50' type='search' placeholder='Search for Products, Brands and More' /> */}
      <div class="relative">
        <input type="search" class="w-3xl bg-sky-100 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pr-3 pl-10 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Search for Products, Brands and More" />
        <button class="absolute left-1 top-1 rounded bg-slate-800 p-1.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
            <path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
          </svg>
        </button>
      </div>


      {token ? (
        <div className='flex gap-10'>
          <Button
            id="fade-button"
            aria-controls={open ? 'fade-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            style={{ color: "blue" }}
          >
            <AccountCircleIcon/> {username}
          </Button>
          <Menu
            id="fade-menu"
            MenuListProps={{
              'aria-labelledby': 'fade-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem style={{ color: "red" }} onClick={handleClose}>{email}</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose1}>Logout</MenuItem>
          </Menu>
          <button onClick={() => navigate('/cart')} className='cursor-pointer'>
            <ShoppingCartIcon />
            Cart
            <sup className=' font-medium text-lg rounded-3xl bg-red-500 text-white'>{cartLength}</sup></button>
        </div>

      ) : (
        <div>
          <button onClick={() => navigate('/login')} className='cursor-pointer'><Person2Icon />Login</button>
          {token ? (
            <button onClick={() => navigate('/cart')} className='cursor-pointer'><ShoppingCartIcon />Cart</button>
          ) : (<div></div>)
          }
        </div>
      )}
    </div>
  )
}

export default Header