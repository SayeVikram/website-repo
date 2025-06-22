import React from "react";
import NavBar from "../NavBar";
import fs from "fs"
import matter from "gray-matter"
import path from "path"
import Link from "next/link";
import BlogCard from "../BlogCard";
import Footer from "../Footer";

export const getAllPosts = () => {
    
    const filedir = path.join(process.cwd(), "src/app/posts")
    const fileNames = fs.readdirSync(filedir)

    return fileNames.map((file) => {
        const slug = file.replace(/\.md$/, "")

        const file_loc = path.join(filedir, file)
        const fileContent = fs.readFileSync(file_loc, 'utf-8')

        const {content, data} = matter(fileContent)

        return{
            slug,
            content,
            ...data
        }
    })
}



const Blog = () => {
    const collection = getAllPosts().reverse()
    return(
    <main className="flex min-h-screen flex-col bg-[#121212] right-0 left-0 absolute">
      <NavBar/>
      <h1 className="text-5xl font-extrabold text-center text-white mt-30">posts</h1>
      <div className="m-20 place-self-center mb-40 text-[#ADB7BE]">
           {collection.map((item) => (
               <BlogCard key={item.title || 0} title={item.title} href={`Blog/${item.slug}`} date={item.date} />
           ))}
      </div>
      
      <Footer/>
    </main>
        
    )
}

export default Blog;