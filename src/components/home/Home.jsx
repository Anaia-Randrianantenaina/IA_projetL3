import React from "react";

const Home = () => {
    return (
        <>
             <section id="home" className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white via-slate-300 to-slate-700">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
                        Bienvenue sur notre plateforme de Reconnaissance d'Image!
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-600 mb-6">
                        Découvrez comment notre intelligence artificielle peut analyser et reconnaître des images avec une précision impressionnante.
                    </p>
                    <p className="text-md md:text-lg text-gray-600 mb-6">
                        Téléchargez une image pour voir la magie de la reconnaissance d'image en action!
                    </p>
                    <a href="#reconnaissance" className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg md:text-xl font-medium hover:bg-blue-600 transition duration-300">
                    <a href="#home" className="nav__link active-link animate-pulse">
                                <i className='bx bx-home nav__icon'></i> Essayez notre démo
                    </a>
                    </a>
                </div>
            </section>
        </>
    );
}

export default Home;
