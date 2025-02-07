import React, { useState } from "react";
import { RxDropdownMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
    const [displaymenu,hidemenu] = useState(true);

    const showmenu=()=>{
        hidemenu(!displaymenu)
    }
    return ( <>
    <div className="sticky h-0">
        {/* small screen */}
        <div className=" t:hidden mx-[1rem]">
            <div className="flex sm:justify-between sm:py-4 ">
                
                    <a  className="text-[---tlogo] sm:text-[18px] cursor-pointer font-bold ">ABUBAKAR AFZAL</a>
                    <div className="place-items-end flex flex-col sm:text-[14px] space-y-2 mt-[-10px] ">
                        <a></a>
                        <div className="flex flex-col items-center  sm:text-[14px]  space-y-2">
                            <a></a>
                                    <RxDropdownMenu onClick={showmenu} className={`text-[---tw] sm:text-[25px] cursor-pointer ${displaymenu ?  "block  cursor-pointer hover:scale-[1.12] duration-[1s]" :"hidden" } `}/> 
                    
                    <RxCross2 onClick={showmenu} className={`text-[---tw] sm:text-[22px] cursor-pointer ${displaymenu ?  "hidden" :"block cursor-pointer hover:scale-[1.12] duration-[1s]" } `}/></div>
                    <div className={`sticky space-x-2 mb-2 flex flex-col sm:text-[14px] text-center space-y-2  ${displaymenu ?  "opacity-0 duration-[1s]" : "opacity-100 bg-black duration-[2s]" }  `}>
                        <a></a>
                    <a  className="text-[---tw] cursor-pointer hover:bg-[---pinkcircleofcodeblock]">About</a>
                    <a  className="text-[---tw] cursor-pointer hover:bg-[---pinkcircleofcodeblock]">Projects</a>
                    <a  className="text-[---tw] cursor-pointer hover:bg-[---pinkcircleofcodeblock]">Skills</a>
                    <a  className="text-[---tw] cursor-pointer hover:bg-[---pinkcircleofcodeblock]">Education</a>
                    <a  className="text-[---tw] cursor-pointer hover:bg-[---pinkcircleofcodeblock]">Experience</a>
                    <a  className="text-[---tw] cursor-pointer hover:bg-[---pinkcircleofcodeblock]">Blogs</a>
                    </div> </div>
            </div>
        </div>

        {/* big screen */}
        <div className="t:block t:mx-4 sm:hidden">
            <nav className="t:flex t:justify-between t:items-center t:py-4 ">
                
                    <a  className="text-[---tlogo] t:text-[20px] cursor-pointer font-bold ">ABUBAKAR AFZAL</a>
                    <div className="t:space-x-[2rem]">
                    <a  className="text-[---tw] cursor-pointer hover:text-[---pinkcircleofcodeblock]">About</a>
                    <a  className="text-[---tw] cursor-pointer hover:text-[---pinkcircleofcodeblock]">Projects</a>
                    <a  className="text-[---tw] cursor-pointer hover:text-[---pinkcircleofcodeblock]">Skills</a>
                    <a  className="text-[---tw] cursor-pointer hover:text-[---pinkcircleofcodeblock]">Education</a>
                    <a  className="text-[---tw] cursor-pointer hover:text-[---pinkcircleofcodeblock]">Experience</a>
                    <a  className="text-[---tw] cursor-pointer hover:text-[---pinkcircleofcodeblock]">Blogs</a>
                    </div>
            </nav>
        </div>
    </div>
    <div className="h-[4rem]"></div>
    </>)
}
export default Navbar;