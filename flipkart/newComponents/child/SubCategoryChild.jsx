import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import { useNavigate,useLocation } from 'react-router-dom';
// import {ProductTypes} from '../data/branddata'

const SubCategoryChild = ({categoryWear,category}) => {

    const navigate=useNavigate();
    const location=useLocation();
    
    // console.log(`/category/${props.gendercat}/${props.name}`)
    const subCategoryTitle= (!(categoryWear.includes("'"))) ?  categoryWear.toLowerCase() : categoryWear.slice(0,categoryWear.indexOf("'")).toLowerCase()

    console.log(subCategoryTitle)
    // console.log(categoryWear,".....",category)

    const subCatData=location.state.categoryData
    const subCatDivision=subCatData.filter(item=> item.sub_category===categoryWear)
    // console.log(subCatDivision)
    



    return (
        <div>

            <Card className="w-50 h-80" onClick={()=>navigate(`/category/${category}/${subCategoryTitle}`,{state:{subCatDivision}})}>
                <CardHeader floated={false} className="h-80">
                    <img className='h-60 w-55 object-fit' src={`../images/newSubCategories/${subCategoryTitle}.jpg`} alt={`${subCategoryTitle}`} />
                </CardHeader>
                <CardBody className="text-center">
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                        {subCategoryTitle.toUpperCase()}
                    </Typography>
                </CardBody>

            </Card>

        </div>
    )
}

export default SubCategoryChild