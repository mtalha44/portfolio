import { useMemo, useRef } from "react";
import Globe from "react-globe.gl";
import { useMediaQuery } from "react-responsive";


const AboutGlobe = () => {
    const globeRef = useRef();
    const isSmallMobile = useMediaQuery({ maxWidth:495 })

    const arcsData = useMemo(() => {
     
    return Array.from({ length: 15 }, () => {
    
      const startLat = +(Math.random() * 180 - 90).toFixed(4);
      const startLng = +(Math.random() * 360 - 180).toFixed(4);

      // Generate end point far from start point (opposite hemisphere)
      let endLat = -startLat + (Math.random() * 20 - 10);  // Flip latitude, add noise
      let endLng = startLng > 0 ? startLng - 180 : startLng + 180; // Opposite longitude

      endLat = +endLat.toFixed(4);
      endLng = +endLng.toFixed(4);

      return {
        startLat,
        startLng,
        endLat,
        endLng,
        color: [
          `hsl(${Math.floor(Math.random() * 360)}, 80%, 60%)`,
          `hsl(${Math.floor(Math.random() * 360)}, 80%, 60%)`
        ]
      };
    });
  },[]);

    return (
           <Globe
               ref={globeRef}
               height={ isSmallMobile ? 170 : 320 }
               width={320}
               globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
               bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
               backgroundColor="rgba(0,0,0,0)"
               backgroundImageOpacity={0.5}  
               showGraticules
               showAtmosphere={true}
               arcsData={arcsData}
               arcStartLat={d => d.startLat}
               arcStartLng={d => d.startLng}
               arcEndLat={d => d.endLat}
               arcEndLng={d => d.endLng}
               arcColor={d => d.color}
               arcDashLength={0.4}
               arcDashGap={4}
               arcDashInitialGap={() => Math.random() * 5}
               arcDashAnimateTime={3000}
               
           />
    )
}

export default AboutGlobe