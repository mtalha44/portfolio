import { useState } from "react";
import Button from "../components/Button";
import AboutGlobe from "../components/Globe";

const About = () => {

    const [hasCopied , setCopied ] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText("mt4458649@gmail.com");
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }
    return (
        <section className="c-sapce my-20 ">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full"> 
                <div className="col-span-1 xl:row-span-3 ">
                    <div className="grid-container">
                        {/* <img src="/assets/anime.jpg" alt="grid-1" className="w-full sm-h-[276px] h-fit object-contain "/> */}
                        {/* <img src="/assets/grid1.png" alt="grid-1" className="w-full sm-h-[276px] h-fit object-contain "/> */}
                        <img src="/assets/Talha-transparent.png" alt="grid-1" className="w-[70%] sm-h-[276px] h-fit object-contain "/>
                        <div>
                            <p className="grid-headtext">Hi, I'm Talha</p>
                            <p className="grid-subtext">With 2 years of experienced, I have honed my skills in frontend and backend development, with a focus on animated 3d websites.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container items-center">
                        <img src="/assets/tech-stack.png" alt="grid-2" className="w-full sm:w-[276px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">I specialize in JavaScript with focus on React and Next.js ecosystem.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        {/* <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center itmes-center"> 
                            <Globe 
                                height={326}
                                width={326}
                                backgroundColor="rgba(0,0,0,0)"
                                backgroundImageOpacity={0.5}  
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"                                   
                                labelsData={[
                                  {
                                    lat: 31.5204,         // Latitude (e.g., Lahore)
                                    lng: 74.3587,         // Longitude
                                    text: "I'm live here! \n Lahore, PK",   // Label text
                                    color: "white",      // Label color
                                    size: 3             // Try values like 1.5 or 2 (20 might be too big)
                                  }
                                ]}
                                labelLat={d => d.lat}
                                labelLng={d => d.lng}
                                labelText={d => d.text}
                                labelColor={d => d.color}
                                labelSize={d => d.size}        

/>
                        </div> */}
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center itmes-center">
                            <AboutGlobe/>
                        </div>
                        <div>
                            <p className="grid-headtext">
                                I work remotely across most timezones.
                            </p>
                            <p className="grid-subtext">
                                I'm based in Lahore, Pakistan with remote work available.
                            </p>
                            <Button name="Contact Me" isBeam containerClass="mt-10 w-full "/>
                        </div>
                    </div>
                </div>
                
                <div className="xl:col-span-2 xl:row-span-3">
                        <div className="grid-container"> 
                            <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[260px] h-fit object-contain"/>
                            <div>
                                <p className="grid-headtext">
                                    My Passion for Coding
                                </p>
                                <p className="grid-subtext">
                                    I love solving problems and building things that make a difference. Coding isn't just a difference for me, it's a way to express my creativity and problem-solving skills.
                                </p>
                            </div>
                        </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" />
                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={ hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"} alt="copy" />
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">mt4458649@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </section>
    )
}

export default About