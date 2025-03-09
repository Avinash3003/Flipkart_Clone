import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import TitleCategoryChild from './child/TitleCategoryChild'
import Header from '../Components/Header'

function TitleCategory() {

  const { category, subCategory } = useParams()
  const location = useLocation()

  const { subCatDivision } = location.state

  // console.log(subCatDivision)

  console.log(category, subCategory, subCatDivision[0].title)



  return (
    <>
    <Header/>
    <div className='grid grid-cols-5 gap-20 p-15 '>

      {
        subCatDivision.map(item => <TitleCategoryChild itemName={item.title} itemDetails={item} />)
      }

    </div>
    </>

  )
}

export default TitleCategory