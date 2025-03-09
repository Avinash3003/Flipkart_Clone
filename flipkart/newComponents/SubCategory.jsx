import React from 'react'
import Header from '../Components/Header';
import { useLocation,useParams } from 'react-router-dom'
import SubCategoryChild from './child/SubCategoryChild';

function SubCategory() {

    const {category}=useParams();
    const location=useLocation();
    // console.log(location)
    const subCatData=location.state.categoryData
    // console.log(category,subCatData)

    const categoryWear = [...new Set(subCatData.map(item => item.sub_category))]
    // console.log(categoryWear)
    


  return (
    <>
    <Header/>
    <div className='grid grid-cols-4 gap-y-7 bg-amber-100 p-5'>


        {
            categoryWear.map((item)=> <SubCategoryChild  category={category} categoryWear={item}/>)
        }


    </div>
    </>
  )
}

export default SubCategory