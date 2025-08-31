import { useEffect, useRef, useState } from "react";

export const SplineRobot = () => {
  const ref = useRef(null);
  const [load, setLoad] = useState(false);

  // Step 1: Detect when section is near viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // load 200px before visible
    );

    if (ref.current) observer.observe(ref.current);
  }, []);

  // Step 2: Load Spline script once user is near section
  useEffect(() => {
    if (load && !document.getElementById("spline-viewer-script")) {
      const script = document.createElement("script");
      script.id = "spline-viewer-script";
      script.type = "module";
      script.src =
        "https://unpkg.com/@splinetool/viewer@1.10.38/build/spline-viewer.js";
      document.body.appendChild(script);
    }
  }, [load]);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        minHeight: "100%", // placeholder height so page layout is stable
        overflow: "hidden",
      }}
    >
      {load && (
        <spline-viewer
          url="https://prod.spline.design/Xen9kV6X3DHkBGUy/scene.splinecode"
          loading-anim
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      )}
    </div>
  );
};
