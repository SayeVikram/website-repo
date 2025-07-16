"use client";
import React, {useState} from "react";
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import Head from "next/head";
import ScrollFade from "./ScrollFade";



const HeroSection = () => {

        const[activeTab, setActiveTab] = useState(1);
    
        const tabs = [
            {
                id: 1,
                name: "education",
                arr: ["Fun Fact: moved 5+ times before high school!", "Waubonsie Valley High School (2021-2025)", "Carnegie Mellon University (2025-2029)"]
            }, 
            {
                id: 2,
                name: "skills",
                arr: ["Python", "React/Next.js", "Java", "CSS/HTML"]
            }, 
            {
                id: 3,
                name: "experience",
                arr: ["Data Analyst Intern- Cardiff University-Wales", "Lab Aide/Researcher - UIC", "Student Intern - NIU"]
            }
        ];
    
        const returnCurrent = () => {
            const newItem = tabs.filter((tab) => (
                (tab.id === activeTab)
            ))
            return newItem[0]
        }
    



    return(
      <section>
        <Head>
            <title>Saye Karthikeyan</title>
            <meta property="og:title" content="Saye Karthikeyan" key="title" />
        </Head>

        <ScrollFade>
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
        </ScrollFade>

        <ScrollFade>
            <div className="mt-13 mb-15">
                <h2 className="text-5xl font-extrabold text-center text-[#ADB7BE]">About my CS Journey</h2>

                <div className="mt-6 flex justify-evenly content-center xs:grid grid-cols-1">
                    <div className="mr-6 font-sans text-[#ADB7BE]">
                        <p> I started off my journey with an arduino class that I took my 8th grade summer. 
                            While it was really simple circuitry -- just learned how to make LED circuits in 
                            that class -- I really found my passion for all things tech from then on.
                            I try to involve myself in research that can further supplement my technical 
                            skills. Currently, I have a really strong interest in computer vision and 
                            applying it to diagnostic technologies, and I anticipate exploring this field 
                            further at CMU. </p>
                    </div>

                    <div className="flex flex-col">
                    <div className="flex flex-nowrap mb-4" id="tab-section">
                        {tabs.map((tab) => (

                            <button
                                key={tab.id}
                                className={` border-0 bg-[#121212] px-4 py-2 font-semibold ${(activeTab === tab.id) ? "text-red-500 hover:cursor-pointer" : ("text-gray-500 hover:text-red-500 hover:cursor-pointer") } `}
                                onClick={() => (setActiveTab(tab.id))}>

                                {tab.name};

                            </button>

                        ))
                            
                        }

                    </div>

                        <ul className="list-inside text-[#ADB7BE]">
                            {tabs.map((tab) => (
                                (tab.id === activeTab) ? tab.arr.map((arrElement) => (
                                    <li className="list-disc md:text-left text-center" key={tab.arr.indexOf(arrElement)}>{arrElement}</li>
                                )) : null
                            ))}
                        </ul>
                        
                    </div>
                    
                </div>
            </div>
        </ScrollFade>
  
      </section>  
    );
}

export default HeroSection;