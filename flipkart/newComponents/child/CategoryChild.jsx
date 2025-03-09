import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';
import { products } from '../../data/Data';

function CategoryChild({ category }) {
    const navigate=useNavigate();
    const categoryData= products.filter((item)=> item.category===category)
    // console.log(categoryData)
    return (
        <div>

            <Card
                onClick={()=>navigate(`/category/${String(category).toLowerCase()}`,{state:{categoryData}})}
                shadow={false}
                className="hover:scale-110 hover:duration-300 relative grid h-[12rem] w-54 max-w-[28rem] items-end justify-center overflow-hidden text-center"
            >
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="absolute inset-0 m-0 h-full w-full rounded-none  bg-cover bg-center"
                    style={{ backgroundImage: `url(../images/newCategory/${category}.jpg)` }}
                >
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                </CardHeader>
                <CardBody className="relative py-14 px-6 md:px-12">
                    <Typography
                        variant="h2"
                        color="white"
                        className="mb-6 font-medium leading-[1.5]"
                    >
                        {category}
                    </Typography>

                </CardBody>
            </Card>





        </div>
    )
}

export default CategoryChild