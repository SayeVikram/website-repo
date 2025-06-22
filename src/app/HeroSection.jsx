"use client";
import React from "react";
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {
    return(
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-12 md:grid-cols-12 place-self-left">

            <div className="col-span-6 place-self-center sm:mt-2 text-center">
                <h1 className="text-center text-white mb-4 text-5xl sm:text-left lg:text-6xl font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-red-500">Hey, I'm </span>
                    <TypeAnimation
                    sequence={[
                        
                        'Saye',
                        3000, 
                        '(a Builder)',
                        3000,
                        '(still figuring it out)',
                        3000
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '1em', display: 'inline-block' }}
                    repeat={Infinity}
                    /> 
                </h1>
                <p className="text-[#ADB7BE] sm:text-left text-lg lg:text-4xl mb-6 sm:text-4xl">
                    I'm an incoming freshman at <a href="https://www.cmu.edu/" className="text-red-500 no-underline">Carnegie Mellon</a>. I will be pursuing a major 
                    in Computer Science, and I plan on concentrating in AI or ML. I love to lift, hang out with friends, and play video games.
                </p>
                <div className="place-self-center">
                    <a href="https://drive.google.com/file/d/1kgpgozUiF3ryMm1XKtt1Dr07I6d9k_fo/view?usp=sharing">
                    <button className="bg-gradient-to-br from-blue-500 via-red-500  w-fit px-6 py-3 bg-white hover:bg-slate-200 rounded-full text-white hover:cursor-pointer border-none"> View CV </button>
                    </a>
                </div>
            </div>

            <div className="col-span-6 place-self-center mt-2 ml-2">
                <div className="rounded-full bg-[#181818] w-[300px] h-[300px] relative overflow-hidden lg:mt-3">
                    <Image src="/portfoliopho.png" alt="Photo Image" width={300} height={300}
                    className="absolute transform" />
                </div>
            </div>
        </div>

      </section>  
    );
}

export default HeroSection;