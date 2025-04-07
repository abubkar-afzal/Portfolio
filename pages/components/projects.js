import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <>
      <div id="projects" className="justify-items-center mt-[4rem]  pb-[4rem]">
        <span className="text-[---bluecircleofcodeblock] bg-[---labelbg] text-[18px] font-bold p-2 rounded-[10px] px-[1rem] t:text-[24px] l:text-[26px] ll:text-[28px]">
          Projects
        </span>
        {/* e-commerce */}
        <div>
          <div className="mx-[2rem] my-[4rem] rounded-[1rem] sm:w-auto  outline-[---borderofcodeblock] outline  bg-black">
            <div className="mx-auto mt-[4px] flex justify-between border-b-2 border-[---borderofcodeblock] py-2">
              <div className="flex p-2 ml-2 space-x-4 t:items-center">
                <div className="w-[1rem] h-[1rem] l:w-[1.2rem] l:h-[1.2rem] ll:w-[1.5rem] ll:h-[1.5rem] rounded-full bg-[---redcircleofcodeblock]"></div>
                <div className="w-[1rem] h-[1rem] l:w-[1.2rem] l:h-[1.2rem] ll:w-[1.5rem] ll:h-[1.5rem] rounded-full bg-[---pinkcircleofcodeblock]"></div>
                <div className="w-[1rem] h-[1rem] l:w-[1.2rem] l:h-[1.2rem] ll:w-[1.5rem] ll:h-[1.5rem] rounded-full bg-[---bluecircleofcodeblock]"></div>
              </div>
              <div className="text-[---tw] text-[22px] t:text-[28px] t:mr-[12rem] ll:mr-[19rem] mr-[3rem] font-bold">
                Fashion
              </div>
            </div>

            <div className="sm:w-[250px] t:w-[500px] ll:w-[700px] p-4">
              <span className="text-[---tw] t:text-[16px] l:text-[18px] ll:text-[20px]">
                Project = &quot;
                <p className="text-[---introtextofabubakar] ml-[2rem] mt-[10px] t:text-[16px] l:text-[18px] ll:text-[20px]">
                  This is an E-commerce store project. Created using Next.js, Tailwindcss and other technologies.
                </p>
                &quot; ;
              </span>
              <br />
              <br />
              <span className="text-[---tw] t:text-[16px] l:text-[18px] ll:text-[20px]">
                Description = &quot;
                <p className="text-[---tlogo] ml-[2rem] mt-[10px] t:text-[16px] l:text-[18px] ll:text-[20px]">
                  In this project user can buy the cloths or other items. It
                  have different types of category men, women, kids, family.
                  There are lots of features in it like add to cart, remove from
                  cart, buy now and it also have admin page. From admin page you
                  can add, update and remove products. It have very good styling
                  and responsive design. It is a full stack project and all the
                  data is stored in database. It also have login and signup
                  functionality and user data will be secure therer. It have
                  many more feature for view all of them visit the store.
                </p>
                &quot; ;
              </span>
              <br />
              <br />
              <span className="text-[---tw] flex t:text-[16px] l:text-[18px] ll:text-[20px]">
                URL=
                <Link href={`https://fashion-store-seven-sable.vercel.app/`} target={`_blank`}>
                  <p className="text-[---bluecircleofcodeblock] underline mx-[5px] cursor-pointer  t:text-[16px] l:text-[18px] ll:text-[20px]">
                    https://fashion-store-seven-sable.vercel.app/
                  </p>
                </Link>
              </span>
            </div>
          </div>
        </div>
        {/* survey  */}
        <div>
          <div className="mx-[2rem] my-[4rem] rounded-[1rem] sm:w-auto  outline-[---borderofcodeblock] outline  bg-black">
            <div className="mx-auto mt-[4px] flex justify-between border-b-2 border-[---borderofcodeblock] py-2">
              <div className="flex p-2 ml-2 space-x-4 t:items-center">
                <div className="w-[1rem] h-[1rem] l:w-[1.2rem] l:h-[1.2rem] ll:w-[1.5rem] ll:h-[1.5rem] rounded-full bg-[---redcircleofcodeblock]"></div>
                <div className="w-[1rem] h-[1rem] l:w-[1.2rem] l:h-[1.2rem] ll:w-[1.5rem] ll:h-[1.5rem] rounded-full bg-[---pinkcircleofcodeblock]"></div>
                <div className="w-[1rem] h-[1rem] l:w-[1.2rem] l:h-[1.2rem] ll:w-[1.5rem] ll:h-[1.5rem] rounded-full bg-[---bluecircleofcodeblock]"></div>
              </div>
              <div className="text-[---tw] text-[22px] t:text-[28px] t:mr-[12rem] ll:mr-[19rem] mr-[3rem] font-bold">
                Survey
              </div>
            </div>

            <div className="sm:w-[250px] t:w-[500px] ll:w-[700px] p-4">
              <span className="text-[---tw] t:text-[16px] l:text-[18px] ll:text-[20px]">
                Project = &quot;
                <p className="text-[---introtextofabubakar] ml-[2rem] mt-[10px] t:text-[16px] l:text-[18px] ll:text-[20px]">
                  This is a public survey project. Created using Next.js, Tailwindcss and other libraries.
                </p>
                &quot; ;
              </span>
              <br />
              <br />
              <span className="text-[---tw] t:text-[16px] l:text-[18px] ll:text-[20px]">
                Description = &quot;
                <p className="text-[---tlogo] ml-[2rem] mt-[10px] t:text-[16px] l:text-[18px] ll:text-[20px]">
                  In this survey you can share your opinon and you data will
                  save there and it have lots of features like that if you
                  answer 1 time then this question not came again to you, it
                  have strong validations, all the data will store in database,
                  admin dashboard to manage without coding knowledge, dynamic
                  blogs page and many more
                </p>
                &quot; ;
              </span>
              <br />
              <br />
              <span className="text-[---tw] flex t:text-[16px] l:text-[18px] ll:text-[20px]">
                URL=
                <Link href={`https://survey-jet.vercel.app/`} target={`_blank`}>
                  <p className="text-[---bluecircleofcodeblock] underline mx-[5px] cursor-pointer  t:text-[16px] l:text-[18px] ll:text-[20px]">
                    https://survey-jet.vercel.app/
                  </p>
                </Link>
              </span>
            </div>
          </div>
        </div>

        {/* chating */}
        <div>
          <div className="mx-[2rem] my-[4rem] rounded-[1rem] sm:w-auto  outline-[---borderofcodeblock] outline  bg-black">
            <div className="mx-auto mt-[4px] flex justify-between border-b-2 border-[---borderofcodeblock] py-2">
              <div className="flex p-2 ml-2 space-x-4 t:items-center">
                <div className="w-[1rem] h-[1rem] l:w-[1.2rem] l:h-[1.2rem] ll:w-[1.5rem] ll:h-[1.5rem] rounded-full bg-[---redcircleofcodeblock]"></div>
                <div className="w-[1rem] h-[1rem] l:w-[1.2rem] l:h-[1.2rem] ll:w-[1.5rem] ll:h-[1.5rem] rounded-full bg-[---pinkcircleofcodeblock]"></div>
                <div className="w-[1rem] h-[1rem] l:w-[1.2rem] l:h-[1.2rem] ll:w-[1.5rem] ll:h-[1.5rem] rounded-full bg-[---bluecircleofcodeblock]"></div>
              </div>
              <div className="text-[---tw] text-[22px] t:text-[28px] t:mr-[12rem] ll:mr-[19rem] mr-[3rem] font-bold">
                Pegion
              </div>
            </div>

            <div className="sm:w-[250px] t:w-[500px] ll:w-[700px] p-4">
              <span className="text-[---tw] t:text-[16px] l:text-[18px] ll:text-[20px]">
                Project = &quot;
                <p className="text-[---introtextofabubakar] ml-[2rem] mt-[10px] t:text-[16px] l:text-[18px] ll:text-[20px]">
                  This is a chatting applicatio for mobiles. Created using React Native, Tailwindcss, Node.js and other technologies.
                </p>
                &quot; ;
              </span>
              <br />
              <br />
              <span className="text-[---tw] t:text-[16px] l:text-[18px] ll:text-[20px]">
                Description = &quot;
                <p className="text-[---tlogo] ml-[2rem] mt-[10px] t:text-[16px] l:text-[18px] ll:text-[20px]">
                  This is a chatting application for mobiles. It is a full stack project and all the data is stored in database. It have login and signup functionality and user data will be secure there. It have many more feature for view all of them visit the github.
                </p>
                &quot; ;
              </span>
              <br />
              <br />
              <span className="text-[---tw] flex t:text-[16px] l:text-[18px] ll:text-[20px]">
                URL=
                <Link href={`https://github.com/abubkar-afzal/Chat_App.git`} target={`_blank`}>
                  <p className="text-[---bluecircleofcodeblock] underline mx-[5px] cursor-pointer  text-[14px] t:text-[16px] l:text-[18px] ll:text-[20px]">
                  https://github.com/abubkar-afzal/Chat_App.git
                  </p>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Projects;
