import React from 'react';
import man from '../assets/man.png';
import man2 from '../assets/man2.png';

const Home = () => {
    return (
        <div>
            <div className="pt-36 pl-32 mx-auto flex items-center justify-center">
                {/* Text Content */}
                <div className="text-left mr-12">
                    <h1 className="font-poppins font-semibold text-6xl">
                        <span className="text-9xl">S</span>tay Curious
                    </h1>
                    <p className="font-blackk font-RadioCanada font-bold text-lg leading-7">
                        Discover stories, thinking, and expertise from <br />
                        writers on any topic.
                    </p>
                    <div className="text-left mt-4">
                        <button className="bg-purpell text-white px-8 py-3 rounded-xl font-poppins font-semibold">
                            Explore Projects
                        </button>
                    </div>
                </div>

                {/* Image */}
                <div className="flex-shrink-0">
                    <img src={man} alt="Man" className="w-100 h-80" />
                </div>
            </div>


            {/* Trending on Blog */}
            <div className="mt-5" >
                <h2 className="text-center mt-20 font-poppins font-semibold text-2xl leading-10">Trending on BlogDev</h2>
                <div className="grid grid-cols-2 gap-8 mt-12">
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
