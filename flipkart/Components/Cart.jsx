import { React, useState, useEffect } from 'react';
import axios from 'axios';
import CartItem from '../ChildComponents/cartItem';
import PriceDetails from '../ChildComponents/priceDetails';
import PlaceOrder from '../ChildComponents/placeorder';
import { products } from '../data/Data';

function Cart() {
    const [userCartData, setuserCartData] = useState(null);
    // const [changePriceDetails,setChangePriceDetails]=useState(false);



    useEffect(() => {

        const fetchCartData = async () => {
            const user = localStorage.getItem("user")
            try {
                const response = await axios.post('http://localhost:4000/cartdata', { user: user });
                console.log(response?.data?.userCartData);
                setuserCartData(response?.data?.userCartData)
            } catch (err) {
                console.log("Error in Retreive", err);
            }
        }

        fetchCartData();
    }, [])


    const handleRemoveItem = async (user, ref_id) => {
        try {
            const response = await axios.post('http://localhost:4000/removeitem', { user: user, ref_id: ref_id })
            console.log("Remove Item: ", response?.data)
            setuserCartData(prevState => ({
                ...prevState,
                cart: prevState.cart.filter(item => item.ref_id !== ref_id)
            }))

        } catch (err) {
            console.log("Remove Item Error:", err)

        }
    }

    const handlePriceDetailsChange = async (user,quantity,ref_id) => {

        try {
            const response = await axios.post('http://localhost:4000/changequantity', { user: user, quantity: quantity, ref_id:ref_id })
            console.log("quantitychange", response?.data)

            setuserCartData(prevState=>({
                ...prevState,
                cart: prevState.cart.map(item=>
                    item.ref_id===ref_id ? {...item,cnt:quantity} : item
                )
            }))

        } catch (err) {
            console.log("changingError:", err)

        }
    }


    if (!userCartData) {
        return (<p>Data Loading....</p>)
    }


    return (
        <div>

            {
                (userCartData && userCartData?.cart?.length > 0) ? (
                    <div className='flex mx-30 my-5'>
                        <div className='mr-10 w-220 pb-5 bg-white'>

                            {
                                userCartData.cart.map(item => <CartItem itemQuantity={item.cnt}
                                    cartItemDetails={products[item.ref_id - 1]}
                                    onRemove={handleRemoveItem}
                                    onChangePriceDetails={handlePriceDetailsChange}
                                />)
                            }

                            <PlaceOrder />

                        </div>
                        <div>
                            <PriceDetails userCartData={userCartData}/>
                        </div>
                    </div>



                ) : (
                    // <p>Empty Cart</p>

                    <div className='relative w-full h-176 bg-gray-200 '>

                        <img className='absolute top-50 left-100' src='/images/EmptyCart2.webp' alt='CartEmpty' width={300} height={300} />
                        <h1 className='font-bold text-3xl ml-100 pt-5 '><span className='text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-gray-600 to-green-600'>Cart Empty :( </span></h1>


                    </div>



                )


            }

        </div>
    );

}

export default Cart;