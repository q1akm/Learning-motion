import WaterDrop from "../components/WaterDrop";
import Button from '../components/Button'


const Dot = () => {
  return (
    <main className="bg-black w-full h-screen flex flex-col items-center">
      <WaterDrop/>
      <Button back="/" next="/gsap"/>
    </main>
  )
}

export default Dot;