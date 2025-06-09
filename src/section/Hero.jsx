// import {Canvas} from "@react-three/fiber"
import HackerRoom, { ReactRoom } from "../components/HackerRoom"
import Button from "../components/Button"
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
        <div className="w-full h-[88vh] max-[1095px]:h-[70vh] max-[875px]:h-[50vh]   max-[1095px]:transformY-10   inset-0 " >
            <HackerRoom />
            {/* <ReactRoom/> */}
        </div>
 
        <div className=" bottom-7 left-0 right-0 w-full z-10 c-space">
          <a href="#contact" className="w-fit">
            <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
          </a>
        </div>
    </section>
  )
}

export default Hero