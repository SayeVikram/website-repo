import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {

    return(
        <div>
            <div className="flex flex-col place-self-start ml-0">
                <Link href="https://www.linkedin.com/in/saye-vikram-karthikeyan-90850a258/"> <Image alt="Linkedin image" src="/icons8-linkedin.svg" width={35} height={35} className="hover:bg-blue-200 bg-blue-50 rounded-xl mb-3"/></Link>
                <Link href="https://www.instagram.com/sayegrill/"> <Image alt="Insta image" src="/icons8-instagram.svg" width={35} height={35} className="hover:bg-purple-200 bg-blue-50 rounded-xl mb-3"/></Link>
                <Link href="https://github.com/SayeVikram"> <Image alt="Github image" src="/icons8-github.svg" width={35} height={35} className="hover:bg-blue-200 bg-blue-50 rounded-xl"/></Link>
                
            </div>
            <footer className="w-full h-10 text-gray-500 text-center mt-15"> &copy; Saye Vikram Karthikeyan 2025</footer>
        </div>
    )
}

export default Footer