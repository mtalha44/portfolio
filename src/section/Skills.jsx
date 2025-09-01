import Image3DModel from "../components/ImageModel";
import SkillsRobot from "../components/SkillsRobot";


const skills = [
  {
    name: 'JavaScript',
    src: 'javascript',
    description: 'Dynamic and interactive web applications.'
  },
  {
    name: 'React',
    src: 'react',
    description: 'Reusable components and state management.'
  },
  {
    name: 'Node.js',
    src: 'nodejs',
    description: 'Scalable, event-driven backend applications.'
  },
  {
    name: 'Express.js',
    src: 'express',
    description: 'Efficient APIs and server-side logic.'
  },
  {
    name: 'MongoDB',
    src: 'mongodb',
    description: 'Flexible NoSQL database for data storage.'
  },
  {
    name: 'Three.js',
    src: 'threejs',
    description: 'Interactive 3D visuals for the web.'
  },
  {
    name: 'Tailwind CSS',
    src: 'tailwind',
    description: 'Utility-first CSS for responsive UIs.'
  },
  {
    name: 'Git & GitHub',
    src: 'github',
    description: 'Version control and team collaboration.'
  }
];


const Skills  = () => {
    return (
        <section className="skills-container c-space ">
                <p className="head-text">Skills</p>
            <div className="text-white  flex flex-row items-center justify-between mt-1">
                    <div className="w-[40%] h-full">
                     <SkillsRobot /> 

                    </div>
                    <div className="w-[59%] justify-center items-center flex flex-row gap-2 flex-wrap">
                        {
                            skills.map((skill , idx) => (
                                <div className="flex flex-col items-center gap-1 w-36 justify-center" key={idx}>
                                    <div className="w-16 h-16">
                                        <Image3DModel src={`${skill.src}`}/>                            
                                    </div>
                                    <h3 className="text-white text-[0.91rem] text-center font-semibold">{skill.name}</h3>
                                    <p className="text-sm text-gray-400 text-center">{skill.description}</p>
                                </div>                       
                            ))
                        }
                    </div>
             </div>
            
        </section>
    )    
}

export default Skills;