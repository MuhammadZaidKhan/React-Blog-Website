import React from 'react';
import man from '../assets/man.png';
import man2 from '../assets/man2.png';

const Home = () => {
    return (
        <div className='pb-10'>
            <div className="pt-12 md:pt-36 md:pl-32 flex items-center justify-center">
                {/* Text Content */}
                <div className="md:pl-0 pl-6">
                    <h1 className="font-poppins font-semibold text-3xl md:text-6xl">
                        <span className="text-4xl md:text-9xl">S</span>tay Curious
                    </h1>
                    <p className="text-start w-52 md:w-80 font-blackk font-RadioCanada font-bold text-sm md:text-lg md:leading-7">
                        Discover stories, thinking, and expertise from
                        writers on any topic.
                    </p>
                    <div className="text-left mt-4">
                        <button className="bg-purpell text-white px-3 py-1 md:px-8 md:py-3 rounded-xl font-poppins font-bold">
                            Explore Projects
                        </button>
                    </div>
                </div>

                {/* Image */}
                <div className="flex-shrink-0">
                    <img src={man} alt="Man" className="w-50 h-24 md:w-100 md:h-80" />
                </div>
            </div>


            {/* Trending on Blog */}
            <div className="mt-5" >
                <h2 className="text-center mt-20 font-poppins font-semibold text-2xl leading-10">Trending on BlogDev</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-12">
                    <div className='flex justify-center'>
                        <span className='font-poppins semibold text-xl mr-3'>01</span>
                        <p className='font-poppins font-light'>
                            Alex Klein in UX Collective <br />
                            <span className='font-semibold'>
                                Prompts should be designed — not <br />
                                engineered <br />
                            </span>
                            Apr 2, 2024  6 min read
                        </p>
                    </div>
                    <div className='flex justify-center'>
                        <span className='font-poppins semibold text-xl mr-3'>02</span>
                        <p className='font-poppins font-light'>
                            Alex Klein in UX Collective <br />
                            <span className='font-semibold'>
                                Prompts should be designed — not <br />
                                engineered <br />
                            </span>
                            Apr 2, 2024  6 min read
                        </p>
                    </div>
                    <div className='flex justify-center'>
                        <span className='font-poppins semibold text-xl mr-3'>03</span>
                        <p className='font-poppins font-light'>
                            Alex Klein in UX Collective <br />
                            <span className='font-semibold'>
                                Prompts should be designed — not <br />
                                engineered <br />
                            </span>
                            Apr 2, 2024  6 min read
                        </p>
                    </div>
                    <div className='flex justify-center'>
                        <span className='font-poppins semibold text-xl mr-3'>04</span>
                        <p className='font-poppins font-light'>
                            Alex Klein in UX Collective <br />
                            <span className='font-semibold'>
                                Prompts should be designed — not <br />
                                engineered <br />
                            </span>
                            Apr 2, 2024  6 min read
                        </p>
                    </div>
                </div>
            </div>

            {/* Sectionn 3 */}

            <div className='flex mt-48'>
                <div className='pl-36'>
                    <img src={man2} alt="Man2" className='w-100 h-72' />
                </div>
                <div className='pl-36 pt-20 space-y-4'>

                    <h1 className='font-semibold text-3xl font-custom-black'>Short And Informative Blogs</h1>
                    <p className='font-blackk font-poppins font-bold text-sm leading-7'>Discover stories, thinking, and expertise from <br /> writers on any topic.</p>

                    <div className='content-center'>
                        <button className="bg-purpell text-white px-8 py-2 ml-20 rounded-xl font-poppins font-semibold">
                            Explore Projects
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;
