import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react'
import { Draggable, DrawSVGPlugin, ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(Draggable);


function GSAP001 (){

  const boxRef = useRef(null);
  const boxRef2 = useRef(null);
  const boxRef3 = useRef(null);
  const boxRef4 = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
   const tl = gsap.timeline();

   tl.to(boxRef.current, {x: 600, duration: 1})
    .to(boxRef.current, {y: 200, duration: 1})
    .to(boxRef.current, {scale: 2, duration: 1})
    .to(boxRef.current, {rotate: 180, duration: 1});

   const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: boxRef3.current,
        start: "top 30%",
        end: "top -10%",
        scrub: true,
        pin: true
      }
    });

    tl2. to(boxRef3.current, {  x: 300, duration: 2, ease: "power2.out"})
    tl2. to(boxRef4.current, {  x: 500, duration: 1, background: "red", ease: "power2.out"})

    gsap.fromTo(
      pathRef.current, 
      {drawSVG: "0%"},
      {drawSVG: "100%", duration: 2,
        scrollTrigger: {
          trigger: pathRef.current,
          start: "top 90%",
          end: "top 50%",
          scrub: true,
        }
      }
    );

    gsap.to('#box', {
      rotation: 360,
      repeat: -1,
      duration: 2,
      ease: "linear",
    })

    Draggable.create('#box', {
      bounds: '#container',
      inertia: true,
      onRelease: function () {
        gsap.to('#box', {
          x: 0,
          y: 0,
          duration: 2,
          ease: "power2.out",
        })
      }
    })

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
    <div className='border-2 border-black bg-black w-full h-full'>
      <div 
      ref={boxRef3}
      className='w-[100px] h-[100px] bg-red-700'></div>
      <div 
      ref={boxRef4}
      className='w-[100px] h-[100px] bg-indigo-500'></div>
    </div>
    <div className='border-2 border-red-500 flex justify-center items-center w-full h-full'>
      <svg width={400} height={500}>
        <path
        ref={pathRef}
        stroke='blue'
        d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
        fill='transparent'
        strokeWidth="2"/>
      </svg>
    </div>
    <div id="container" className='bg-black w-full h-screen flex justify-center items-center relative'>
        <div id="box" className='w-[100px] h-[100px] bg-red-500 absolute'></div>
        <h1 className='text-white relative'>You know, you can drag this element.</h1>
    </div>
   </main>
  )
}

export default GSAP001;