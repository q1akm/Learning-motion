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
    <section className="bg-darkred  text-white w-full h-screen flex flex-col justify-center items-center" ref={heroRef}>
        <Button className="w-20 h-20 text-white bg-darkred flex item-center" next="/basic"/>     
    </section>
  );
};

export default Hero;
