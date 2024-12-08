import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react'

const GSAP001 = () => {

  const boxRef = useRef(null);
  const boxRef2 = useRef(null);

  useEffect(() => {
   const tl = gsap.timeline();

   tl.to(boxRef.current, {x: 200, duration: 1})
    .to(boxRef.current, {y: 200, duration: 1})
    .to(boxRef.current, {scale: 2, duration: 1})
    .to(boxRef.current, {rotate: 180, duration: 1});
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
    <main className='flex justify-start w-full h-full'>
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
    </main>
  )
}

export default GSAP001