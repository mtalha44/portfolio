import { useEffect } from "react";
export const SplineRobot = () => {
  useEffect(() => {
    // Dynamically add the spline-viewer script only once
    const scriptId = 'spline-viewer-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'module';
      script.src = 'https://unpkg.com/@splinetool/viewer@1.10.38/build/spline-viewer.js';
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="overflow-hidden">
      <spline-viewer
            url="https://prod.spline.design/Xen9kV6X3DHkBGUy/scene.splinecode"
        loading-anim
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
        //   transform : "scale(1.1)",
        
        }}
      />
    </div>
  );
};
