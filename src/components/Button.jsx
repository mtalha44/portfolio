
// function Button({name, isBeam =false, containerClass}) {
//   return (
//     <button className={`btn ${containerClass}`} >
//         {
//             isBeam && (
//                 <span className="relative flex h-3 w-3 ">
//                     <span className="btn-ping"></span>
//                     <span className="btn-ping_dot"></span>
//                 </span>
//             )
//         }
//         {name}
//     </button>
//   )
// }

// export default Button


import React from "react";
import "./BlobButton.css"; // we'll add goo filter CSS here

const BlobButton = ({name , isBeam = false}) => {
  return (
    <div className="relative z-10 flex items-center justify-center mt-10">
      <button className="blob-btn text-white uppercase flex items-center gap-5 relative px-8 py-2 text-sm tracking-wider">
         {
            isBeam && (
                <span className="relative flex h-3 w-3 ">
                    <span className="btn-ping"></span>
                    <span className="btn-ping_dot"></span>
                </span>
            )
        }
         {name}
        <span className="blob-btn__inner absolute inset-0 overflow-hidden rounded-[30px] bg-black -z-10">
          <span className="blob-btn__blobs relative block h-full filter-[url('#goo')]">
            <span className="blob-btn__blob absolute bg-white rounded-full"></span>
            <span className="blob-btn__blob absolute bg-white rounded-full"></span>
            <span className="blob-btn__blob absolute bg-white rounded-full"></span>
            <span className="blob-btn__blob absolute bg-white rounded-full"></span>
          </span>
        </span>
      </button>

      {/* SVG Goo Filter */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default BlobButton;
