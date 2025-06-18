import React from "react";
import fs from "fs"
import matter from "gray-matter"
import path from "path"
import Link from "next/link";
import MarkdownIt from "markdown-it";
import NavBar from "@/app/NavBar";
import { Remarkable } from 'remarkable';
import Footer from "@/app/Footer";



const getAllPosts = () => {
    
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

async function getPosts(slug){
    const posts = getAllPosts().reverse();
    return posts.find((post) => (post.slug === slug))
}

export default async function Post({params}){
    const md = new MarkdownIt({
    html: true,
    breaks: true,
    typographer: true,
  });

    params = await params
    const post = await getPosts(params.slug);
    const htmlConvert = md.render(post.content.trim())

    return(

        <main className="bg-[#121212] m-0 h-screen">
        
       
        <NavBar/>
        <div className="mt-15 bg-[#121212]">
        <div className="mb-10">
        <article className="ml-30 mb-5">
            <h1 className="text-5xl font-extrabold text-red-300 text-center">{post.title}</h1>
            <div className="font-sans" dangerouslySetInnerHTML={{__html: htmlConvert}}/>
        </article>
        <Link href="/Blog" className="text-red-300 underline font-extrabold ml-5 mt-5 mb-5"> ← Back to the Blog</Link>
        </div>
        <Footer />
        </div>
       

        </main>
    )

}