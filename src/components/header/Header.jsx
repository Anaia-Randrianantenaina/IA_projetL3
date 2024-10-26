import React from "react";

const Header = () => {
    return (
        <>
            <div className="w-full h-[50px] bg-white shadow-xl fixed top-0 left-0 z-50 transition duration-300 ease-in-out">
                <div className="flex justify-between items-center h-full px-4 md:px-10">
                    {/* Titre */}
                    <div>
                        <h1 className="text-[24px] md:text-[30px] text-gray-600 font-bold transition-transform duration-300 hover:scale-105">
                            <a href="#home" className="nav__link active-link animate-pulse">
                                <i className='bx bx-home nav__icon'></i>Accueil
                            </a>
                        </h1>
                    </div> 

                    {/* Menu */}
                    <div className="flex space-x-4 md:space-x-6">
                        <div className="text-gray-600 text-[16px] font-bold transition-colors duration-300 ">
                            <a href="#reconnaissance" >
                                <i className='bx bx-camera nav__icon'></i>Reconnaissance
                            </a>
                        </div>
                        <div className="text-gray-600 text-[16px] font-bold transition-colors duration-300 ">
                            <a href="#reconnaissance" >
                                <i className='bx bx-camera nav__icon'></i>Recherche
                            </a>
                        </div>
                        <div className="text-gray-600 text-[16px] font-bold transition-colors duration-300 ">
                            <a href="#reconnaissance">
                                <i className='bx bx-camera nav__icon'></i>Portfolio_ko
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
