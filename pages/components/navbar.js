import React from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
    return ( <>
    <div>
        {/* small screen */}
        <div className=" mx-4">
            <nav className="flex sm:justify-between sm:py-4 ">
                
                    <a href="" className="text-[---tlogo] sm:text-[18px] cursor-pointer font-bold ">ABUBAKAR AFZAL</a>
                    <div className="sticky space-x-[2rem]  flex flex-col sm:text-[14px] space-y-2 mt-[-10px] ">
                        <a></a>
                        <div className="flex flex-col items-center space-x-[2rem] sm:text-[14px]  space-y-2 mx-[20px]">
                            <a></a>
                    <AiOutlineMenuUnfold className="text-[---tw] sm:text-[25px] cursor-pointer"/>
                    <RxCross2 className="text-[---tw] sm:text-[22px] cursor-pointer"/></div>
                    <div className="sticky space-x-[2rem]  flex flex-col sm:text-[14px] text-center space-y-2">
                        <a></a>
                    <a href="" className="text-[---tw] cursor-pointer">About</a>
                    <a href="" className="text-[---tw] cursor-pointer">Projects</a>
                    <a href="" className="text-[---tw] cursor-pointer">Skills</a>
                    <a href="" className="text-[---tw] cursor-pointer">Education</a>
                    <a href="" className="text-[---tw] cursor-pointer">Experience</a>
                    <a href="" className="text-[---tw] cursor-pointer">Blogs</a>
                    </div> </div>
            </nav>
        </div>

        {/* big screen */}
        <div className=" t:mx-4 sm:hidden">
            <nav className="t:flex t:justify-between t:items-center t:py-4 ">
                
                    <a href="" className="text-[---tlogo] t:text-[20px] cursor-pointer font-bold ">ABUBAKAR AFZAL</a>
                    <div className="t:space-x-[2rem]">
                    <a href="" className="text-[---tw] cursor-pointer">About</a>
                    <a href="" className="text-[---tw] cursor-pointer">Projects</a>
                    <a href="" className="text-[---tw] cursor-pointer">Skills</a>
                    <a href="" className="text-[---tw] cursor-pointer">Education</a>
                    <a href="" className="text-[---tw] cursor-pointer">Experience</a>
                    <a href="" className="text-[---tw] cursor-pointer">Blogs</a>
                    </div>
            </nav>
        </div>
    </div>
    </>)
}
export default Navbar;