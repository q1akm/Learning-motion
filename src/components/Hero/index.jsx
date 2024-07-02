import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { animateTitle, animateImage, revealMenu } from "./animations";
import { Link } from "react-router-dom";
import Button from "../Button";



const Hero = () => {
  const timeline = useRef(gsap.timeline());
  const heroRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      const tl = timeline.current;

      tl.add(animateTitle()).add(revealMenu(), 0).add(animateImage(), 0);
    }, heroRef);

    return () => context.revert();
  }, []);

  return (
    <section className="bg-black  text-white w-full h-screen flex flex-col justify-center items-center" ref={heroRef}>
        <Link to="/loading" className="split text-4xl flex justify-center">Welcome</Link>
        <Button back="/" next="/basic"/>     
    </section>
  );
};

export default Hero;
