import React from 'react'
import { getImgUrl } from '../../utils/getImageURL'
import Rating from '../../components/Rating'
import { FiPlus } from "react-icons/fi";

const ProductsCard = ({ product }) => {
    return (
        <div>
            <div className='bg-[#FAFAFA]'>
                <img src={getImgUrl(`${product.imageUrl}`)} alt="" />
            </div>
            <div className='p-6 bg-white shadow-sm dark:bg-black'>
                <h4 className='mb-1 text-base'>{product.category}</h4>
                <h3 className='mb-2 text-xl font-semibold'>{product.name}</h3>
                <Rating rating={product.rating} />
                <div className='flex items-center justify-between mt-5'>
                    <p className='text-lg font-bold text-secondary dark:text-white'><sup>$</sup><span>{product.price}</span></p>
                    <button className='p-2 text-white bg-black rounded-full hover:bg-secondary'>{<FiPlus />}</button>
                </div>
            </div>
        </div>
    )
}

export default ProductsCard