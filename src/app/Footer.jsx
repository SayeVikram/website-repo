"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {

    return(
        <>
        <div className="fixed bottom-0 flex flex-col">
            <div className="flex flex-col">
                <a href="https://www.linkedin.com/in/saye-vikram-karthikeyan-90850a258/"> <Image alt="Linkedin image" src="/icons8-linkedin.svg" width={35} height={35} className="hover:bg-blue-200 bg-blue-50 rounded-xl mb-3"/></a>
                <a href="https://www.instagram.com/sayegrill/"> <Image alt="Insta image" src="/icons8-instagram.svg" width={35} height={35} className="hover:bg-purple-200 bg-blue-50 rounded-xl mb-3"/></a>
                <a href="https://github.com/SayeVikram"> <Image alt="Github image" src="/icons8-github.svg" width={35} height={35} className="hover:bg-blue-200 bg-blue-50 rounded-xl"/></a>
                
            </div>
            
        </div>
            
        </>
    )
}

export default Footer