import React from 'react'
import react from '../assets/react.png';
import mongo from '../assets/mongo.png';
const Blogs = () => {
    return (
        <div className='bg-blogs-bg'>
            <h1 className='font-poppins font-semibold text-center pt-20 text-3xl'>Best Blogs</h1>

            <div>
                <div className='pt-5 space-y-5'>
                    <div className='flex justify-center space-x-10'>
                        <img src={react} alt="" className='w-100 h-44' />
                        <img src={mongo} alt="" className='w-100 h-44' />
                        <img src={react} alt="" className='w-100 h-44' />
                    </div>
                    <div className='flex justify-center space-x-10'>
                        <img src={react} alt="" className='w-100 h-44' />
                        <img src={mongo} alt="" className='w-100 h-44' />
                        <img src={mongo} alt="" className='w-100 h-44' />
                    </div>
                    <div className='flex justify-center space-x-10'>
                        <img src={react} alt="" className='w-100 h-44' />
                        <img src={mongo} alt="" className='w-100 h-44' />
                        <img src={react} alt="" className='w-100 h-44' />
                    </div>
                </div>
            </div>

            <div className='flex justify-center pt-16'>
                <button className="bg-purpell text-white px-12 py-2 ml-20 rounded-2xl font-poppins font-semibold">
                    See More
                </button>
            </div>

        </div>
    )
}

export default Blogs