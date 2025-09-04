import { useState } from "react";
import Image3DModel from "../components/ImageModel";
import SkillsRobot from "../components/SkillsRobot";
import { div } from "three/tsl";


const skills = [
  {
    id : 0,
    name: 'CSS',
    src: 'css',
    description: 'Dynamic and interactive web applications.'
  },
  {
    id : 1,
    name: 'JavaScript',
    src: 'javascript',
    description: 'Dynamic and interactive web applications.'
  },
  {
    id : 2,
    name: 'React',
    src: 'react',
    description: 'Reusable components and state management.'
  },
  {
    id : 3,
    name: 'Node.js',
    src: 'nodejs',
    description: 'Scalable, event-driven backend applications.'
  },
  {
    id : 4,
    name: 'Express.js',
    src: 'express',
    description: 'Efficient APIs and server-side logic.'
  },
  {
    id : 5,
    name: 'MongoDB',
    src: 'mongodb',
    description: 'Flexible NoSQL database for data storage.'
  },
  {
    id : 6,
    name: 'Three.js',
    src: 'threejs',
    description: 'Interactive 3D visuals for the web.'
  },
  {
    id : 7,
    name: 'Tailwind CSS',
    src: 'tailwind',
    description: 'Utility-first CSS for responsive UIs.'
  },
  {
    id : 8,
    name: 'Git & GitHub',
    src: 'github',
    description: 'Version control and team collaboration.'
  },
  {
    id : 9,
    name: 'Bootstrap',
    src: 'bootstrap',
    description: 'Version control and team collaboration.'
  }
];


const Skills  = () => {
    
    const [ hoverId , setHoverId ] = useState(null)
    
    return (
        <section className="skills-container c-space ">
                <p className="head-text">Skills</p>
            <div className="text-white  flex flex-row items-center justify-between mt-1">
                    <div className="w-[40%] h-full">
                     <SkillsRobot /> 

                    </div>
                    {/* <div className="w-[59%] justify-center items-center flex flex-row gap-2 flex-wrap">
                        {
                            skills.map((skill , idx) => (
                                <div className="flex flex-col items-center gap-2 w-36 justify-center" key={idx}>
                                    <div className="w-12 p-1 h-12">
                                        <Image3DModel src={`${skill.src}`}/>                            
                                    </div>
                                    <h3 className="text-white text-[0.91rem] text-center font-semibold">{skill.name}</h3>
                                    <p className="text-sm text-gray-400 text-center">{skill.description}</p>
                                </div>                       
                            ))
                        }
                    </div> */}
                    
                    <div className="w-[59%] grid grid-cols-5 grid-rows-2 gap-8">
                        {
                          skills.map((skill) => (
                            <div className="flex justify-center items-center gap-2 flex-col cursor-pointer" key={skill.id} onMouseEnter={() => setHoverId(skill.id)} onMouseLeave={() => setHoverId(null)}>
                              
                            { hoverId == skill.id ?
                               <div className="bg-blue-950 text-white text-sm p-3 text-center w-36 rounded-full absolute transform -translate-y-[5.5rem] -translate-x-16 ">
                                     {skill.description} 
                                    <div className="absolute -bottom-2 right-7 w-0 h-0 border-l-8 border-r-8 border-t-[15px] border-l-transparent border-r-transparent border-t-blue-950">
                                    </div>
                              </div> : ''
                            }
                              <div className="w-12 p-2 h-12 bg-blue-950 rounded-full border-1 boder-white">
                                  <img src={`/assets/${skill.src}.png`} alt="" />
                              </div>
                              <h1 className="text-white text-[0.70rem] text-center font-semibold">{skill.name}</h1>
                            </div>  
                        ))
                          
                        }
                        
                    </div>
                    
             </div>
            
        </section>
    )    
}

export default Skills;