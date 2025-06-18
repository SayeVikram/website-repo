import React from "react";
import Link from "next/link";


const BlogCard = ({href, title, date}) => {
    
    return(

        <Link href={href} className="no-underline">
        <div className="text-center text-white">——————————————————</div>
        <div className="hover:bg-red-400 w-100 h-30 rounded-md flex justify-center align-center flex-col text-center">
           
            <h6 className="text-white font-extrabold text-2xl m-0 p-0">{title}</h6>
            <p className="text-white no-underline">{date}</p>
        </div>
        <div className="text-center text-white">——————————————————</div>
        </Link>
    )
    
    
}


export default BlogCard