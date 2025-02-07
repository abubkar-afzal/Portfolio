import Image from "next/image";
import React from "react";
import laptop from "../../public/laptop.svg";
import { FaChalkboardUser } from "react-icons/fa6";
const Experience = () => {

    return(<>
    <div className="bg1 sm:justify-items-center">
    <span className="text-[---bluecircleofcodeblock] bg-[---labelbg] text-[18px] font-bold p-2 rounded-[10px] px-[1rem]">Experience</span>
        <div className="sm:text-center sm:justify-items-center ">
            <div><Image src={laptop} alt="laptop" width={200} height={200} className={`animated`}/></div>
            <div className=" sm:w-[90vw] items-center space-x-2 text-center p-2 cursor-pointer border-[0.1px] rounded-[2rem] mb-[1rem] py-4 hover:scale-[1.04] duration-[1s]">
                
                    <div className="text-[---pinkcircleofcodeblock]">(Jan 2022 - Present)</div>
                <div className="flex space-x-2 items-center mt-[1rem]"> 
                <div>
                    <FaChalkboardUser className="text-[---tw] text-[40px]"/>
                </div>
                    <div>
                    <div className="text-[---tw] font-bold">SELF EMPLOYED</div>
                    <div className="text-[---tw] text-left ml-[2rem]">Code and build something in everyday</div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    </>)
}
export default Experience; 