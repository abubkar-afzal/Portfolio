import Image from "next/image";
import React, { useState } from "react";
import eduImg from "../../public/education.png";
import { PiStudentBold } from "react-icons/pi";

const Education = () => {
    const [interData, showInterData] = useState(false);
    const [matricData, showMatircData] = useState(false);
    const [hafizData, showHafizData] = useState(false);
  return (
    <>
      <div className="justify-items-center my-[4rem] ">
        <span className="text-[---bluecircleofcodeblock] bg-[---labelbg] text-[18px] font-bold p-2 rounded-[10px] px-[1rem]">
          Education
        </span>
        <div className="bg1">
          <div>
            <Image
              src={eduImg}
              alt="Education logo"
              width={200}
              height={200}
              className="cursor-pointer"
            />
          </div>  </div>

          <div className="flex flex-col space-y-[2rem]">
            <div>

            </div>
          <div onClick={()=>{showInterData(!interData)}} onMouseEnter={()=>{showInterData(true)}} onMouseLeave={()=>{showInterData(false)}}  className=" sm:w-[90vw] items-center space-x-2 text-center p-2 cursor-pointer border-[0.1px] rounded-[2rem] mb-[1rem] py-4 hover:scale-[1.04] neon-border-for-education duration-[1s] bg-[---labelbg]">
            <div className="text-[---tlogo]">
              (Jan 2022 - Present)
            </div>
            <div className="flex space-x-[2rem] items-center mt-[1rem]">
              <div>
                <PiStudentBold className="text-[---tw] text-[40px]" />
              </div>
              <div className=" text-left">
                <div className="text-[---tw] font-bold text-[20px] underline">Intermediate</div>
                <div className="text-[---tw] text-[14px] my-2">
                  Goverment Islamia Graduate College ,Railway Road, Lahore
                </div>
              </div>
            </div>
          
         {
            interData ?<>
            <hr className="mt-[2rem]"/>
             <div className="justify-items-center text-center px-4">
                
                    <div><Image src={eduImg} alt="Degree Image" width={200} height={200} className=""/></div>
                    <div><span className="text-[---tw]">My Intermediate Is Not Completed Right Now. I Give The 1st Year Exams And It&apos;s Result Is There. I Also Give The 2nd Year Exams And It&apos;s Result Is Still Pending. </span></div>
               
            </div></> : null
         }</div>
          <div onClick={()=>{showMatircData(!matricData)}} onMouseEnter={()=>{showMatircData(true)}} onMouseLeave={()=>{showMatircData(false)}}  className=" sm:w-[90vw] items-center space-x-2 text-center p-2 cursor-pointer border-[0.1px] rounded-[2rem] mb-[1rem] py-4 hover:scale-[1.04] neon-border-for-education duration-[1s] bg-[---labelbg]">
            <div className="text-[---tlogo]">
              (Jan 2022 - Present)
            </div>
            <div className="flex space-x-[2rem] items-center mt-[1rem]">
              <div>
                <PiStudentBold className="text-[---tw] text-[40px]" />
              </div>
              <div className=" text-left">
                <div className="text-[---tw] font-bold text-[20px] underline">Matric</div>
                <div className="text-[---tw] text-[14px] my-2">
                  Goverment Watan Islamia High School ,Brandthar Road, Lahore
                </div>
              </div>
            </div>
            
         {
            matricData ?<>
            <hr className="mt-[2rem]"/>
             <div className="justify-items-center text-center px-4">
                
                    <div><Image src={eduImg} alt="Degree Image" width={200} height={200} className=""/></div>
                    <div><span className="text-[---tw]">My Intermediate Is Not Completed Right Now. I Give The 1st Year Exams And It&apos;s Result Is There. I Also Give The 2nd Year Exams And It&apos;s Result Is Still Pending. </span></div>
               
            </div></> : null
         }
          </div>
          <div onClick={()=>{showHafizData(!hafizData)}} onMouseEnter={()=>{showHafizData(true)}} onMouseLeave={()=>{showHafizData(false)}}  className=" sm:w-[90vw] items-center space-x-2 text-center p-2 cursor-pointer border-[0.1px] rounded-[2rem] mb-[1rem] py-4 hover:scale-[1.04] neon-border-for-education duration-[1s] bg-[---labelbg]">
            <div className="text-[---tlogo]">
              (Jan 2022 - Present)
            </div>
            <div className="flex space-x-[2rem] items-center mt-[1rem]">
              <div>
                <PiStudentBold className="text-[---tw] text-[40px]" />
              </div>
              <div className=" text-left">
                <div className="text-[---tw] font-bold text-[20px] underline">Hafiz e Quran</div>
                <div className="text-[---tw] text-[14px] my-2">
                  Jamaya Ghosiya Rehman Bazar ,Gawalmandi ,Lahore
                </div>
              </div>
            </div>
            
         {
            hafizData ?<>
            <hr className="mt-[2rem]"/>
             <div className="justify-items-center text-center px-4">
                
                    <div><Image src={eduImg} alt="Degree Image" width={200} height={200} className=""/></div>
                    <div><span className="text-[---tw]">My Intermediate Is Not Completed Right Now. I Give The 1st Year Exams And It&apos;s Result Is There. I Also Give The 2nd Year Exams And It&apos;s Result Is Still Pending. </span></div>
               
            </div></> : null
         }
          </div>
         
          </div>
      </div>
    </>
  );
};
export default Education;
