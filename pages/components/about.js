import Image from "next/image";
import React from "react";
import img1 from "../../public/mypic.png";

const About = () => {
  return (
    <>
      <div id="about" className="sm:text-center sm:justify-items-center sm:space-y-[2rem] mx-5 mb-[2rem]  mt-[4rem] ">
        <span className="text-[---bluecircleofcodeblock] bg-[---labelbg] text-[18px] font-bold p-2 rounded-[10px] px-[1rem] t:text-[24px] l:text-[26px] ll:text-[28px]">
          About Me
        </span>   </div>
        <div className="sm:text-center sm:justify-items-center sm:space-y-[2rem] mx-5 mb-[2rem]  mt-[4rem] justify-items-center t:grid t:grid-flow-col t:grid-cols-2 t:grid-rows-1 t:gap-x-[1.5rem] t:mx-[1rem] t:mb-[3rem] t:items-center">
          <div className="t:col-start-1">
            <Image
              src={img1}
              width={1200}
              height={1200}
              alt="Profile Pic"
              className="cursor-pointer hover:scale-[1.12] duration-[1s] saturate-0 hover:saturate-150 t:w-[300px] l:w-[400px] ll:w-[500px]"
            />
          </div>
          <div className="t:col-start-2 ">
            <div className="text-[---tlogo] font-black sm:my-2 sm:text-[20px] t:text-[24px] l:text-[30px] ll:text-[40px]">
              WHO I Am?
            </div>
            <div className="text-[---tw] t:text-[16px] l:text-[18px] ll:text-[20px] mr-[2rem] ">
              My name is Hafiz Abubakar Afzal. I am a Full Stack Developer. I am a quick
              learner with a self-learning attitude. I love to learn and explore
              new technologies and am passionate about problem-solving. I love
              almost all the stacks of application development and love to
              make the websites and application. My core skills is based on
              JavaScript and I love to do most of the things using JavaScript. I
              am available for any kind of job opportunity that suits my skills
              and interests.
            </div>
          </div>
        </div>
   
    </>
  );
};
export default About;
