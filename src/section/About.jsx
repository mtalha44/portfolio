import { useState } from "react";
import Button from "../components/Button";
import AboutGlobe from "../components/Globe";
import Laptop from "../components/laptop";

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
        <section className="c-sapce my-20 max-[495px]:mt-28">
            <h3 className='head-text mb-10'>
                About Me
            </h3>
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full"> 
                <div className="col-span-1 xl:row-span-3 ">
                    <div className="grid-container items-center max-[495px]:flex max-[495px]:flex-col">
                        <img src="/assets/Talha-transparent.png" alt="grid-1" className="w-[70%] max-[495px]:w-36 max-[495px]:h-auto h-fit object-contain "/>
                        <div>
                            <p className="grid-headtext max-[495px]:text-center">Hi, I'm Talha</p>
                            <p className="grid-subtext max-[495px]:text-center">With 2 years of experienced, I have honed my skills in frontend and backend development, with a focus on animated 3d websites.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container items-center">
                            <div className="w-full h-full max-[495px]:w-[70%] max-[495px]:flex max-[495px]:flex-col max-[495px]:items-center">
                                <Laptop />
                            </div>

                        <div>
                            <p className="grid-headtext max-[495px]:text-center">Tech Stack</p>
                            <p className="grid-subtext max-[495px]:text-center">Focused on modern JavaScript, especially React and Next.js, to build high-performance and scalable web apps.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container max-[495px]:flex max-[495px]:flex-col max-[495px]:items-center ">
                        <div className="rounded-3xl w-full h-fit flex justify-center itmes-center max-[495px]:w-[70%]">
                            <AboutGlobe/>
                        </div>
                        <div>
                            <p className="grid-headtext max-[495px]:text-center">
                                Remote. Flexible. Worldwide.
                            </p>
                            <p className="grid-subtext max-[495px]:text-center max-[495px]:mb-5" >
                                Remote-friendly developer based in Lahore, Pakistan, with flexible availability across global time zones.
                            </p>
                            <Button name="Contact Me" isBeam containerClass="mt-10 w-full "/>
                            
                        </div>
                    </div>
                </div>
                
                <div className="xl:col-span-2 xl:row-span-3">
                        <div className="grid-container "> 
                            <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[260px] h-fit object-contain"/>
                            <div>
                                <p className="grid-headtext max-[495px]:text-center">
                                    My Passion for Coding
                                </p>
                                <p className="grid-subtext max-[495px]:text-center">
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