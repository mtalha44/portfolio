// import {Canvas} from "@react-three/fiber"
import HackerRoom from "../components/HackerRoom"

function Hero() {

  return (
    <section className="min-h-screen w-full flex flex-col relative mb-12">
        {/* <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 mb-[-12vh]  max-[575px]:mb-[-20vh] max-[495px]:mb-[-18vh] max-[367px]:mb-[-25vh] "> */}
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 ">
            <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
                Hi, I'm Talha
                <span className="waving-hand">👋</span>
            </p>
            <p className="hero_tag text-gray_gradient z-50">Building Products & Brands</p>
        </div>

        {/* <div className="w-full h-full absolute inset-0">
            // <Canvas className="w-full h-full">
            //     <PerspectiveCamera makeDefault position={[0,0,30]}/>
            // </Canvas> }
            <HackerRoom/>
        </div> */}
        {/* <div className="w-[60%]  h-[88vh] m-auto mb-12 max-[795px]:w-[70%] max-[635px]:w-[85%] max-[575px]:w-[90%] max-[495px]:w-[95%] max-[495px]:h-[70vh] max-[375px]:w-[100%] max-[365px]:h-[50vh]"> */}
        <div className="w-full h-[88vh] max-[1095px]:h-[70vh] max-[875px]:h-[50vh]   max-[1095px]:transformY-10   inset-0 "
             
        >
            <HackerRoom />
        </div>
        {/* <div className="">
          <HackerRoom />
        </div> */}

    </section>
  )
}

export default Hero