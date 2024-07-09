import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"; // Corrected import path
import Button from "../components/Button";

const Gsap = () => {
  gsap.registerPlugin(ScrollTrigger);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.card',
      start: 'top center',  // When '.card' hits the center of the viewport
      end: 'center center',  // Corrected to 'bottom center' to cover the card's height
      scrub: true,
      markers: true,
    }
  });

  tl.to('.card', {
    x: 1265
  });

  return (
    <div className="w-full h-full bg-black">
      <div className="h-[100vh] border-black border flex items-center justify-center">
      <Button back="/" next="/"/>     

      </div>
      <div className="bg-white rounded-lg -left-[1000px] -ml-[100%] w-screen h-[50rem] card flex items-center justify-center">
        <div className="flex flex-col items-center text-black ">
          <h1>Hello</h1>
          <h2>This is a card</h2>
        </div>
      </div>

    </div>
  );
}

export default Gsap;
