import Link from "next/link";
import React from "react";

const Projects = () => {
    return(<><div className="justify-items-center mt-[4rem] bg1">
        <span className="text-[---bluecircleofcodeblock] bg-[---labelbg] text-[18px] font-bold p-2 rounded-[10px] px-[1rem]">
          Projects
        </span>
        <div> <div className="mx-[2rem] my-[2rem] rounded-[1rem] sm:w-auto  outline-[---borderofcodeblock] outline  bg-black">
                    <div className="mx-auto mt-[4px] flex justify-between border-b-2 border-[---borderofcodeblock] py-2">
                        <div className="flex p-2 ml-2 space-x-4 ">
                            <div className="w-[1rem] h-[1rem] rounded-full bg-[---redcircleofcodeblock]"></div>
                            <div className="w-[1rem] h-[1rem] rounded-full bg-[---pinkcircleofcodeblock]"></div>
                            <div className="w-[1rem] h-[1rem] rounded-full bg-[---bluecircleofcodeblock]"></div>
                        </div>
                        <div className="text-[---tw] text-[22px] mr-[3rem] font-bold">Survey</div>
                    </div>
                    
                    <div className="sm:w-[250px] p-4">
                       <span className="text-[---tw]">Project = &quot;<p className="text-[---introtextofabubakar] ml-[2rem] mt-[10px]">This Is A Public Survey Project </p>&quot; ; 
                         </span><br /><br />
                         <span className="text-[---tw] ">Description = &quot;<p className="text-[---tlogo] ml-[2rem] mt-[10px]">In This Survey You Can Share Your Opinon And You Data Will Save There And It Have Lots Of Features Like That If You Answer 1 Time Then This Question Not Came Again To You, It Have Strong Validations, All The Data Will Store In DataBase, Admin Dashboard To Manage Without Coding knowledge, Dynamic Blogs Page And Many More</p> &quot; ; 
                         </span><br /><br />
                        <span className="text-[---tw] flex">URL = &quot;  <Link href={`https://survey-abubkar-afzals-projects.vercel.app/` } target={`_blank`}><p className="text-[---bluecircleofcodeblock] underline mx-[5px] cursor-pointer hover:scale-[1.1] duration-[1s]"> Survey </p></Link>&quot; ; 
                         </span>
                    </div>
                    </div></div></div></>)
}
export default Projects;