import WaterDrop from "../components/WaterDrop";
import Button from '../components/Button'


const Dot = () => {
  return (
    <main className="bg-black w-full h-screen flex flex-col items-center">
      <WaterDrop/>
      <Button className="w-20 h-20 text-white bg-black flex item-center" next="/cursor"/>
    </main>
  )
}

export default Dot;