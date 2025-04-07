import Image from "next/image";
import React from "react";
import { ReactTyped } from "react-typed";
import codeBlock from "../../public/introBlock.png";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi2";
import Link from "next/link";

const Intro = () => {
  const scrollToSection = (sectionId) => {
    const section = document.querySelector(`#${sectionId}`);
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div
        id="intro"
        className="bg1 py-2 sm:grid sm:grid-flow-row sm:grid-cols-1 sm:grid-rows-1 t:grid t:grid-flow-col t:auto-cols-max t:grid-rows-1 t:pt-[20vh] t:pb-[7vh] l:pt-[15vh] ll:pt-[10vh] ll:pb-0"
      >
        <div className="t:col-start-2 mx-[2rem] mb-[2rem] rounded-[1rem] sm:w-auto  outline-[---borderofcodeblock] outline cursor-pointer hover:scale-[1.08] duration-[2s] bg-black">
          <div className="mx-auto mt-[4px] border-b-2 border-[---borderofcodeblock] ">
            <div className="flex p-2 ml-2 space-x-4">
              <div className="w-[1rem] h-[1rem] l:w-[1.2rem] l:h-[1.2rem] ll:w-[1.5rem] ll:h-[1.5rem] rounded-full bg-[---redcircleofcodeblock]"></div>
              <div className="w-[1rem] h-[1rem] l:w-[1.2rem] l:h-[1.2rem] ll:w-[1.5rem] ll:h-[1.5rem] rounded-full bg-[---pinkcircleofcodeblock]"></div>
              <div className="w-[1rem] h-[1rem] l:w-[1.2rem] l:h-[1.2rem] ll:w-[1.5rem] ll:h-[1.5rem] rounded-full bg-[---bluecircleofcodeblock]"></div>
            </div>
          </div>

          <div className="w-[250px] t:w-[400px] l:w-[500px] ll:w-[700px] t:mt-[4rem] l:mt-[3rem] ll:mt-[1rem]">
            <Image
              src={codeBlock}
              alt="codeBlock"
              width={1200}
              height={1200}
              className="mt-[1rem]"
            />
          </div>
        </div>
        <div className="t:col-start-1 t:content-center t:ml-[2rem]">
          <div className="mx-4 sm:text-center t:text-left mt-[1rem]">
            <span className="text-[---tw] sm:text-[28px] t:text-[32px] l:text-[40px] ll:text-[50px]  font-black  ">
              Hello,{" "}
            </span>
            <br />
            <span className="text-[---tw] sm:text-[28px] t:text-[32px] l:text-[40px] ll:text-[50px]  font-black  ">
              This Is{" "}
              <a className="text-[---introtextofabubakar] sm:text-[28px]  t:text-[32px] l:text-[40px] ll:text-[50px] font-black  cursor-pointer ">
                Abubakar Afzal
              </a>
              ,{" "}
            </span>
            <br />
            <span className="text-[---tw] sm:text-[28px] t:text-[32px] l:text-[40px] ll:text-[50px]  font-black  ">
              I&rsquo;m a{" "} <br className="t:hidden"/>
              <span className="text-[---tlogo] sm:text-[28px] t:text-[32px] l:text-[40px] ll:text-[50px]  font-black  ">
                <ReactTyped
                  strings={["Full Stack Developer"]}
                  typeSpeed={150}
                  backSpeed={70}
                  loop
                />
              </span>{" "}
            </span>
          </div>

          <div className="flex space-x-4 mt-[1rem] t:mt-[2rem] t:justify-start t:ml-[16px] justify-center">
            <Link href={`https://github.com/abubkar-afzal`} target="_blank">
              <FaGithub className="text-[---pinkcircleofcodeblock] text-[28px] t:text-[32px] l:text-[40px] ll:text-[50px] cursor-pointer hover:scale-[1.2] hover:text-[---gh] DropShadow duration-[0.5s]" />
            </Link>
            <Link
              href={`https://www.instagram.com/mr.syco.1?igsh=MWdmYXlsamozMDd0dw==`}
              target="_blank">
              <AiFillInstagram className="text-[---pinkcircleofcodeblock] text-[28px] t:text-[32px] l:text-[40px] ll:text-[50px] cursor-pointer hover:scale-[1.2] hover:text-[---ig] DropShadow duration-[0.5s]" />
            </Link>
            <Link
              href={`https://wa.me/send?phone=923270972423&text=How Can I Surve You ?`}
              target="_blank">
              {" "}
              <IoLogoWhatsapp className="text-[---pinkcircleofcodeblock] text-[28px] t:text-[32px] l:text-[40px] ll:text-[50px] cursor-pointer hover:scale-[1.2] hover:text-[---wa] DropShadow duration-[0.5s]" />{" "}
            </Link>
            <Link href={`https://www.linkedin.com/in/hafiz-abubakar-afzal-b77a46354/`} target="_blank">
              <FaLinkedin className="text-[---pinkcircleofcodeblock] text-[28px] t:text-[32px] l:text-[40px] ll:text-[50px] cursor-pointer hover:scale-[1.2] hover:text-[---ln] DropShadow duration-[0.5s]" />
            </Link>
          </div>
          <div className="justify-items-center t:justify-items-start t:ml-[1rem] ">
            <button
              onClick={() => scrollToSection("contact")}
              className="rounded-[2rem] mb-[2rem] text-[---tw] flex  items-center text-[15px] t:text-[1rem] l:text-[1.2rem] ll:text-[1.4rem] border-[2px] mt-[2rem] neon-border cursor-pointer hover:scale-[1.12] duration-[3s]"
            >
              CONTACT ME{" "}
              <HiUsers className="text-[---tw] text-[13px] t:text-[1rem] l:text-[1.5rem]  relative ml-2" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Intro;
