import Link from "next/link";
import React from "react";

const Projects = () => {
    return(<><div id="projects" className="justify-items-center mt-[4rem]  pb-[4rem]">
        <span className="text-[---bluecircleofcodeblock] bg-[---labelbg] text-[18px] font-bold p-2 rounded-[10px] px-[1rem] t:text-[24px] l:text-[26px] ll:text-[28px]">
          Projects
        </span>
        <div> <div className="mx-[2rem] my-[4rem] rounded-[1rem] sm:w-auto  outline-[---borderofcodeblock] outline  bg-black">
                    <div className="mx-auto mt-[4px] flex justify-between border-b-2 border-[---borderofcodeblock] py-2">
                        <div className="flex p-2 ml-2 space-x-4 t:items-center">
                            <div className="w-[1rem] h-[1rem] l:w-[1.2rem] l:h-[1.2rem] ll:w-[1.5rem] ll:h-[1.5rem] rounded-full bg-[---redcircleofcodeblock]"></div>
                            <div className="w-[1rem] h-[1rem] l:w-[1.2rem] l:h-[1.2rem] ll:w-[1.5rem] ll:h-[1.5rem] rounded-full bg-[---pinkcircleofcodeblock]"></div>
                            <div className="w-[1rem] h-[1rem] l:w-[1.2rem] l:h-[1.2rem] ll:w-[1.5rem] ll:h-[1.5rem] rounded-full bg-[---bluecircleofcodeblock]"></div>
                        </div>
                        <div className="text-[---tw] text-[22px] t:text-[28px] t:mr-[12rem] ll:mr-[19rem] mr-[3rem] font-bold">Survey</div>
                    </div>
                    
                    <div className="sm:w-[250px] t:w-[500px] ll:w-[700px] p-4">
                       <span className="text-[---tw] t:text-[16px] l:text-[18px] ll:text-[20px]">Project = &quot;<p className="text-[---introtextofabubakar] ml-[2rem] mt-[10px] t:text-[16px] l:text-[18px] ll:text-[20px]">This Is A Public Survey Project </p>&quot; ; 
                         </span><br /><br />
                         <span className="text-[---tw] t:text-[16px] l:text-[18px] ll:text-[20px]">Description = &quot;<p className="text-[---tlogo] ml-[2rem] mt-[10px] t:text-[16px] l:text-[18px] ll:text-[20px]">In This Survey You Can Share Your Opinon And You Data Will Save There And It Have Lots Of Features Like That If You Answer 1 Time Then This Question Not Came Again To You, It Have Strong Validations, All The Data Will Store In DataBase, Admin Dashboard To Manage Without Coding knowledge, Dynamic Blogs Page And Many More</p> &quot; ; 
                         </span><br /><br />
                        <span className="text-[---tw] flex t:text-[16px] l:text-[18px] ll:text-[20px]">URL = &quot;  <Link href={`https://survey-abubkar-afzals-projects.vercel.app/` } target={`_blank`}><p className="text-[---bluecircleofcodeblock] underline mx-[5px] cursor-pointer hover:scale-[1.1] duration-[1s] t:text-[16px] l:text-[18px] ll:text-[20px]"> Survey </p></Link>&quot; ; 
                         </span>
                    </div>
                    </div></div></div></>)
}
export default Projects;