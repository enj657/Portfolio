import Image from "next/image";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import Logo from "@component/components/Logo";
import Nav from "@component/components/Nav";
import { motion } from "framer-motion";
import Header from "@component/components/Header";
import About from "@component/components/About";
import Experience from "@component/components/Experience";
import Projects from "@component/components/Projects";
import Education from "@component/components/Education";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <div className="${poppins.className} lg:px-24 lg:py-0 max-w-screen-xl md:px-12 md:py-20 min-h-screen mx-auto px-6 py-12">
        <div className="lg:flex lg:gap-4 lg:justify-between">
            <Header />
            <main className={`pt-12 lg:w-1/2 `}>
            <About />
            <Experience />
            <Education />
            <Projects />
            </main>
        </div>
    </div>
  );
}
