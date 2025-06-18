"use client";
import React, { useState } from "react";

const AboutMe = () => {


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
        <div className="mt-13 mb-15">
            <h2 className="text-5xl font-extrabold text-center">About my CS Journey</h2>

            <div className="mt-6 flex justify-evenly content-center xs:grid grid-cols-1">
                <div className="mr-6 font-sans">
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

                    <ul className="list-inside">
                        {tabs.map((tab) => (
                            (tab.id === activeTab) ? tab.arr.map((arrElement) => (
                                <li className="list-disc md:text-left text-center" key={tab.arr.indexOf(arrElement)}>{arrElement}</li>
                            )) : null
                        ))}
                    </ul>
                    
                </div>
                
            </div>
        </div>
    );
}

export default AboutMe;