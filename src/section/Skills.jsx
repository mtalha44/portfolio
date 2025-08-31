import SkillCloud from "../components/SkiilsCloud";
import SkillsRobot from "../components/SkillsRobot";

const Skills  = () => {
    return (
        <section className="skills-container c-space ">
                <p className="head-text">Skills</p>
            <div className="text-white  flex flex-row items-center justify-between mt-1">
                    <div className="w-[60%] h-full">
                     <SkillsRobot /> 

                    </div>
                    <div className="w-[39%]">
                        {/* <img src="/assets/skills.png" alt="" height={"auto"} width={"90%"}/> */}
                        <SkillCloud />
                    </div>
             </div>
            
            {/* <SkillsRobot /> */}
        </section>
    )    
}

export default Skills;