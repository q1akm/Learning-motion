import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { animateTitle, animateImage, revealMenu } from "./animations";
import { Link } from "react-router-dom";



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
    <section className="bg-black  text-white w-full h-screen" ref={heroRef}>
     
        <Link to="/loading" className="split text-4xl flex justify-center">Welcome</Link>
        <Link to="/" className="split text-xl underline flex justify-center">Back</Link>
     
    </section>
  );
};

export default Hero;
