import Image from "next/image";
import React, { useState } from "react";
import laptop from "../../public/laptop.svg";
import { FaChalkboardUser } from "react-icons/fa6";
const Experience = () => {
    const [labExp, showLabExp] = useState(false);
    const [tecExp, showTecExp] = useState(false);
  return (
    <>
      <div className=" sm:justify-items-center pb-[4rem]">
        <span className="text-[---bluecircleofcodeblock] bg-[---labelbg] text-[18px] font-bold p-2 rounded-[10px] px-[1rem]">
          Experience
        </span>
        <div className="flex flex-col space-y-[2rem]">
            <div></div>

          <div className="sm:text-center sm:justify-items-center bg1 ">
            <div>
              <Image
                src={laptop}
                alt="laptop"
                width={200}
                height={200}
                className={`animated`}
              />
            </div>
            <div className=" sm:w-[90vw] items-center space-x-2 text-center p-2 cursor-pointer border-[0.1px] rounded-[2rem] mb-[1rem] py-4 hover:scale-[1.04] neon-border-for-experince duration-[1s] bg-[---labelbg]">
              <div className="text-[---pinkcircleofcodeblock]">
                (Jan 2022 - Present)
              </div>
              <div className="flex space-x-[2rem] items-center mt-[1rem]">
                <div>
                  <FaChalkboardUser className="text-[---tw] text-[40px]" />
                </div>
                <div className=" text-left">
                  <div className="text-[---tw] font-bold">SELF EMPLOYED</div>
                  <div className="text-[---tw]  ">
                    Code and build something in everyday
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              showLabExp(!labExp);
            }}
            onMouseEnter={() => {
                showLabExp(true);
            }}
            onMouseLeave={() => {
                showLabExp(false);
            }}
            className=" sm:w-[90vw] items-center space-x-2 text-center p-2 cursor-pointer border-[0.1px] rounded-[2rem] mb-[1rem] py-4 hover:scale-[1.04] neon-border-for-experince duration-[1s] bg-[---labelbg]"
          >
            <div className="text-[---pinkcircleofcodeblock]">(Jan 2022 - Present)</div>
            <div className="flex space-x-[2rem] items-center mt-[1rem]">
              <div>
                <FaChalkboardUser className="text-[---tw] text-[40px]" />
              </div>
              <div className=" text-left">
                <div className="text-[---tw] font-bold text-[20px] underline">
                 Computer Lab Assisstant
                </div>
                <div className="text-[---tw] text-[14px] my-2">
                Heaven Of Education, Amir Road, Lahore 
                </div>
              </div>
            </div>

            {labExp ? (
              <>
                <hr className="mt-[2rem]" />
                <div className="justify-items-center text-center px-4">
                  <div>
                    <Image
                      src={laptop}
                      alt="Degree Image"
                      width={200}
                      height={200}
                      className=""
                    />
                  </div>
                  <div>
                    <span className="text-[---tw]">
                      My Intermediate Is Not Completed Right Now. I Give The 1st
                      Year Exams And It&apos;s Result Is There. I Also Give The
                      2nd Year Exams And It&apos;s Result Is Still Pending.
                    </span>
                  </div>
                </div>
              </>
            ) : null}
          </div>
          <div
            onClick={() => {
              showTecExp(!tecExp);
            }}
            onMouseEnter={() => {
                showTecExp(true);
            }}
            onMouseLeave={() => {
                showTecExp(false);
            }}
            className=" sm:w-[90vw] items-center space-x-2 text-center p-2 cursor-pointer border-[0.1px] rounded-[2rem] mb-[1rem] py-4 hover:scale-[1.04] neon-border-for-experince duration-[1s] bg-[---labelbg]"
          >
            <div className="text-[---pinkcircleofcodeblock]">(Jan 2022 - Present)</div>
            <div className="flex space-x-[2rem] items-center mt-[1rem]">
              <div>
                <FaChalkboardUser className="text-[---tw] text-[40px]" />
              </div>
              <div className=" text-left">
                <div className="text-[---tw] font-bold text-[20px] underline">
                 PC Technician 
                </div>
                <div className="text-[---tw] text-[14px] my-2">
                Younis Center, Hall Road, Lahore 
                </div>
              </div>
            </div>

            {tecExp ? (
              <>
                <hr className="mt-[2rem]" />
                <div className="justify-items-center text-center px-4">
                  <div>
                    <Image
                      src={laptop}
                      alt="Degree Image"
                      width={200}
                      height={200}
                      className=""
                    />
                  </div>
                  <div>
                    <span className="text-[---tw]">
                      My Intermediate Is Not Completed Right Now. I Give The 1st
                      Year Exams And It&apos;s Result Is There. I Also Give The
                      2nd Year Exams And It&apos;s Result Is Still Pending.
                    </span>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};
export default Experience;
