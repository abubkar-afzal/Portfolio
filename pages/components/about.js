import Image from "next/image";
import React from "react";
import img1 from "../../public/introBlock.png";

const About = () => {
  return (
    <>
      <div className="sm:text-center sm:justify-items-center sm:space-y-[2rem] mx-5 mb-[2rem]">
        <span className="text-[---bluecircleofcodeblock] bg-[---labelbg] text-[18px] font-bold p-2 rounded-[10px] px-[1rem]">
          About Me
        </span>
        <div className="justify-items-center">
          <div>
           
            <Image
              src={img1}
              width={200}
              height={200}
              alt="Profile Pic"
              className="cursor-pointer hover:scale-[1.12] duration-[1s] saturate-0 hover:saturate-150"
            />
          </div>
          <div className="text-[---tlogo] font-black sm:my-2 sm:text-[20px]">
            WHO I Am?
          </div>
          <div className="text-[---tw]">
            My name is Abubakar Afzal. I am a web developer. I am a quick
            learner with a self-learning attitude. I love to learn and explore
            new technologies and am passionate about problem-solving. I love
            almost all the stacks of web application development and love to
            make the web more open to the world. My core skills is based on
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
