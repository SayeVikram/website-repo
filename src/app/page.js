import Image from "next/image";
import HeroSection from "./Components/HeroSection";

export const metadata = {
  title: 'Saye Karthikeyan',
  description: 'Personal portfolio website with projects/posts/etc',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] max-w-screen w-full right-0 left-0">
      <div className="sm:container px-12 py-4 mt-15 sm:mr-0 inset-0 bg-[#121212]">
        <HeroSection/>
      </div>
    </main>
  );
}
