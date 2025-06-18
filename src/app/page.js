import Image from "next/image";
import HeroSection from "./HeroSection";
import NavBar from "./NavBar";
import AboutMe from "./AboutMe";
import Footer from "./Footer.jsx";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] max-w-screen w-full">
      <NavBar/>
      <div className="sm:container px-12 py-4 mt-15 sm:mr-0">
        <HeroSection/>
        <AboutMe/>
        <Footer/>
      </div>
    </main>
  );
}
