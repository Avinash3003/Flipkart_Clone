import React from 'react'
import { products } from '../data/Data'
import CategoryChild from './child/CategoryChild'

function Category() {

    const uniqueCat = [...new Set(products.map(item => item.category))]
    

    return (
        <div className='flex justify-center gap-20'>

            {
                uniqueCat.map(item=> <CategoryChild category={item}/>)
            }

        </div>
    )
}

export default Category