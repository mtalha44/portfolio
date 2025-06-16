import HackerRoom, { CubeCanvas } from "../components/HackerRoom"
import Button from "../components/Button"
import { ModelCanvas } from "../components/models"
import TargetModel from "../components/Target"
import Rings from "../components/Ring"
import RingsModel from "../components/Ring"
function Hero() {

  return (
    <section className="min-h-screen w-full flex flex-col relative mb-12">
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 ">
            <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
                Hi, I'm Talha
                <span className="waving-hand">👋</span>
            </p>
            <p className="hero_tag text-gray_gradient z-50">Building Products & Brands</p>
        </div>
        <div className="w-full relative h-[88vh] max-[1095px]:h-[70vh] max-[875px]:h-[50vh]  max-[1095px]:transformY-10   inset-0 " >
           
            <HackerRoom />
            <div className="absolute top-0 right-28 w-28 h-28  max-[875px]:right-20 max-[475px]:right-10 max-[475px]:h-[5rem] max-[475px]:w-[2.5rem] ">
              <ModelCanvas src={'react'}/>
            </div>
            <div className="absolute top-[20rem] w-28 h-28 right-48 ">
              <ModelCanvas src={'cube'}/>
            </div>            
            <div className="absolute top-[25rem] left-44 w-[150px] h-[100px]">
              <TargetModel />
            </div>
            <div className="absolute top-[-7rem] left-32 w-[150px] h-[150px] ">
              <RingsModel />
            </div>

        </div>
            
        <div className="mt-4 w-full z-10 c-space">
          <a href="#contact" className="w-fit">
            <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
          </a>
        </div>
    </section>
  )
}

export default Hero