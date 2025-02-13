import Link from "next/link";
import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutgoingMail } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
    return(<> <div id="contact" className="justify-items-center my-[4rem]  pb-[2rem]">
        <span className="text-[---bluecircleofcodeblock] bg-[---labelbg] text-[18px] font-bold p-2 rounded-[10px] px-[1rem] t:text-[24px] l:text-[26px] ll:text-[28px]">
          Contact
        </span>
        <div className=" m-[2rem] text-center bg-[---labelbg] rounded-[1rem] outline-[---borderofcodeblock] outline py-[1rem]  space-y-[1rem] t:grid t:grid-flow-col t:grid-cols-2 t:grid-rows-1 t:gap-x-[1.5rem] t:mx-[2rem] t:items-center t:mt-[4rem] t:justify-between">
            <div className="text-[---tw] font-black px-6 ll:text-[22px]">If you have any questions or concerns, please don&apos;t hesitate to contact me. I am open to any work opportunitites that align with my skills and interests.</div>
            <div  className=" ml-2 h-auto ">
          
          
            <br />
            <div  className="t:flex t:flex-wrap t:place-content-center t:space-x-[2rem] ll:flex-col ll:place-content-center ll:space-x-0">
          <Link href={`https://wa.me/send?phone=923270972423&text=How Can I Surve You ?`}>
            <span  className="sm:flex px-2 ll:text-[20px] sm:hover:underline sm:text-[---tw] DropShadow hover:text-[---wa]">
             <IoLogoWhatsapp className="sm:text-[22px] ll:text-[25px] mr-2"/> +923270972423
            </span><br/></Link>
            <Link href={`mailto:hafizabubakarafzal@gmail.com`}>
            <span  className="sm:flex px-2 ll:text-[20px] sm:hover:underline sm:text-[---tw] DropShadow hover:text-[---em]">
             <MdOutgoingMail className="sm:text-[22px] ll:text-[25px] mr-2"/> hafizabubakarafzal@gmail.com
            </span><br/></Link>
            <Link href={`https://github.com/abubkar-afzal`}>
            
            <span  className="sm:flex px-2 ll:text-[20px] sm:hover:underline  sm:text-[---tw] DropShadow hover:text-[---gh]">
              <SiGithub className="sm:text-[22px] ll:text-[25px] mr-2"/>GitHub
            </span><br/></Link>
            <Link href={`https://www.instagram.com/mr.syco.1?igsh=MWdmYXlsamozMDd0dw==`}>

            <span  className="sm:flex px-2 ll:text-[20px] sm:hover:underline sm:text-[---tw] DropShadow hover:text-[---ig]">
             <RiInstagramFill className="sm:text-[22px] ll:text-[25px] mr-2"/> Instagram
            </span><br/></Link>
            {/* <Link href={`/`}>

            <span  className="sm:flex px-2 ll:text-[20px] sm:hover:underline sm:text-[---tw] hover:text-[---ln]">
              <FaLinkedin className="sm:text-[22px] ll:text-[25px] mr-2"/>Linkedin
            </span><br/></Link> */}
            </div>
          </div>
        </div>
        </div></>)

}
export default Contact;