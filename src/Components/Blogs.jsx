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
                    <div className='pt-5 md:space-y-5 space-y-2'>
                        <div className='flex md:flex-row flex-col items-center justify-center md:space-x-10 space-y-2'>
                            <img src={react} alt="" className='md:w-100 md:h-44 w-48 h-48' />
                            <img src={mongo} alt="" className='md:w-100 md:h-44 w-48 h-48' />
                            <img src={react} alt="" className='md:w-100 md:h-44 w-48 h-48' />
                        </div>
                        <div className='flex md:flex-row flex-col items-center md:justify-center md:space-x-10 space-y-2'>
                            <img src={react} alt="" className='md:w-100 md:h-44 w-48 h-48' />
                            <img src={mongo} alt="" className='md:w-100 md:h-44 w-48 h-48' />
                            <img src={mongo} alt="" className='md:w-100 md:h-44 w-48 h-48' />
                        </div>
                        <div className='flex md:flex-row flex-col items-center md:justify-center md:space-x-10 space-y-2'>
                            <img src={react} alt="" className='md:w-100 md:h-44 w-48 h-48' />
                            <img src={mongo} alt="" className='md:w-100 md:h-44 w-48 h-48' />
                            <img src={react} alt="" className='md:w-100 md:h-44 w-48 h-48' />
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
            {/* <div className="flex justify-center items-center mt-20 pb-24">
                <div className="relative w-80 h-96 md:w-4/6 md:h-72 bg-purpell rounded-lg">
                    
                    <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center text-white p-4 z-20">
                        <h1 className="text-2xl font-bold mb-2 pt-5">Blogs</h1>
                        <h2 className='text-black text-lg pt-3 pb-5 font-normal'>Our Best Blog Related to Technology</h2>
                        <p className='text-sm px-8 leading-5 items-center'>Our employees are our number one asset. Our goal is to recruit the best candidates in the industry and retain them for a long,
                            progressive career. HBK is a fast-paced, team-centered environment with unlimited growth potential. Our long list of established
                            clients provides employees with the opportunity to work on dynamic and challenging projects every day. We offer an exciting and
                            gainful work environment encouraging professional, personal and organizational growth. Our team of multi-talented employees
                            contributes to an entrepreneurial-minded atmosphere where ideas, creativity and solutions are cultivated.</p>
                    </div>
                    
                    <img
                        src={girl}
                        alt="Background Image"
                        className="absolute inset-0 w-full h-full object-cover rounded-md z-10"
                    />
                </div>
            </div> */}

            <div className="flex justify-center items-center mt-20">
                <div
                    style={{ backgroundImage: `url(${girl})` }}
                    className="bg-cover bg-center w-3/5 md:h-64 mb-20 rounded-lg"
                >
                    <div className=" w-full h-full bg-[#6268F5] bg-opacity-50 rounded-lg">
                        <div className="flex flex-col justify-center items-center text-center mx-5 pb-4 md:mx-20">
                            <h2 className="text-white font-bold text-3xl mt-5">Blogs </h2>
                            <h4 className="text-xl font-normal my-5">Our Best Blog Related to Technology</h4>
                            <p className=" text-white text-xs leading-4">
                                Our employees are our number one asset. Our goal is to recruit the
                                best candidates in the industry and retain them for a long,
                                progressive career. HBK is a fast-paced, team-centered environment
                                with unlimited growth potential. Our long list of established
                                clients provides employees with the opportunity to work on dynamic
                                and challenging projects every day. We offer an exciting and
                                gainful work environment encouraging professional, personal and
                                organizational growth. Our team of multi-talented employees
                                contributes to an entrepreneurial-minded atmosphere where ideas,
                                creativity and solutions are cultivated.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials */}


            <div className='bg-purpell'>
                <h1 className='flex justify-center text-white pt-16 font-semibold text-3xl font-poppins'>Testimonials</h1>

                <div className="flex md:flex-row flex-col items-center justify-center pt-12 space-y-4 md:space-x-8">
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
                <div className='flex justify-center md:pt-16 pt-12 mr-20 pb-20'>
                    <button className="bg-white text-purpell px-12 py-3 ml-20 rounded-xl font-poppins font-semibold">
                        More News
                    </button>
                </div>

            </div>


        </div>
    )
}

export default Blogs