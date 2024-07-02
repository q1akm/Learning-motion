import { useEffect, useState } from "react"
import Button from "../components/Button";

const Basic = () => {
  
  const [count, setCount] = useState(100);

  useEffect(() => {
    console.log(count);

    return () =>{
      console.log('Testing buddy');
    }
  }, [count])
  

  return (
    <main className="w-screen h-screen flex flex-col justify-center gap-10 items-center bg-black overflow-hidden">
      
      <div className="flex flex-col justify-center gap-5">
        <button 
        className="text-black text-lg bg-white rounded-xl"
        onClick={() => setCount(count - 10)}>-</button>
        <h1 className="text-white text-4xl text-bold">Count: {count}</h1>
        <button 
        className="text-black text-lg bg-white rounded-xl"
        onClick={() => setCount(count + 10)}>+</button>
        
      </div>
      <Button back="/" next="/dot"/>

    </main>
  )
}

export default Basic