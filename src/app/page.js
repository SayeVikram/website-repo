import Image from "next/image";
import HeroSection from "./Components/HeroSection";
import CarouselComponent from "./Components/CarouselComponent";

export const metadata = {
  title: 'Saye Karthikeyan',
  description: 'Personal portfolio website with projects/posts/etc',
}

const skills = ['Tailwind', 'Next.JS', 'Python', 'Java', 'Tensorflow', 'Pytorch', 'Git', 'MongoDB', 'Supabase'];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]  right-0 left-0 overflow-hidden w-full">
      <div className="sm:container px-12 py-4 mt-15 sm:mr-0 inset-0 bg-[#121212]">
        <HeroSection/>
        <CarouselComponent skillDetails={skills}/>
      </div>
    </main>
  );
}
