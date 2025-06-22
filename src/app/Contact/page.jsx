"use client";
import React from "react";
import NavBar from "../NavBar";
import { useState, useTransition } from "react";
import { Resend } from "resend";
import { sendEmailAction } from "../EmailSend";
import Footer from "../Footer";


const Contact = () => {
    
    const [name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[content, setContent] = useState("")
    const [pending, startTransition] = useTransition();
    const [status, setStatus] = useState(null);


    function handleSubmit(e){
        
        e.preventDefault();
        startTransition(async () => {
        const res = await sendEmailAction({ name, email, content });
        console.log(res)
        setStatus(res.success ? "Email sent!" : `Error: ${res.error}`);
        setName("")
        setEmail("")
        setContent("")
        });

    }

    return(
        <main className="bg-[#121212] min-h-screen right-0 left-0 absolute">
            <NavBar/>
            <h1 className="font-extrabold text-center mt-15 text-red-100">keep in touch!</h1>
            <form className="mt-20 flex flex-col justify-center place-self-center" onSubmit={handleSubmit}>

                <div className="place-self-center">
                    <textarea value={name} onChange={(e) => setName(e.target.value)} required type="text" id="fname" name="fname" className="font-sans resize-none mb-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First Name"/>

                    <textarea value={email} onChange={(e) => setEmail(e.target.value)} required type="text" id="email" name="email" className="font-sans resize-none mb-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email"/>

                    <textarea value={content} onChange={(e) => setContent(e.target.value)} required type="text" id="content" name="content" className="font-sans resize-none mb-10 h-25 w-70 text-wrap block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="
                    Hit me up about anything really I'm bored :)"
                    />
                </div>

                <input type="submit" value="Submit" className="place-self-center bg-gradient-to-br from-blue-500 via-red-500   w-full sm:w-fit px-6 py-3 bg-white hover:bg-slate-200 rounded-full text-white hover:cursor-pointer border-none"/>
                {status && <p className="mt-4 text-center text-white">{status}</p>}
            </form>
            <Footer/>
        </main>
    )


}

export default Contact;
