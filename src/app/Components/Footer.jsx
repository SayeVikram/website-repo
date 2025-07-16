"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return(
        <>
        <div className="fixed bottom-4 left-4 z-50">

            <button 
                onClick={toggleMenu}
                className="relative border-0 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200 flex items-center justify-center group"
            >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                    <div className={`w-5 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
                    <div className={`w-5 h-0.5 bg-gray-700 my-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                    <div className={`w-5 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                </div>
            </button>


            <div className={`absolute bottom-16 left-0 transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                <div className="flex flex-col space-y-3">
                    <a 
                        href="https://www.linkedin.com/in/saye-vikram-karthikeyan-90850a258/"
                        target="_blank" rel="noopener noreferrer"
                        className={`transform transition-all duration-300 delay-100 ${isMenuOpen ? 'translate-x-0' : '-translate-x-8'}`}
                    > 
                        <Image 
                            alt="Linkedin image" 
                            src="/icons8-linkedin.svg" 
                            width={35} 
                            height={35} 
                            className="hover:bg-blue-200 bg-blue-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110"
                        />
                    </a>
                    <a 
                        href="https://www.instagram.com/sayegrill/"
                        target="_blank" rel="noopener noreferrer"
                        className={`transform transition-all duration-300 delay-200 ${isMenuOpen ? 'translate-x-0' : '-translate-x-8'}`}
                    > 
                        <Image 
                            alt="Insta image" 
                            src="/icons8-instagram.svg" 
                            width={35} 
                            height={35} 
                            className="hover:bg-purple-200 bg-blue-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110"
                        />
                    </a>
                    <a 
                        href="https://github.com/SayeVikram"
                        target="_blank" rel="noopener noreferrer"
                        className={`transform transition-all duration-300 delay-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-8'}`}
                    > 
                        <Image 
                            alt="Github image" 
                            src="/icons8-github.svg" 
                            width={35} 
                            height={35} 
                            className="hover:bg-blue-200 bg-blue-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110"
                        />
                    </a>
                </div>

                
            </div>

            

        </div>

        
        <p className="text-white mt-auto place-self-center">&copy; 2025 Saye Karthikeyan </p>
            
        
        </>
    )
}

export default Footer