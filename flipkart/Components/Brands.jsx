
import React from 'react';
import { brandData } from '../data/branddata';
import Brand from './Brand';
import '../src/index.css'


export default function Brands(){

    return(
        <div className='flex justify-center gap-9 my-2.5'>

            {
                brandData.map(item=> <Brand name={item}/>)
            }

            {/* <h1 className="text-red-500">Hello Tailwind</h1> */}

        </div>
    );

}


