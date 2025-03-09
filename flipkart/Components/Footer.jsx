import React from 'react'

import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';


function Footer() {
  return (
    <div className='bg-stone-900 mt-7 text-white font-medium text-sm rounded-3xl'>

        <div className='flex p-5 mt-6 justify-around'>

            <div>
                <p className='mb-5 font-normal text-gray-500'>ABOUT</p>
                
                <p>Contact Us</p>
                <p>About Us</p>
                <p>Careers</p>
                <p>Corporate Information</p>
            </div>

            <div>
                <p className='mb-5 font-normal text-gray-500'>GROUP COMPANIES</p>
                <p>Myntra</p>
                <p>Cleartrip</p>
                <p>Shopsy</p>

            </div>

            <div>
                <p className='mb-5 font-normal text-gray-500'>HELP</p>
                <p>Payments</p>
                <p>Shipping</p>
                <p>Cancellation & Returns</p>
                <p>FAQ</p>

            </div>

            <div>
                <p className='mb-5 font-normal text-gray-500'>CONSUMER POLICY</p>
                <p>Cancellation & Returns</p>
                <p>Terms of use</p>
                <p>Security</p>
                <p>Privacy</p>
            </div>

        </div>

        <div className='text-center pb-3'>
            <h1 className='text-lg'>Social:</h1>
            <div className='  flex justify-center gap-5'>
                <span><FacebookIcon/></span>
                <span><XIcon/></span>
                <span><YouTubeIcon/></span>
                <span><InstagramIcon/></span>
            </div>
        </div>



    </div>
  )
}

export default Footer
