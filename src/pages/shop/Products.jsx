import React, { useState } from 'react'
import { products } from '../../utils/products'
import ProductsCard from './ProductsCard'
import btnIcon from "../../assets/button-icon.png"

const Products = ({ headLine }) => {

    const categories = ["Chair", "Beds", "Sofa", "Lamp"]
    const [selectedCategory, setSelectedCategory] = useState("Chair");
    const [visibleProducts, setVisibleProducts] = useState(4)
    const filteredProducts = products.filter((product) => product.category === selectedCategory)

    const loadMoreProducts = () => {
        setVisibleProducts((prev) => prev + 4)
    }

    return (
        <div>
            <div className='section-container'>
                <h2 className='my-8 text-4xl font-bold text-center'>{headLine}</h2>
                {/* category tab */}
                <div className='bg-[#EEEEEE] max-w-md mx-auto sm:rounded-full md:p-2.5 py-5 mb-16'>
                    <div className='flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-between'>
                        {
                            categories.map((category, index) => (
                                <button onClick={() => {
                                    setSelectedCategory(category);
                                    setVisibleProducts(4);
                                }} key={category} className={`py-1.5 sm:px-5 px-8 rounded-full hover:bg-primary transition-colors hover:text-white ${selectedCategory === category ? 'bg-white text-primary' : 'text-secondary'}`}>{category}</button>
                            ))
                        }
                    </div>
                </div>
                {/* product grid */}
                <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4'>
                    {
                        filteredProducts.slice(0, visibleProducts).map((product, index) => (
                            <ProductsCard key={index} product={product} />
                        ))
                    }
                </div>
                {/* load more button */}
                {
                    visibleProducts < filteredProducts.length && (
                        <div className='flex items-center justify-center mt-8'>
                            <button onClick={loadMoreProducts} className='flex items-center gap-1 text-base font-semibold text-primary'>View All<img src={btnIcon} alt="btn icon" />
                            </button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Products