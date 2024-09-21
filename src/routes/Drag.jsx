import React, { useEffect } from 'react'
import { Draggable } from 'gsap/all'
import gsap from 'gsap';
import Button from '../components/Button'

gsap.registerPlugin(Draggable);

const Drag = () => {

  useEffect(() => {

    const flairAnimation = gsap.to("#flair", {
      x: 200,
      y: 200,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      paused: true
    })

    const flair2Animation = gsap.to("#flair2", {
      rotation: 360,
      repeat: -1,
      duration: 2,
      ease: "linear",
      paused: true
    })

    Draggable.create("#flair", {
      bounds: "#container",
      inertia: true,
      onDragStart: () => flairAnimation.pause(),
      onDragEnd: () => flairAnimation.restart()
    }),
    Draggable.create("#flair2", {
      type: "rotation",
      bounds: "#container",
      inertia: true,
      onDragStart: () => flair2Animation.pause(),
      onDragEnd: () => flair2Animation.restart()
    }),
    Draggable.create("#flair3", {
      type: "x",
      bounds: "#container",
      inertia: true
    }),


   


    flairAnimation.play();
    flair2Animation.play();
  }, [])
  

  return (
    <div id='container' className='w-screen h-screen bg-black flex justify-center items-center'>
      <div id="flair" className='w-40 h-40 bg-orange-400 '></div>
      <div id="flair2" className='w-40 h-40 bg-red-400 '></div>
      <div id="flair3" className='w-40 h-40 bg-blue-400 '></div>
      <Button back="/pagetrans" next="/loading"/>
    </div>  
  )
}

export default Drag;