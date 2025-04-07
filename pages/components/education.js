import Image from "next/image";
import React, { useState } from "react";
import eduImg from "../../public/education.png";
import inter from "../../public/11.jpg";
import matric from "../../public/10.jpg";
import hifz from "../../public/hifz.jpg";
import { PiStudentBold } from "react-icons/pi";

const Education = () => {
  const [interData, showInterData] = useState(false);
  const [matricData, showMatircData] = useState(false);
  const [hafizData, showHafizData] = useState(false);
  return (
    <>
      <div id="education" className="justify-items-center my-[4rem] ">
        <span className="text-[---bluecircleofcodeblock] bg-[---labelbg] text-[18px] font-bold p-2 rounded-[10px] px-[1rem] t:text-[24px] l:text-[26px] ll:text-[28px]">
          Education
        </span>
        <div className="justify-items-center t:grid t:grid-flow-col t:auto-cols-2 t:grid-rows-1 t:mx-[2rem] t:items-center t:mt-[2rem] t:justify-between">
        <div className="bg1 t:col-start-2">
          <div>
            <Image
              src={eduImg}
              alt="Education logo"
              width={1200}
              height={1200}
              className="cursor-pointer sm:w-[200px] t:w-[250px] l:w-[300px] ll:w-[400px] mx-auto mt-[1rem] "
            />
          </div>
        </div>

        <div className="flex flex-col space-y-[2rem] t:col-start-1">
          <div></div>
          <div
            onClick={() => {
              showInterData(!interData);
            }}
           
            className=" sm:w-[90vw] t:w-[50vw] items-center space-x-2 text-center p-2 cursor-pointer border-[0.1px] rounded-[2rem] mb-[1rem] py-4 hover:scale-[1.04] neon-border-for-education duration-[1s] bg-[---labelbg]"
          >
            <div className="text-[---tlogo] ll:text-[18px]">(2023 - 2025)</div>
            <div className="flex space-x-[2rem] items-center mt-[1rem]">
              <div>
                <PiStudentBold className="text-[---tw] text-[40px]" />
              </div>
              <div className=" text-left">
                <div className="text-[---tw] font-bold text-[20px] ll:text-[25px] underline">
                  Intermediate
                </div>
                <div className="text-[---tw] text-[14px] ll:text-[18px] my-2">
                  Goverment Islamia Graduate College ,Railway Road, Lahore
                </div>
                {
                  interData ? null:<div className="text-[---pinkcircleofcodeblock] text-[14px] ll:text-[16px] my-2">
                  See More ...!!
                  </div>
                }
              </div>
            </div>

            {interData ? (
              <>
                <hr className="mt-[2rem]" />
                <div className="justify-items-center text-center px-4">
                  <div>
                    <Image
                      src={inter}
                      alt="Degree Image"
                      width={200}
                      height={200}
                      className=""
                    />
                  </div>
                  <div>
                    <span className="text-[---tw] ll:text-[18px]">
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
                showMatircData(!matricData);
              }}
               
              className=" sm:w-[90vw] t:w-[50vw] items-center space-x-2 text-center p-2 cursor-pointer border-[0.1px] rounded-[2rem] mb-[1rem] py-4 hover:scale-[1.04] neon-border-for-education duration-[1s] bg-[---labelbg]"
              >
              <div className="text-[---tlogo] ll:text-[18px]">(2021 - 2023)</div>
              <div className="flex space-x-[2rem] items-center mt-[1rem]">
                <div>
                <PiStudentBold className="text-[---tw] text-[40px]" />
                </div>
                <div className=" text-left">
                <div className="text-[---tw] font-bold text-[20px] ll:text-[25px] underline">
                Matriculation 
                </div>
                <div className="text-[---tw] text-[14px] ll:text-[18px] my-2">
                  Goverment Watan Islamia High School ,Brandthar Road, Lahore
                </div>
                {
                  matricData ? null:<div className="text-[---pinkcircleofcodeblock] text-[14px] ll:text-[16px] my-2">
                  See More ...!!
                  </div>
                }
                </div>
              </div>

              {matricData ? (
                <>
                <hr className="mt-[2rem]" />
                <div className="justify-items-center text-center px-4">
                  <div>
                  <Image
                    src={matric}
                    alt="Degree Image"
                    width={200}
                    height={200}
                    className=""
                  />
                  </div>
                  <div>
                  <span className="text-[---tw] ll:text-[18px]">
                    I completed my matriculation successfully with grade A.
                  </span>
                  </div>
                </div>
                </>
              ) : null}
              </div>
              <div
              onClick={() => {
              showHafizData(!hafizData);
            }}
           
            className=" sm:w-[90vw] t:w-[50vw] items-center space-x-2 text-center p-2 cursor-pointer border-[0.1px] rounded-[2rem] mb-[1rem] py-4 hover:scale-[1.04] neon-border-for-education duration-[1s] bg-[---labelbg]"
          >
            <div className="text-[---tlogo] ll:text-[18px]">(2017 - 2021)</div>
            <div className="flex space-x-[2rem] items-center mt-[1rem]">
              <div>
                <PiStudentBold className="text-[---tw] text-[40px]" />
              </div>
              <div className=" text-left">
                <div className="text-[---tw] font-bold text-[20px] ll:text-[25px] underline">
                  Hafiz e Quran
                </div>
                <div className="text-[---tw] text-[14px] ll:text-[18px] my-2">
                  Jamaya Ghosiya Rehman Bazar ,Gawalmandi ,Lahore
                </div>
                {
                  hafizData ? null:<div className="text-[---pinkcircleofcodeblock] text-[14px] ll:text-[16px] my-2">
                  See More ...!!
                  </div>
                }
              </div>
            </div>

            {hafizData ? (
              <>
                <hr className="mt-[2rem]" />
                <div className="justify-items-center text-center px-4">
                  <div>
                    <Image
                      src={hifz}
                      alt="Degree Image"
                      width={200}
                      height={200}
                      className=""
                    />
                  </div>
                  <div>
                    <span className="text-[---tw] ll:text-[18px]">
                       I completed my Hifz e Quran
                      successfully. I am very thankful to Allah for this
                      blessing. I am also thankful to my teacher who taught me Quran. That is the golden time period of my life.
                    </span>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div></div>
      </div>
    </>
  );
};
export default Education;
