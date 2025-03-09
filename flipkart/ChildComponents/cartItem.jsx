import React, { useEffect, useState } from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios'
// import Banda from "../images/Banda.png"

function CartItem({cartItemDetails,itemQuantity,onRemove,onChangePriceDetails}) {
    // console.log("cart:",cartItemDetails.title) 
    const [quantity, setQuantity] = useState(itemQuantity)
    const [limitSpan,setLimitSpan] = useState("")
    const user= localStorage.getItem("user")

    const removeQuantity = ()=>{
        if(quantity===1){
            setLimitSpan("Violating Required Limit...")
            setTimeout(()=>setLimitSpan(""),1500)
            return
        }
        if(quantity>1){
            setQuantity(quantity-1)
        }


    }

    const addQuantity = ()=>{   
        if(quantity===10){
            setLimitSpan("Violating Required Limit...")
            setTimeout(()=>setLimitSpan(""),1500)
            return
        }
        if(quantity<10){
            setQuantity(quantity+1) 
        }
       
    }




    // useEffect(()=>{
    //     const changeQuantity = async()=>{
    //         try{
    //             const response= await axios.post('http://localhost:4000/changequantity',{user:user,quantity:quantity,ref_id:cartItemDetails.ref_id})
    //             console.log("quantitychange",response?.data)

    //         }catch(err){
    //             console.log("changingError:",err)

    //         }
    //     }
    //     changeQuantity();

    // },[quantity]);

    useEffect(()=>{

        onChangePriceDetails(user,quantity,cartItemDetails.ref_id)
    
    },[quantity]);
   
    return ( 
        <div className='flex justify-between shadow-xl shadow-gray-300 m-5 p-3 items-center cursor-pointer'>
            <div className='m-2 shadow-2xl cursor-pointer rounded-lg h-50'><img className=' rounded-lg h-50 w-100 ' src={`/images/newItem/${cartItemDetails.title}.jpg`} alt="" /></div>
            <div className='m-5 w-250'>
                <h1 className='text-2xl'>{cartItemDetails.description}</h1>
                <div className='flex my-5 items-center'>
                    <h1 className='text-2xl font-bold'> ₹{cartItemDetails.price} </h1> 
                    <h1 className='ml-5 text-green-700 font-medium'>{cartItemDetails.dis}% Off 1 offer available</h1>
                </div>
                <div className='flex h-8'>
                    <button className='w-7 border rounded-lg text-sm mr-3 cursor-pointer' onClick={removeQuantity}><RemoveIcon/></button>
                    <div className='mr-3 border w-8 rounded text-center text-lg'><h1>{quantity}</h1></div>
                    <button className='w-7 border rounded-lg text-sm cursor-pointer' onClick={addQuantity}><AddIcon/></button>
                    <button className='mx-10 h-8 w-25 border rounded-lg text-blod cursor-pointer' onClick={() => onRemove(user,cartItemDetails.ref_id)}><DeleteIcon/> Remove</button>
                </div>
                <span className='text-red-500 font-normal'>{limitSpan}</span>
            </div>
        </div>
     );
}   

export default CartItem;