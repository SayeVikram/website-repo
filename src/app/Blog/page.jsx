import BlogPageClient from "../Components/BlogPageClient";
import fs from 'fs';
import path from "path";
import matter from "gray-matter";




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
    const collection = getAllPosts()
    return(
        <BlogPageClient collection={collection}></BlogPageClient>
    )
}

export default Blog;