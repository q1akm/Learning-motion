import {useState } from "react"
import gsap from 'gsap';
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(SplitText, ScrollTrigger);

let mySplitText = new SplitText(".split",{type: "chars"} );
let chars = mySplitText.chars;

gsap.from(chars,{
  yPercent: 130,
  stagger: 0.05,
  ease: "back.out",
  duration: 1,
  scrollTrigger: {
    trigger: '.split',
    start : 'top 20%',
  }
})

const Basic = () => {

    const [counter, setCounter] = useState(0);

  return (
   <>
     <div className="flex flex-col text-3xl justify-center items-center">
        <button onClick={()=> setCounter((prevCount) => prevCount -1)}>-</button>
        <h1>{counter}</h1>
        <button onClick={()=> setCounter((prevCount) => prevCount +1)}>+</button>
    </div>

    <div className=" border-2 w-full h-screen border-black">
      <h1 className="split">Hello AKM</h1>
      <h1>AKM</h1>
    </div>
    <div className="w-full h-screen">
      <h1>hello</h1>
    </div>
   </>
  )
}

export default Basic