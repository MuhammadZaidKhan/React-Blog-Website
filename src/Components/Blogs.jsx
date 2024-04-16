import React from 'react'
import react from '../assets/react.png';
import mongo from '../assets/mongo.png';
import girl from '../assets/girl.png';
import man3 from '../assets/man3.png';
import man4 from '../assets/man4.png';
import man5 from '../assets/man5.png';
const Blogs = () => {
    return (
        <div>
            {/* Best Blogs */}
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

                <div className='flex justify-center pt-16 pb-8 mr-20'>
                    <button className="bg-purpell text-white px-12 py-2 ml-20 rounded-2xl font-poppins font-semibold">
                        See More
                    </button>
                </div>

            </div>


            {/* Blogs */}
            <div className="flex justify-center mt-20 pb-24">
                <div className="relative w-4/6 h-72 bg-purpell rounded-lg">
                    {/* Text Content */}
                    <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center text-white p-4 z-20">
                        <h1 className="text-2xl font-bold mb-2 pt-5">Blogs</h1>
                        <h2 className='text-black text-lg pt-3 pb-5 font-normal'>Our Best Blog Related to Technology</h2>
                        <p className='text-sm px-8 leading-5 items-center'>Our employees are our number one asset. Our goal is to recruit the best candidates in the industry and retain them for a long,
                            progressive career. HBK is a fast-paced, team-centered environment with unlimited growth potential. Our long list of established
                            clients provides employees with the opportunity to work on dynamic and challenging projects every day. We offer an exciting and
                            gainful work environment encouraging professional, personal and organizational growth. Our team of multi-talented employees
                            contributes to an entrepreneurial-minded atmosphere where ideas, creativity and solutions are cultivated.</p>
                    </div>
                    {/* Background Image (as CSS background) */}
                    <img
                        src={girl}
                        alt="Background Image"
                        className="absolute inset-0 w-full h-full object-cover rounded-md z-10"
                    />
                </div>
            </div>

            {/* Testimonials */}


            <div className='bg-purpell'>
                <h1 className='flex justify-center text-white pt-16 font-semibold text-3xl font-poppins'>Testimonials</h1>

                <div className="flex justify-center pt-12 space-x-8">
                    <div className="relative w-52 h-56 bg-white rounded-lg overflow-hidden">
                        {/* Image */}
                        <img
                            src={man3}
                            alt="Profile"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        {/* Text Container */}
                        <div className="absolute pt-40 text-black pl-2">
                            <h2 className="text-sm font-semibold">Mr. John</h2>
                            <p className='text-xs font-normal pt-3'>Best Blog Website for Reading Blogs</p>
                        </div>
                    </div>
                    <div className="relative w-52 h-56 bg-white rounded-lg overflow-hidden">
                        {/* Image */}
                        <img
                            src={man4}
                            alt="Profile"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        {/* Text Container */}
                        <div className="absolute pt-40 text-black pl-2">
                            <h2 className="text-sm font-semibold">Mr David</h2>
                            <p className='text-xs font-normal pt-3'>Best Blog Website for Reading Blogs</p>
                        </div>
                    </div>
                    <div className="relative w-52 h-56 bg-white rounded-lg overflow-hidden">
                        {/* Image */}
                        <img
                            src={man5}
                            alt="Profile"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        {/* Text Container */}
                        <div className="absolute pt-40 text-black pl-2">
                            <h2 className="text-sm font-semibold">Mr Salil</h2>
                            <p className='text-xs font-normal pt-3'>Best Blog Website for Reading Blogs</p>
                        </div>
                    </div>

                </div>
                <div className='flex justify-center pt-16 mr-20 pb-20'>
                    <button className="bg-white text-purpell px-12 py-3 ml-20 rounded-xl font-poppins font-semibold">
                        More News
                    </button>
                </div>

            </div>


        </div>
    )
}

export default Blogs