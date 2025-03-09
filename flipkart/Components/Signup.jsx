import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneno, setPhoneno] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const [otp, setOTP] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [otpVerified,setOTPVerified]= useState(false)
    const [showOTPField, setShowOTPField] = useState(false);
    const [otpGenerated,setOTPGenerated]=useState(0);

    const nav=useNavigate();

    const handleVerifyClick = async () => {
        if (!email) {
            setErrorMsg('Please enter your email first.');
            setTimeout(()=>{
                setErrorMsg('')
            },3000)
            return;
        }

        try {
            const response = await axios.post("http://localhost:4000/send-otp", { email });
            setSuccessMsg(response.data.message);
            setTimeout(()=>{
                setSuccessMsg("")
            },2000)
            setOTPGenerated(response?.data?.otpGenerated);
            setShowOTPField(true); 
        } catch (err) {
            setErrorMsg(err.response?.data?.message || 'Error sending OTP.');
        }
    };


    const handleOTPSubmit = async () => {
        try {
            const response = await axios.post("http://localhost:4000/verify-otp", { email,otp, otpGenerated });
            // alert(response.data.message);
            setSuccessMsg(response?.data?.message)
            setTimeout(()=>{
                setSuccessMsg("")
            },3000)
            setOTPVerified(true)
            document.getElementById('otpStatus').innerHTML="✅"
            document.getElementById('otpStatus').style.backgroundColor="white"
            document.getElementById('otpStatus').onclick=""
        } catch (err) {
            // console.log("Error OTP:",err?.response.data.message)
            setErrorMsg(err?.response.data.message)
            setTimeout(()=>{
                setErrorMsg("");
            },3000)
            document.getElementById('otpStatus').innerHTML="❌"
            document.getElementById('otpStatus').style.backgroundColor="green"

        }
    };

    const handleSignup = async (event) => {
        event.preventDefault();
        
        if(!otp || !otpVerified){
            setErrorMsg('Please Verify Email or Invalid OTP');
            setTimeout(()=>{
                setErrorMsg("")

            },2000)
            return;
        }

        


        if (!name || !email || !phoneno || !password || !confirmpassword || !otp) {
            setErrorMsg('Please fill all fields.');
            setTimeout(()=>{
                setErrorMsg("")

            },2000)
            return;
        }

        if (password !== confirmpassword) {
            setErrorMsg("Passwords don't match.");
            setTimeout(()=>{
                setErrorMsg("")

            },2000)
            return;
        }

        const payload = {
            username: name,
            email: email,
            phoneno: phoneno,
            password: password,
            confirmpassword: confirmpassword
        }

        try {
            console.log("Entered")
            const response = await axios.post("http://localhost:4000/signup",payload);
            setSuccessMsg(response?.data?.message); 
            setErrorMsg('');
            setShowOTPField(false);
            setName('');
            setEmail('');
            setPhoneno('');
            setPassword('');
            setConfirmpassword('');
            setOTP('');

            nav('/login')
        } catch (err) {
            console.log("err::::",err)
            setErrorMsg(err.response?.data?.message || 'Signup failed.');
            setTimeout(()=>{
                setErrorMsg("")
            },2000)
            return;
        }
        
    };


    return (
        <div className="flex flex-col items-center mt-5">
            <h4 className="text-xl font-medium text-slate-800">Sign Up</h4>
            <form className="mt-8 w-80 sm:w-96" onSubmit={handleSignup}>
                <div className="flex flex-col gap-4">
                    <div>
                        <label className="text-sm text-slate-600">User Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                            className="w-full border rounded-md p-2" placeholder="Your Name" />
                    </div>

                    <div>
                        <label className="text-sm text-slate-600">Email</label>
                        <div className="flex items-center gap-2">
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                                className="w-full border rounded-md p-2" placeholder="Your Email" />
                            <button type="button" onClick={handleVerifyClick}
                                className="bg-green-600 text-white px-3 py-1 rounded-md active:bg-green-900">Verify
                            </button>
                        </div>
                    </div>

                    {showOTPField && (
                        <div>
                            <label className="text-sm text-slate-600">OTP</label>
                            <div className="flex items-center gap-2">
                                <input type="text" value={otp} onChange={(e) => setOTP(e.target.value)}
                                    className="w-full border rounded-md p-2" placeholder="Enter OTP" />
                                <button type="button" id='otpStatus' onClick={handleOTPSubmit} className="bg-blue-600 text-white px-3 py-1 rounded-md active:bg-blue-800 ">Validate</button>
                            </div>
                        </div>
                    )}

                    <div>
                        <label className="text-sm text-slate-600">Phone Number</label>
                        <input type="tel" value={phoneno} onChange={(e) => setPhoneno(e.target.value)}
                            className="w-full border rounded-md p-2" placeholder="Your Phone Number" />
                    </div>

                    <div>
                        <label className="text-sm text-slate-600">Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                            className="w-full border rounded-md p-2" placeholder="Your Password" />
                    </div>

                    <div>
                        <label className="text-sm text-slate-600">Confirm Password</label>
                        <input type="password" value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)}
                            className="w-full border rounded-md p-2" placeholder="Confirm Password" />
                    </div>

                    <button type="submit" className="bg-slate-800 text-white p-2 rounded-md">Sign Up</button>

                    {errorMsg && <span className="text-red-600 text-xs">{errorMsg}</span>}
                    {successMsg && <span className="text-green-600 text-xs">{successMsg}</span>}

                    <p className="text-sm text-slate-600">
                        Have an account? <a href="/login" className="text-slate-700 underline">Login</a>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Signup;