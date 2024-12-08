import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react'
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

function GSAP001 (){

  const boxRef = useRef(null);
  const boxRef2 = useRef(null);
  const boxRef3 = useRef(null);
  const boxRef4 = useRef(null);

  useEffect(() => {
   const tl = gsap.timeline();

   tl.to(boxRef.current, {x: 200, duration: 1})
    .to(boxRef.current, {y: 200, duration: 1})
    .to(boxRef.current, {scale: 2, duration: 1})
    .to(boxRef.current, {rotate: 180, duration: 1});

   const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: boxRef3.current,
        start: "top 30%",
        end: "top -10%",
        scrub: true,
        markers: true,
        pin: true
      }
    });

    tl2. to(boxRef3.current, {  x: 200, y: 100, duration: 2,})
    tl2. to(boxRef4.current, {  x: 400, y: 100, duration: 1, background: "red"})
  }, [])

  const [color, setColor] = useState(false);

  const buttonClick = () => {
   if(color) {
    gsap.to(boxRef2.current, {background: "blue", duration: 2});
   }else {
    gsap.to(boxRef2.current, {background: "red", duration: 2});
   }

   setColor(!color);
  }
  

  return (
   <main className='w-full h-full'>
     <div className='flex justify-start'>
      <div
      ref={boxRef}
      className='w-[100px] h-[100px] bg-black'>
      </div>
      <div
      ref={boxRef2}
      className='w-[100px] h-screen flex justify-center bg-blue-900'>
      </div>
      <button
      onClick={buttonClick}
      className='border-2 border-black w-20 h-20'>
        {color ? "blue" : "red"}
      </button>
    </div>
   <div className='border-2 border-black'>
    <div className='w-full h-[50vh]'/>
    <div 
    ref={boxRef3}
    className='w-[100px] h-[100px] bg-red-700'></div>
    <div 
    ref={boxRef4}
    className='w-[100px] h-[100px] bg-indigo-500'></div>
    <div className='w-full h-[100vh]'/>
    
   </div>
   <br />
   <br />
   </main>
  )
}

export default GSAP001;