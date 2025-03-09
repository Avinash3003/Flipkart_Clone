
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../Components/Home"
import Login from "../Components/Login"
import Signup from "../Components/Signup"
import Cart from "../Components/Cart"
import SubCategory from "../newComponents/subCategory"
import TitleCategory from "../newComponents/TitleCategory"
import ProductInfo from "../newComponents/ProductInfo"
import ForgotPage from "../Components/ForgotPage"


function App() {

    return (
        <div>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path="/forgot-password" element={<ForgotPage/>}/>
                    <Route path='/signup' element={<Signup />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="category/:category" element={<SubCategory />} />
                    <Route path="category/:category/:subCategory" element={<TitleCategory />} />
                    <Route path="category/:category/:subCategory/:itemName" element={<ProductInfo />} />
                </Routes>
            </BrowserRouter>





        </div>
    )


}

export default App
