import React from 'react'
import line from '../assets/line.png';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='bg-blackk text-white'>
            <div className='flex'>
                <div className='pt-20 pl-16'>
                    <h1 className='font-Plus-Jakarta-Sans font-bold text-4xl'>Our application is beyond <br /> the wave</h1>
                    <p className='font-Montserrat pt-4 font-semibold text-sm text-footer-p'>Designed to make it easy for developers using a complex API <br />allows you to build innovative solutions </p>

                    <h2 className='font-Plus-Jakarta-Sans font-extrabold text-xl pt-10'>BLOG DEV</h2>
                    <p className='font-Plus-Jakarta-Sans font-bold text-xs pt-10'>Comply with Zatca's e-invoicing mandate for transparent <br />
                        operations. Following government rules and laws <br />
                        (compliance) is crucial. It ensures smooth business <br />
                        practices, avoiding tax-related troubles. Stay compliant <br />
                        with us!</p>
                </div>

                <div className='space-x-10 flex pt-44 pl-12 cursor'>
                    <div>
                        <h4 className='text-white mt-4 font-Plus-Jakarta-Sans font-extrabold text-base'>Complyance.io</h4>
                        <ul className='mt-4 text-white text-xs font-Plus-Jakarta-Sans font-normal space-y-2'>
                            <li className='hover:text-purpell'>Home</li>
                            <li className='hover:text-purpell'>Product</li>
                            <li className='hover:text-purpell'>What's New</li>
                            <li className='hover:text-purpell'>Pricing</li>
                            <li className='hover:text-purpell'>Enterprise</li>
                            <li className='hover:text-purpell'>Business</li>
                            <li className='hover:text-purpell'>Customer Success</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-white mt-4 font-Plus-Jakarta-Sans font-extrabold text-base'>About</h4>
                        <ul className='mt-4 text-white text-xs font-Plus-Jakarta-Sans font-normal space-y-2'>
                            <li className='hover:text-purpell'>Company</li>
                            <li className='hover:text-purpell'>Customers</li>
                            <li className='hover:text-purpell'>Careers</li>
                            <li className='hover:text-purpell'>Press</li>
                            <li className='hover:text-purpell'>Blog</li>
                            <li className='hover:text-purpell'>Sitemap</li>
                            <li className='hover:text-purpell'>Pricing FAQ</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-white mt-4 font-Plus-Jakarta-Sans font-extrabold text-base'>Resourse</h4>
                        <ul className='mt-4 text-white text-xs font-Plus-Jakarta-Sans font-normal space-y-2'>
                            <li className='hover:text-purpell'>Help Center</li>
                            <li className='hover:text-purpell'>Forum</li>
                            <li className='hover:text-purpell'>Support</li>
                            <li className='hover:text-purpell'>Developers & API</li>
                            <li className='hover:text-purpell'>Partners</li>
                            <li className='hover:text-purpell'>Events</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-white mt-4 font-Plus-Jakarta-Sans font-extrabold text-base'>Learn</h4>
                        <ul className='mt-4 text-white text-xs font-Plus-Jakarta-Sans font-normal space-y-2'>
                            <li className='hover:text-purpell'>ZATCA  E-Invoicing</li>
                            <li className='hover:text-purpell'>ERP Integration</li>
                            <li className='hover:text-purpell'>ERP Implementation</li>
                            <li className='hover:text-purpell'>ERP Customisation</li>
                            <li className='hover:text-purpell'>QR Code <br />
                                Generation</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-white mt-4 font-Plus-Jakarta-Sans font-extrabold text-base'>Workflow
                            <br />   Solutions</h4>
                        <ul className='mt-4 text-white text-xs font-Plus-Jakarta-Sans font-normal space-y-2'>
                            <li className='hover:text-purpell'>Phase-1</li>
                            <li className='hover:text-purpell'>Phase-2</li>
                            <li className='hover:text-purpell'>Phase-3</li>

                        </ul>
                    </div>
                </div>
            </div>

            <img src={line} alt="line" className='w-full pt-10 pb-2' />

            <div className='flex justify-between'>
                <ul className='flex flex-row space-x-10 pl-20 pb-2'>
                    <Link className='hover:text-purpell'>Privacy policy</Link>
                    <Link className='hover:text-purpell'>Terms and conditions</Link>
                    <Link className='hover:text-purpell'>Support</Link>
                </ul>

                <p className='pr-5'>Copyright 2023 @ compylance.io </p>

            </div>

        </div>
    )
}

export default Footer 