import React from "react";
import shape01 from "../assets/shape-01.png";
import shape02 from "../assets/shape-02.png";
import shape03 from "../assets/shape-03.png";
import shape04 from "../assets/shape-04.png";
import dots from "../assets/dots.png";
import dots02 from "../assets/dots-2.png";

export const Background = () => {
  return (
    <div className="background-image h-screen -z-1 overflow-hidden">
      <img
        src={shape01}
        alt="Background shape 1"
        className="float-animation-01 absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 mix-blend-overlay sm:h-56 h-36"
      />
      <img
        src={shape02}
        alt="Background shape 2"
        className="float-animation-02 absolute top-1/2 right-1/2 transform -translate-x-1/2 -translate-y-1/2 mix-blend-overlay sm:h-auto h-36 rotate-12"
      />
      <img
        src={shape03}
        alt="Background shape 3"
        className="float-animation-03 absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 mix-blend-overlay sm:h-auto h-48"
      />
      <img
        src={shape04}
        alt="Background shape 4"
        className="float-animation-04 absolute top-0 left-2/3 transform -translate-x-1/2 translate-y-1 mix-blend-overlay sm:h-36 h-28"
      />
      <img
        src={dots}
        alt="Background dots"
        className="absolute bottom-1/3 left-0 transform -translate-x-1/2 sm:h-52 sm:max-md:h-40 h-32"
      />
    </div>
  );
};
