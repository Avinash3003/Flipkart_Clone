import React, { useState,useEffect } from 'react';
import { products } from '../data/Data';

function PriceDetails({userCartData,changePriceDetails}) {

    // const [cp,setCP]=useState(0);
    // const [sp,setSP]=useState(0);
    // const [noOfItems,setnoOfItems]=useState(0)

    let cp=0
    let sp=0
    let noOfItems=0

    for(let item of userCartData.cart){
        // setCP(cp+products[item.ref_id-1].cp)
        // setSP(sp+products[item.ref_id-1].price)
        // setnoOfItems(noOfItems+1)

        cp=cp+products[item.ref_id-1].cp*(item.cnt)
        sp=sp+products[item.ref_id-1].price*(item.cnt)
        noOfItems=noOfItems+1
    }

    useEffect(()=>{
        console.log("Details Updated")
    },[changePriceDetails])



    return ( 
        <div className='w-90 h-76 shadow-xl shadow-gray-300 bg-white sticky top-3'>
            <div className='h-11 mb-3 px-7 text-gray-600 text-bold text-lg shadow-sm flex items-center'>
                <h1>PRICE DETAILS</h1>
            </div>
            <div className='table-auto px-5 pb-5 shadow-sm'>
                <thead>
                    <th className='w-70 text-left ' ></th>
                    <th className='w-30 text-center'></th>
                </thead>
                <tbody>
                    <tr className='h-10'>
                        <td><h1 className='text-lg'>Price ({noOfItems} items)</h1></td>
                        <td className='text-lg text-right'><h1 className='test-xl'>₹ {cp}</h1></td>
                    </tr>
                    <tr className='h-10'>
                        <td><h1 className='text-lg'>Discount</h1></td>
                        <td className='text-lg text-right text-green-700'><h1>- ₹ {cp-sp}</h1></td>
                    </tr>
                    <tr>
                        <td><h1 className='text-lg'>Delivery Charges</h1></td>
                        <td><h1 className='text-lg text-right text-green-700'>Free</h1></td>
                    </tr>
                </tbody>   
            </div>
            <div className='p-5 shadow-sm'>
                <thead>
                    <th className='w-70' ></th>
                    <th className='w-30'></th>
                </thead>
                <tbody>
                    <tr>
                        <td><h1 className='text-xl text-left'>Total Amount</h1></td>
                        <td><h1 className='text-lg text-right'>₹{sp}</h1></td>
                    </tr>
                </tbody> 
            </div>
            <div className='px-5 py-3 shadow-sm'>
                <h1 className='text-lg text-green-700'>You will save ₹{cp-sp} on this order</h1>
            </div>
        </div>
     );
}

export default PriceDetails;