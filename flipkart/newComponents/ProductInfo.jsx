import React,{useState} from 'react'
import { useParams, useLocation } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import image from '../public/images/newItem'
// import Header from '../Components/Header';
import axios from 'axios'


function ProductInfo() {

    // const navigate=useNavigate()

    const { category, subCategory, itemName } = useParams()
    const location = useLocation()
    console.log(location)
    const { itemDetails } = location.state

    console.log(itemDetails)
    console.log(category, subCategory, itemName)  // clothes,men,jeans

    const imageName = String(itemName[0].toUpperCase() + itemName.slice(1,))
    console.log(imageName)

    const [limitSpan,setLimitSpan]=useState("");

    const user=localStorage.getItem("user")


    const cartClick=async()=>{

        try{
            const response=await axios.post('http://localhost:4000/cartadd',{
                user:user,
                itemDetails:itemDetails,
            })
            console.log("cart add",response?.data) 
        }catch(err){
            console.log("Error for cart:",err?.response)
            setLimitSpan(err?.response?.data?.message)
            setTimeout(()=>{
                setLimitSpan("")
            },2000)
        }
        // navigate('/cart')

    }


    return (
            <>
            {/* <Header/> */}
            <div className='m-30 flex justify-around '>
                <div className='w-100 h-80'>
                    <img className='w-100 h-100 rounded-2xl shadow-lg shadow-gray-500' src={`/images/newItem/${imageName}.jpg`} alt="img"/>
                    <button onClick={cartClick} className='active:bg-amber-400 w-49 mt-7 mr-2 h-10 font-medium bg-amber-300 rounded-xl' >Add to Cart <AddShoppingCartIcon/></button>

                    <button className='w-49 h-10 font-medium bg-amber-500 rounded-xl'>Buy Now</button>
                    <span className='block text-red-600 font-sans'>{limitSpan}</span>
                </div>

                <div className="h-130 w-0.5 bg-emerald-500">

                </div>

                <div className='mt-10 rounded-2xl '>
                    <h1 className='font-medium text-xl mb-5'>{itemDetails.title}</h1>
                    <p className='text-2xl font-extralight mb-5'>{itemDetails.description}</p>
                    <div className='flex  gap-7 mb-5'>
                        <span className='font-bold text-xl'>₹{itemDetails.price}</span>
                        <span className='line-through text-gray-600 font-mono'>₹{itemDetails.cp}</span>
                        <span className='text-green-500 font-medium'>{itemDetails.dis}% off</span>
                    </div>
                    <span className='text-lg font-medium mr-4 inline '>{itemDetails.rating.rate}⭐</span>
                    <img className='w-20 h-5 inline' src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png'/>
                    <p>{itemDetails.rating.count} reviews 👍</p>
                </div>

            </div>
            </>
    )
}

export default ProductInfo