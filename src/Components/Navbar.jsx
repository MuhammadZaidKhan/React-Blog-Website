import { Link } from 'react-router-dom'
import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Navlogo from '../assets/Navlogo.png'
export default function Header() {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <>
            {/* Desktop Navbar */}
            <div className="sticky top-0 w-full h-20 shadow-md z-[100] bg-white">
                <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16 py-10">
                    <Link to='/'>
                        <img
                            src={Navlogo}
                            alt=""
                        />
                    </Link>
                    {/* <div>
                        <div onClick={handleNav} className="md:hidden">
                            <AiOutlineMenu size="20" />
                        </div>
                    </div> */}
                </div>
                {/* Mobile Nav */}
                <div
                    className={`${nav
                        ? 'md:hidden fixed left-0 top-0 w-full h-screen'
                        : ''
                        }`}
                >
                    <div
                        className={`${nav
                            ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500'
                            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                            }`}
                    >
                        <div className="flex w-full items-center justify-between">
                            <Link to='/'>
                                <img
                                    src={Navlogo}
                                    alt=""
                                    width={100}
                                    height={100}

                                />
                            </Link>
                            <div
                                onClick={handleNav}
                                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                            >
                                <AiOutlineClose />
                            </div>
                        </div>

                        <div className="py-4 flex flex-col">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}