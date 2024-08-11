import { motion } from "framer-motion"
import { useEffect, useState } from "react";
import Button from "../components/Button";

const Cursor = () => {

    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
      });
      const [cursorVariant, setCursorVariant] = useState("default");
    
    
      useEffect(() => {
        const mouseMove = e => {
          setMousePosition({
            x: e.clientX,
            y: e.clientY
          })
        }
    
        window.addEventListener("mousemove", mouseMove);
    
        return () => {
          window.removeEventListener("mousemove", mouseMove);
        }
      }, []);
    
      const variants = {
        default: {
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        },
        text: {
          height: 150,
          width: 150,
          x: mousePosition.x - 75,
          y: mousePosition.y - 75,
          backgroundColor: "white",
          mixBlendMode: "difference"
        }
      }
    
      const textEnter = () => setCursorVariant("text");
      const textLeave = () => setCursorVariant("default");

  return (
    <main className="w-screen h-screen flex justify-center items-center bg-black cursor-none">
      <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className='text-9xl text-white'>Hello Friends</h1>
      <motion.div
        className='bg-white h-[20px] w-[20px] rounded-full fixed top-0 left-0 pointer-events-none'
        variants={variants}
        animate={cursorVariant}
      />
        <Button back="/" next="/loading"/>
    </main>
  )
}

export default Cursor