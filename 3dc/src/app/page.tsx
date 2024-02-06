// import Image from "next/image";

// export default function Home() {
//   return (
//     < Hero />
//     < About />
//     <Events />
//     <Newsletter />
//     <Disclaimer />
//   );
// }

"use client"

//import { Button } from "@material-tailwind/react";
import ClubLogo from "@/components/ClubLogo";
//import CategoryCards from "@/components/CategoryCards";
//import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Newsletter from "@/components/Newsletter";
import Disclaimer from "@/components/Disclaimer";
import Events from "@/components/Events";
import Example from "@/components/Footer";
import React, { useEffect, useRef, useState} from "react";
import { Reveal } from "@/components/Reveal";
import Box from "@/components/ScrollAnimationTrigger";
import {Shapes} from "@/components/OnScroll";
import Navigation from "@/components/NavBar";

//const RevealOnScroll = ({ children }) => {
// const RevealOnScroll: React.FC<{ children: React.ReactNode }> = ( { children } ) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const ref = useRef(null);
//   //const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//       const scrollObserver = new IntersectionObserver( ( [entry]) => {
//           if (entry.isIntersecting) {
//               setIsVisible(true);
//               scrollObserver.unobserve(entry.target);
//           }
//       });

//       scrollObserver.observe(ref.current);

//       return () => {
//           if (ref.current) {
//               scrollObserver.unobserve(ref.current);
//           }
//       };
//   }, []);

//   const classes = `transition-opacity duration-1000 
//       ${isVisible ? "opacity-100" : "opacity-0"
//       }`;

//   return (
//       <div ref={ref} className={classes}>
//           {children}
//       </div>
//   );
// };


//function Home() {
const Home: React.FC = () => {
  return (
    <>
      {/* <div className="hero">
        <div className="w-3/4 h-3/4 my-auto ">
          <ClubLogo />
        </div>
      </div>
      <CategoryCards />
      <div className="mx-4">
        <Feature />
      </div>  */}
      <div className=" lg:snap-y lg:snap-mandatory lg:h-screen lg:w-screen lg:overflow-auto lg:flex-col
      xl:snap-y xl:snap-mandatory xl:h-screen xl:w-screen xl:overflow-auto xl:flex-col
      2xl:snap-y 2xl:snap-mandatory 2xl:h-screen 2xl:w-screen 2xl:overflow-auto 2xl:flex-col">
        <Navigation />
        <Hero />
        <About />
        <Events />
        <Newsletter />
        <Disclaimer />
        {/* <Example /> */}

        

      </div>
    </>
  );
}

export default Home;

