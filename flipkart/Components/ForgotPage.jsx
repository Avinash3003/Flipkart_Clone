import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function ForgotPage() {

    const nav = useNavigate();
    const [email, setEmail] = useState("");
    const [otp, setOTP] = useState();
    const [otpGenerated, setOTPGenerated] = useState();
    const [confirmPress, setConfirmPress] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");

    const [errSpan, setErrSpan] = useState("");
    const [successSpan, setSuccessSpan] = useState("");


    const handleOTPClick =async()=>{

        if(!email){
            setErrSpan("Email Required");
            return;
        }

        try{
            const response = await axios.post('http://localhost:4000/send-otp',{email,text:"forget"})
            // console.log(response?.data);
            setSuccessSpan(response?.data?.message)
            setOTPGenerated(response?.data?.otpGenerated)
        }catch(err){
            // console.log(err?.response);
            setErrSpan(err?.response?.data?.message)
        }
    }

    const handleConfirmClick = async() => {

        setSuccessSpan("")
        setErrSpan("")

        if(!email){
            setErrSpan("Email Required");
            return;
        }
        
        if(!otp){
            setErrSpan("OTP required");
            return;
        }

        try{

            const response = await axios.post('http://localhost:4000/verify-otp',{email,otp,otpGenerated})
            setSuccessSpan(response?.data?.message);
            setTimeout(()=>{
                setSuccessSpan('');
                setConfirmPress(true);
            },2000);

        }catch(err){
            setErrSpan(err?.response?.data?.message);
        }
    }


    const handlePasswordClick = async()=>{

        if(!password || !confirmpassword){
            setErrSpan("Fill both the fields")
            return;
        }

        if(password!==confirmpassword){
            setErrSpan("password Mis-Match")
            return;
        }

        try{

            const response = await axios.post("http://localhost:4000/update-password",{email,password});
            setSuccessSpan(response?.data?.message)
            setTimeout(()=>{
                nav('/login')
            },1300)

        }catch(err){
            setErrSpan("Something went Wrong")
        }


    }






    return (
        <div >

            <div className='p-6 mt-19 ml-130 w-120 bg-gray-100  shadow-amber-600 shadow-lg rounded-2xl  text-center'>
                {!confirmPress ? (
                    <div className="">
                        <h1 className='text-3xl text-green-600 font-bold '>Forgot Page</h1>

                        <div>
                            <p className='text-lg text-amber-600 font-light '>Lost you Password? Enter you mail I'll send otp</p>
                        </div>

                        <div className='mb-3'>
                            <label className='font-medium text-lg'>Email</label><br />
                            <input type='email' placeholder='Enter Email' onChange={(event) => setEmail(event.target.value)} value={email} className='border-2 bg-white pl-2 rounded-md w-70 h-8' />
                            <button onClick={handleOTPClick} className='bg-blue-500 ml-2 px-2 h-8 active:bg-sky-500 rounded-lg cursor-pointer text-white'>OTP</button>
                        </div>
                        <div className='mb-1'>
                            <label className='font-medium text-lg'>One-Time Password</label><br />
                            <input type='tel' placeholder='Enter otp ' onChange={(event) => setOTP(event.target.value)} value={otp} className='mr-13 bg-white border-2 pl-2 rounded-md w-70 h-8' />
                        </div>

                        <span className='text-red-500 text-lg font-mono block'>{errSpan}</span>
                        <span className='text-green-500 text-lg font-mono block'>{successSpan}</span>


                        <button onClick={handleConfirmClick} className='bg-orange-600 px-2 my-3 text-xl font-semibold cursor-pointer active:bg-pink-500 rounded-lg text-white'>Confirm</button>
                    </div>
                ) : (
                    <div>
                        <div className='mb-1'>
                            <label className='font-medium text-lg text-gray-700'>New Password</label><br />
                            <input type='password' placeholder='password' onChange={(event) => setPassword(event.target.value)} value={password} className='mr-13 border-2 pl-2 rounded-md w-70 h-8' />
                        </div>

                        <div className='mb-1'>
                            <label className='font-medium text-lg text-gray-700'>Confirm New Password</label><br />
                            <input type='password' placeholder='Confirm Password' onChange={(event) => setConfirmPassword(event.target.value)} value={confirmpassword} className='mr-13 border-2 pl-2 rounded-md w-70 h-8' />
                        </div>

                        <span className='text-red-500 text-lg font-mono block'>{errSpan}</span>
                        <span className='text-green-500 text-lg font-mono block'>{successSpan}</span>

                        <button onClick={handlePasswordClick} className='bg-green-700 px-2 my-3 text-xl font-semibold active:bg-sky-400 rounded-lg text-white'>Confirm</button>
                    </div>
                )
                }

            </div>
        </div>
    )
}

export default ForgotPage