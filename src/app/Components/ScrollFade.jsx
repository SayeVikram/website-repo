import React, {useEffect, useRef} from "react";


const ScrollFade = ({children}) => {    

    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting && ref.current){
                ref.current.classList.add("animate-fadein")
            }
        }, {threshold: 0.1})

        if(ref.current){
            observer.observe(ref.current)
        }
        return () => observer.disconnect()
    }, [])

    return(
        <div className="opacity-0" ref={ref}>
            {children}
        </div>
    )


}

export default ScrollFade;