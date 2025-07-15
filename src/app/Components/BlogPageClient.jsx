"use client";
import ScrollFade from "./ScrollFade";
import React from "react";
import Link from "next/link";
import BlogCard from "./BlogCard";



const BlogPageClient = ({collection}) => {

    return(<ScrollFade>
        <main className="flex min-h-screen flex-col">
        <h1 className="text-5xl font-extrabold text-center text-white mt-30">posts</h1>
        <div className="m-20 place-self-center mb-40 text-[#ADB7BE]">
            {collection.map((item) => (
                <BlogCard key={item.title || 0} title={item.title} href={`Blog/${item.slug}`} date={item.date} />
            ))}
        </div>
        
        </main>
    </ScrollFade>)
}

export default BlogPageClient;