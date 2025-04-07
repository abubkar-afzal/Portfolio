import Image from "next/image";
import React, { useState } from "react";
import { RxDropdownMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
    const [displaymenu,hidemenu] = useState(true);
    const scrollToSection = (sectionId) => {
        const section = document.querySelector(`#${sectionId}`);
        section.scrollIntoView({ behavior: 'smooth' });
      };
    const showmenu=()=>{
        hidemenu(!displaymenu)
    }
    return ( <>
    <div className="sticky h-0 z-20">
        {/* small screen */}
        <div className=" t:hidden mx-[1rem]">
            <div className="flex sm:justify-between sm:py-4 ">
                    
                    <div onClick={() => scrollToSection('intro')} className="text-[---tlogo] sm:text-[18px] t:text-[22px] cursor-pointer font-bold flex flex-row "><div><Image src={"/mypic.png"} alt="Img" width={25} height={25} className="rounded-[2rem] mx-2" /></div><p>ABUBAKAR AFZAL</p></div>
                    <div className="place-items-end flex flex-col sm:text-[14px] space-y-2 mt-[-10px] ">
                        <a></a>
                        <div className="flex flex-col items-center  sm:text-[14px]  space-y-2">
                            <a></a>
                                    <RxDropdownMenu onClick={showmenu} className={`text-[---tw] sm:text-[25px] cursor-pointer ${displaymenu ?  "block  cursor-pointer hover:scale-[1.12] duration-[1s]" :"hidden" } `}/> 
                    
                    <RxCross2 onClick={showmenu} className={`text-[---tw] sm:text-[22px] cursor-pointer ${displaymenu ?  "hidden" :"block cursor-pointer hover:scale-[1.12] duration-[1s]" } `}/></div>
                    <div className={` sticky space-x-2 mb-2 flex flex-col sm:text-[14px] text-center space-y-2  ${displaymenu ?  "opacity-0 duration-[1s]" : "opacity-100 bg-black duration-[2s]" }  `}>
                        <a></a>
                    <a onClick={() => scrollToSection('about')} className="text-[---tw] cursor-pointer hover:bg-[---pinkcircleofcodeblock]">About</a>
                    <a onClick={() => scrollToSection('projects')} className="text-[---tw] cursor-pointer hover:bg-[---pinkcircleofcodeblock]">Projects</a>
                    <a onClick={() => scrollToSection('skills')} className="text-[---tw] cursor-pointer hover:bg-[---pinkcircleofcodeblock]">Skills</a>
                    <a onClick={() => scrollToSection('education')} className="text-[---tw] cursor-pointer hover:bg-[---pinkcircleofcodeblock]">Education</a>
                    <a onClick={() => scrollToSection('experience')} className="text-[---tw] cursor-pointer hover:bg-[---pinkcircleofcodeblock]">Experience</a>
                    <a onClick={() => scrollToSection('contact')} className="text-[---tw] cursor-pointer hover:bg-[---pinkcircleofcodeblock]">Contact</a>
                    </div> </div>
            </div>
        </div>

        {/* big screen */}
        <div className="t:block t:mx-4 sm:hidden">
            <nav className="t:flex t:justify-between t:items-center t:py-4 ">
                
                    <div onClick={() => scrollToSection('intro')} className="text-[---tlogo] t:text-[22px] l:text-[24px] ll:text-[28px] cursor-pointer font-bold flex items-center flex-row"><div><Image src={"/mypic.png"} alt="Img" width={30} height={30} className="rounded-[2rem] mx-2" /></div><p>ABUBAKAR AFZAL</p></div>
                    <div className="t:space-x-[2rem]">
                    <a onClick={() => scrollToSection('about')} className="text-[---tw] cursor-pointer hover:text-[---pinkcircleofcodeblock] t:text-[15px] l:text-[20px] ll:text-[23px]">About</a>
                    <a onClick={() => scrollToSection('projects')} className="text-[---tw] cursor-pointer hover:text-[---pinkcircleofcodeblock] t:text-[15px] l:text-[20px] ll:text-[23px]">Projects</a>
                    <a onClick={() => scrollToSection('skills')} className="text-[---tw] cursor-pointer hover:text-[---pinkcircleofcodeblock] t:text-[15px] l:text-[20px] ll:text-[23px]">Skills</a>
                    <a onClick={() => scrollToSection('education')} className="text-[---tw] cursor-pointer hover:text-[---pinkcircleofcodeblock] t:text-[15px] l:text-[20px] ll:text-[23px]">Education</a>
                    <a onClick={() => scrollToSection('experience')} className="text-[---tw] cursor-pointer hover:text-[---pinkcircleofcodeblock] t:text-[15px] l:text-[20px] ll:text-[23px]">Experience</a>
                    <a onClick={() => scrollToSection('contact')} className="text-[---tw] cursor-pointer hover:text-[---pinkcircleofcodeblock] t:text-[15px] l:text-[20px] ll:text-[23px]">Contact</a>
                    </div>
            </nav>
        </div>
    </div>
    <div className="h-[4rem]"></div>
    </>)
}
export default Navbar;