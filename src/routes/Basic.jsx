import { useState } from "react"
import { Link } from "react-router-dom";

const Basic = () => {
  
  const [count, setCount] = useState(100);

  return (
    <main className="w-screen h-screen flex justify-center items-center bg-black overflow-hidden">
      
      <div className="flex flex-col justify-center gap-5">
        <button 
        className="text-black text-lg bg-white rounded-xl"
        onClick={() => setCount(count - 10)}>-</button>
        <h1 className="text-white text-4xl text-bold">Count: {count}</h1>
        <button 
        className="text-black text-lg bg-white rounded-xl"
        onClick={() => setCount(count + 10)}>+</button>
        <Link to="/" className="text-white ">back/home</Link>
      </div>
      
    </main>
  )
}

export default Basic