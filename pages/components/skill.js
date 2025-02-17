import Image from "next/image";
import React, { useState } from "react";
import img1 from "../../public/cd.png";
import img11 from "../../public/css.png";
import img2 from "../../public/dj.png";
import img3 from "../../public/f.png";
import img4 from "../../public/html.png";
import img5 from "../../public/js.png";
import img6 from "../../public/kivy.png";
import img7 from "../../public/mdb.png";
import img8 from "../../public/mysql.png";
import img9 from "../../public/next.png";
import img10 from "../../public/node.png";
import img12 from "../../public/php.png";
import img13 from "../../public/python.png";
import img14 from "../../public/r.png";
import img15 from "../../public/redis.png";
import img16 from "../../public/rn.png";
import img17 from "../../public/tw.png";

const Skill = () => {
  const [loop, setLoop] = useState(true);
  
  const SkillsData = [
    {
      id: 1,
      skill: "JavaScript",
      img: img5,
    },
    {
      id: 2,
      skill: "HTML",
      img: img4,
    },
    {
      id: 3,
      skill: "CSS",
      img: img11,
    },{
        id: 4,
        skill: "Tailwind CSS",
        img: img17,
      },
    {
      id: 5,
      skill: "Flask",
      img: img3,
    },
    {
      id: 6,
      skill: "React",
      img: img14,
    },
    {
      id: 7,
      skill: "React Native",
      img: img16,
    },
    {
      id: 8,
      skill: "MongoDB",
      img: img7,
    },
    {
      id: 9,
      skill: "Kivy",
      img: img6,
    },
    {
      id: 10,
      skill: "Python",
      img: img13,
    },
    {
      id: 11,
      skill: "Django",
      img: img2,
    },
    {
      id: 12,
      skill: "Redis",
      img: img15,
    },
    {
      id: 13,
      skill: "MySQL",
      img: img8,
    },
    {
      id: 14,
      skill: "PHP",
      img: img12,
    },
    {
      id: 15,
      skill: "Next JS",
      img: img9,
    },
    {
      id: 16,
      skill: "Node JS",
      img: img10,
    },
    {
      id: 17,
      skill: "Corel Draw",
      img: img1,
    },
  ];
  return (
    <>
      <div id="skills" className="justify-items-center my-[4rem] bg1 p-[2rem]">
        <span className="text-[---bluecircleofcodeblock] bg-[---labelbg] text-[18px] font-bold p-2 rounded-[10px] px-[1rem] t:text-[24px] l:text-[26px] ll:text-[28px]">
          Skills
        </span>
        <div className="relative">
        <div  className="my-[1rem] p-[6rem] mt-[4rem] flex space-x-[30px] t:space-x-[50px]  overflow-x-hidden slideshow ">
                {
                    SkillsData.map((i)=>{
                        return(<>
                            <div key={i.id}
                              onMouseEnter={() => {
                                setLoop(false);
                              }}
                              onMouseLeave={() => {
                                setLoop(true);
                              }}
                              className="w-[10rem] h-[10rem] t:w-[11rem] t:h-[11rem] ll:w-[12rem] ll:h-[12rem] bg-[---labelbg] flex flex-col overflow-hidden justify-items-center items-center rounded-[10px] p-2 cursor-pointer neon-border duration-[2s]"
                            ><div className="w-[10rem] h-[7rem] justify-items-center place-content-center">
                            <Image
                              src={i.img}
                              alt="skillLogo"
                              width={190}
                              height={190}
                              className="DropShadow sm:w-[90px] sm:h-[90px] t:w-[100px] t:h-[100px] l:w-[130px] l:h-[130px] ll:w-[140px] ll:h-[140px] "
                            />
                          </div>
                          <span className="text-[1rem] t:text-[20px] t:mt-[1rem] l:mt-[1rem] ll:mt-[2rem] text-[---tw]">{i.skill}</span>
                        </div>
                        </>
                          )
                    })
                }
              </div>
          
        </div>
      </div>
    </>
  );
};
export default Skill;
