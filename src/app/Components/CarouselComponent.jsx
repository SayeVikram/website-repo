import React from "react";

var i = 0;

const CarouselComponent = ({skillDetails}) => {

    return(
        <>
            <h2 className="text-center font-extrabold text-6xl text-[#ADB7BE]">Tech Stack</h2>
            <div className=" overflow-hidden min-w-screen border-white border-solid  h-40 mb-5 -ml-13 flex">
                <div className="flex gap-10 animate-infinite-scroll">
                    {[...skillDetails, ...skillDetails].map((skill) => {

                        return(<div key={i++} className="justify-center place-self-center">
                            <p className="text-center text-white text-7xl font-bold font-serif">‎  {skill} ‎  </p>
                        </div>)
                        
                    }
                    )}

                </div>
            </div>
        </>

    )
}

export default CarouselComponent;