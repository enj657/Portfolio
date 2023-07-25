import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";
import Nav from "./Nav";
import Image from "next/image";
import Github from "./GithubLogo";
import LinkedIn from "./LinkedInLogo";
import Resume from "./ResumeLogo";
import Logo2 from "./Logo2";
import Logo3 from "./Logo3";

export default function Header() {
  return (
    <header className="lg:flex lg:flex-col lg:justify-between lg:max-h-screen lg:p-12 lg:sticky lg:top-0 lg:w-1/2">
        <div className="p-4 md:p-8 flex flex-col flex-1 justify-between">
            <div>
                <div className="text-[#B842DC] hover:text-teal-500 mb-4">
                    <h1 className="w-48 md:w-80 relative">
                        {/* <Logo />
                        <Logo2 /> */}
                        <Link href="/"><Logo3 /></Link>
                        
                    </h1> 
                </div>
                <div className="w-full md:w-1/2 lg:w-full">
                    <h2>
                        Web Developer at Captiva{'\u00A0'}Marketing
                    </h2>
                    <ul className="text-sm flex flex-wrap gap-x-3">
                        <li>Web Developer<span className="pl-2 text-base">&#128187;</span></li>
                        <li>Data Analyst<span className="pl-2 text-base">&#128218;</span></li>
                        <li>Musician<span className="pl-2 text-base">&#127931;</span></li>
                        <li>Vegetarian<span className="pl-2 text-base">&#127793;</span></li>
                        <li>Hiker<span className="pl-2 text-base">&#127956;</span></li>
                        <li>Sports Fan<span className="pl-2 text-base">&#127934;</span></li>
                        <li>Traveler<span className="pl-2 text-base">&#128747;</span></li>
                        <li>Stargazer<span className="pl-2 text-base">&#128301;</span></li>
                        <li>Partner<span className="pl-2 text-base">&#127752;</span></li>
                    </ul>
                </div>
                <div className="my-20">
                    <Nav />
                </div>
            </div>
            <ul className="flex flex-row gap-6">
                <li><Link href="https://github.com/enj657" target="_blank" className="hover:text-teal-500 text-[#B842DC]">
                    <span className="sr-only">Github</span>
                    <Github /></Link>
                </li>
                <li><Link href="https://www.linkedin.com/in/enj657/" target="_blank" className="hover:text-teal-500 text-[#B842DC]">
                    <span className="sr-only">LinkedIn</span>
                    <LinkedIn /></Link>
                </li>
                <li><Link href="" target="_blank" className="hover:text-teal-500 text-[#B842DC]">
                    <span className="sr-only">Resume</span>
                    <Resume /></Link>
                </li>
            </ul>
        </div>
    </header>
  );
}