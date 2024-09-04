import React from 'react';
import logo from '../assets/logo.png'

const Navbar = () => {

    return (
        <div className="bg-white border-b border-gray-500 sticky top-0 left-0 right-0 z-40 flex justify-center">
            <div
                className="wrapper flex flex-row md:flex-col gap-5 justify-between items-center py-3 l xl:flex-row w-[70rem]">
                <div className="w-[250px]">
                    <a href="https://chaardham.in/"><img src={logo} alt="chardham logo" className="" /></a>
                </div>
                <nav className="hidden md:block max-[70rem]">
                    <ul className="flex items-center gap-10">
                        <li className="relative group">
                            <span className="link flex items-center gap-1 cursor-pointer">ABOUT CHAARDHAM
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512"
                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z">
                                    </path>
                                </svg></span>
                            <ul
                                className="z-10 dropdown absolute p-2 border bg-white shadow-md min-w-[200px] top-8 left-0 -translate-x-[10%] rounded-md flex flex-col gap-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-500">
                                <li className="link">
                                    <a href="https://chaardham.in/about-us">About Us</a>
                                </li>
                                <li className="link">
                                    <a href="https://chaardham.in/maa-vaishno-devi-dham">Maa Vaishno Devi Dham</a>
                                </li>
                                <li className="link">
                                    <a href="https://chaardham.in/shani-dham">Shani Dham</a>
                                </li>
                                <li className="link">
                                    <a href="https://chaardham.in/radha-krishna-dham">Radha Krishna Dham</a>
                                </li>
                                <li className="link">
                                    <a href="https://chaardham.in/shiv-dham">Shiv Dham</a>
                                </li>
                                <li className="link">
                                    <a href="https://chaardham.in/managing-trustee">Managing Trustee</a>
                                </li>
                            </ul>
                        </li>
                        <li className="link">
                            <a href="https://chaardham.in/facilities">FACILITIES</a>
                        </li>
                        <li className="link">
                            <a href="https://chaardham.in/donation">DONATION</a>
                        </li>
                        <li className="relative group/item">
                            <span className="link flex items-center gap-1 cursor-pointer">ONLINE BOOKING
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512"
                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z">
                                    </path>
                                </svg></span>
                            <ul
                                className="z-10 dropdown absolute p-2 border bg-white shadow-md min-w-[220px] top-8 left-0 -translate-x-[10%] rounded-md flex flex-col gap-5 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible group-hover/item:translate-y-0 transition-all duration-500">
                                <li className="link">
                                    <a href="https://www.annekaadivinecentre.com/rooms">Room Booking</a>
                                </li>
                                <li className="link">
                                    <a href="https://www.annekaadivinecentre.com/halls">Hall Booking</a>
                                </li>
                                <li className="link">
                                    <a href="https://chaardham.in/puja-hawan-booking">Puja/Hawan Booking</a>
                                </li>
                                <li className="link">
                                    <a href="https://chaardham.in/online-services">Conference Booking</a>
                                </li>
                                <li className="link">
                                    <a href="https://chaardham.in/online-services">Religious Program</a>
                                </li>
                                <li className="link">
                                    <a href="https://chaardham.in/online-services">Marriage Booking</a>
                                </li>
                                <li className="link">
                                    <a href="https://chaardham.in/online-services">Yoga/Meditation Program</a>
                                </li>
                            </ul>
                        </li>
                        <button
                            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-[#a12c2f]"
                            type="button">
                            Sign up
                        </button>
                    </ul>
                </nav>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512"
                    className="cursor-pointer block md:hidden" height="30" width="30"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="48"
                        d="M88 152h336M88 256h336M88 360h336"></path>
                </svg>
            </div>
            <div tabIndex="1"
                className="fixed top-0 right-0 h-full w-[80%] bg-white z-50 transform translate-x-full transition-transform duration-700 md:hidden">
                <div className="flex justify-end p-4">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512"
                        className="cursor-pointer" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z">
                        </path>
                    </svg>
                </div>
                <nav className="p-4">
                    <ul className="flex flex-col items-start gap-5">
                        <li className="link"><a href="https://chaardham.in/">HOME</a></li>
                        <li className="link">
                            <a href="https://chaardham.in/about-us">ABOUT US</a>
                        </li>
                        <li className="link">
                            <a href="https://chaardham.in/maa-vaishno-devi-dham">MAA VAISHNO DEVI DHAM</a>
                        </li>
                        <li className="link">
                            <a href="https://chaardham.in/shani-dham">SHANI DHAM</a>
                        </li>
                        <li className="link">
                            <a href="https://chaardham.in/radha-krishna-dham">RADHA KRISHNA DHAM</a>
                        </li>
                        <li className="link">
                            <a href="https://chaardham.in/shiv-dham">SHIV DHAM</a>
                        </li>
                        <li className="link">
                            <a href="https://chaardham.in/facilities">FACILITIES</a>
                        </li>
                        <li className="relative group">
                            <span className="text-sm font-[500] flex items-center gap-1 cursor-pointer">ONLINE BOOKING
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512"
                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z">
                                    </path>
                                </svg></span>
                            <ul
                                className="dropdown transition-all p-2 border bg-white shadow-md min-w-[200px] mt-2 rounded-md flex flex-col gap-5 hidden">
                                <li className="link">
                                    <a href="https://www.annekaadivinecentre.com/rooms">Room Booking</a>
                                </li>
                                <li className="link">
                                    <a href="https://www.annekaadivinecentre.com/halls">Hall Booking</a>
                                </li>
                                <li className="link">
                                    <a href="https://chaardham.in/puja-hawan-booking">Puja/Hawan Booking</a>
                                </li>
                                <li className="link">
                                    <a href="https://chaardham.in/online-services">Conference Booking</a>
                                </li>
                                <li className="link">
                                    <a href="https://chaardham.in/online-services">Religious Program</a>
                                </li>
                                <li className="link">
                                    <a href="https://chaardham.in/online-services">Marriage Booking</a>
                                </li>
                                <li className="link">
                                    <a href="https://chaardham.in/online-services">Yoga/Meditation Program</a>
                                </li>
                            </ul>
                        </li>
                        <li className="link"><a href="https://chaardham.in/blog">BLOG</a></li>
                        <li className="link">
                            <a href="https://chaardham.in/managing-trustee">MANAGING TRUSTEE</a>
                        </li>
                        <li className="link">
                            <a href="https://chaardham.in/donation">DONATION</a>
                        </li>
                        <hr />
                        <div className="flex gap-5">
                            <button
                                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-primary"
                                type="button">
                                Sign up
                            </button>
                        </div>
                    </ul>
                </nav>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512"
                    className="cursor-pointer block md:hidden" height="30" width="30"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="48"
                        d="M88 152h336M88 256h336M88 360h336"></path>
                </svg>
            </div>
        </div>
    )
}

export default Navbar;