import React from 'react'
// import jeans from '../../'
import { useNavigate,useParams} from 'react-router-dom'

function TitleCategoryChild({itemName,itemDetails}) {

    const navigate=useNavigate()
    const {category,subCategory}=useParams()
    // console.log(itemName)


  return (
  
    <div className='shadow-sm w-60' onClick={()=> navigate(`/category/${category}/${subCategory}/${itemName.toLowerCase()}`,{state:{itemDetails}})}  >
        <img className='w-50 h-50 rounded-3xl' src={`../../images/newItem/${itemDetails.title}.jpg`} alt="Image"/>
        {/* <h2 className='m-1 font-bold text-gray-500 '>{itemDetails.tshirtOrg}</h2> */}

        <h2 className='m-1 font-bold text-gray-500 '>{itemDetails.title}</h2>
        {/* <p className='w-70'>{itemDetails.}</p> */}
        <div className='flex gap-8 text-center'>
            <span className='font-medium'>{itemDetails.rating.rate}⭐</span>
            <span className='font-medium text-green-500' >₹{itemDetails.price}</span>
            {/* <span className='text-green-500 font-medium'>{itemDetails.dis}% off</span> */}
        </div>


    </div>
  )
}

export default TitleCategoryChild