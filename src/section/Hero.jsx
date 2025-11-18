import {lazy, useEffect} from 'react'
import Button from "../components/Button"
import TypingEffect from "./Description"

const HackerRoom = lazy(() => import('../components/HackerRoom'));
const TargetModel = lazy(() => import('../components/Target'));
const RingsModel = lazy(() => import('../components/Ring'));
const ModelCanvas = lazy(() => import('../components/models').then(module => ({ default: module.ModelCanvas })));

function Hero() {

  return (
    <section className="min-h-screen w-full flex flex-col relative mb-12 max-[875px]:mb-3">
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 ">
            <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
                Hi, I'm Talha
                <span className="waving-hand">👋</span>
            </p>
            <div className="max-[395px]:h-[3rem]">
              <TypingEffect/>
            </div>
        </div>
        <div className="w-full relative h-[88vh] max-[1095px]:h-[70vh] max-[875px]:h-[50vh]  max-[1095px]:transformY-10   inset-0 " >
           
            <HackerRoom />
            <div className="absolute top-0 right-28 w-28 h-28  max-[875px]:right-16 max-[595px]:right-10 max-[595px]:h-[4rem] max-[595px]:w-[2rem] ">
              <ModelCanvas src={'react'}/>
            </div>
            <div className="absolute top-[20rem] w-28 h-28 right-48 max-[1095px]:right-14 max-[1095px]:top-[30rem] max-[885px]:w-20 max-[885px]:h-20 max-[885px]:top-[22rem] max-[595px]:w-14 max-[595px]:h-14 max-[595px]:top-[19rem] max-[395px]:top-[17rem] max-[395px]:right-4">
              <ModelCanvas src={'cube'}/>
            </div>            
            <div className="absolute top-[25rem] left-44 w-[150px] h-[100px] max-[1095px]:left-10 max-[1095px]:top-[31rem] max-[875px]:left-18 max-[875px]:top-[22rem] max-[875px]:w-[80px] max-[875px]:h-[80px] max-[795px]:top-[20rem] max-[795px]:left-6 max-[595px]:w-[50px] max-[595px]:h-[50px] max-[595px]:top-[16rem] max-[395px]:left-0">
              <TargetModel />
            </div>
            <div className="absolute top-[-7rem] left-32 w-[150px] h-[150px] max-[1135px]:left-12 max-[985px]:top-[-1rem] max-[845px]:left-0 max-[595px]:w-[100px] max-[595px]:h-[100px]">
              <RingsModel />
            </div>

        </div>
            
        <div className="mt w-full z-10 c-space">
          <a href="#contact" className="w-fit">
            <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
          </a>
        </div>
    </section>
  )
}

export default Hero