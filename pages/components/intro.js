import Image from "next/image";
import React from "react";
import codeBlock from '../../public/introBlock.png'
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi2"; 

const Intro = () => {
    return ( <><div className="bg1 py-2 sm:grid sm:grid-flow-row sm:grid-cols-1 sm:grid-rows-1">
             <div className="mx-[2rem] mb-[2rem] rounded-[1rem] sm:w-auto sm:h- outline-[---borderofcodeblock] outline cursor-pointer hover:scale-[1.08] duration-[2s] bg-black">
            <div className="mx-auto mt-[4px] border-b-2 border-[---borderofcodeblock] ">
                <div className="flex p-2 ml-2 space-x-4">
                    <div className="w-[1rem] h-[1rem] rounded-full bg-[---redcircleofcodeblock]"></div>
                    <div className="w-[1rem] h-[1rem] rounded-full bg-[---pinkcircleofcodeblock]"></div>
                    <div className="w-[1rem] h-[1rem] rounded-full bg-[---bluecircleofcodeblock]"></div>
                </div>
            </div>
            
            <div className="w-[250px]">
               <Image src={codeBlock} alt="codeBlock" width={300} height={300} className="mt-[1rem]"/>
            </div>
            </div>
            <div className="mx-4 sm:text-center mt-[1rem]">
                <span className="text-[---tw] sm:text-[28px] font-black  ">Hello, </span>
                <span className="text-[---tw] sm:text-[28px] font-black  ">This Is <a className="text-[---introtextofabubakar] sm:text-[28px] font-black  cursor-pointer hover:scale-[1.12] duration-[1s]">Abubakar Afzal</a>, </span>
                <span className="text-[---tw] sm:text-[28px] font-black  ">I&rsquo;m a <span className="text-[---tlogo] sm:text-[28px] font-black cursor-pointer hover:scale-[1.12] duration-[1s] ">web developer</span> </span>	
            </div>
    
            <div className="flex space-x-4 mt-[1rem] justify-center">
                <FaGithub className="text-[---pinkcircleofcodeblock] text-[28px] cursor-pointer hover:scale-[1.2] duration-[0.5s]"/>
                <AiFillInstagram className="text-[---pinkcircleofcodeblock] text-[28px] cursor-pointer hover:scale-[1.2] duration-[0.5s]"/>
                <IoLogoWhatsapp className="text-[---pinkcircleofcodeblock] text-[28px] cursor-pointer hover:scale-[1.2] duration-[0.5s]"/>
                <FaLinkedin className="text-[---pinkcircleofcodeblock] text-[28px] cursor-pointer hover:scale-[1.2] duration-[0.5s]"/>
            </div>
            <div className="justify-items-center">
                <button  className="rounded-[2rem] mb-[2rem] text-[---tw] flex  items-center text-[15px] border-[2px] mt-[2rem]  neon-border cursor-pointer hover:scale-[1.12] duration-[3s]">CONTACT ME <HiUsers  className="text-[---tw] text-[13px]  relative ml-2"/></button>
            </div>
            
        </div></>)
}
export default Intro;