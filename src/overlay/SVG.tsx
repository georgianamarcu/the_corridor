import { FC, useEffect } from "react";
import { gsap } from "gsap";
import { SVGAttributes } from "react";

const SVG: FC<SVGAttributes<SVGSVGElement>> = (props) => {
  useEffect(() => {
    gsap.to("#radioactiveIcon", {
      rotation: 360,
      repeat: -1,
      ease: "linear",
      duration: 5,
      transformOrigin: "center center",
    });
  }, []);

  return (
    <svg
      id="radioactiveIcon"
      xmlns="http://www.w3.org/2000/svg"
      width="62"
      height="62"
      fill="#00ffff"
      viewBox="0 0 256 256"
      style={{ position: "absolute", zIndex: 9999, bottom: "5%", right: "2%" }}
      {...props} // Spread the props to make it customizable
    >
      <path d="M116,128a12,12,0,1,1,12,12A12,12,0,0,1,116,128Zm-15.78,3.51A29,29,0,0,1,100,128a28,28,0,0,1,16.94-25.73,4,4,0,0,0,1.87-5.66L90.75,48a16,16,0,0,0-23.1-5.07,103.83,103.83,0,0,0-43.58,75.49,16.21,16.21,0,0,0,4.17,12.37A16,16,0,0,0,40,136H96.26A4,4,0,0,0,100.22,131.51Zm131.71-13.09a103.83,103.83,0,0,0-43.58-75.49A16,16,0,0,0,165.25,48L137.19,96.61a4,4,0,0,0,1.87,5.66A28,28,0,0,1,156,128a29,29,0,0,1-.22,3.51,4,4,0,0,0,4,4.49H216a16,16,0,0,0,11.76-5.21A16.21,16.21,0,0,0,231.93,118.42ZM150.8,151.48a4,4,0,0,0-5.91-1.15,28,28,0,0,1-33.78,0,4,4,0,0,0-5.91,1.15L77.25,199.91a16,16,0,0,0,7.12,22.52,104.24,104.24,0,0,0,87.26,0,16,16,0,0,0,7.12-22.52Z"></path>
    </svg>
  );
};

export default SVG;
