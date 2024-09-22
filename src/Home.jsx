import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-around items-center overflow-hidden">
       <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl flex justify-center text-red-500">Learning Motion</h1>
        <ul className="flex flex-col justify-center items-center gap-10 mt-10 text-xl font-mono underline">
              <li><Link to="/loading" >Loading Page</Link></li>
              <li><Link to="/basic" >Basic</Link></li>
              <li><Link to="/dot" >Dot</Link></li>
              <li><Link to="/cursor" >Cursor</Link></li>
              <li><Link to="/pagetrans" >Page Animated Transition</Link></li>
              <li><Link to="/drag" >Drag - GSAP</Link></li>
              <li><Link to="/gsap001" >GSAP 001</Link></li>


        </ul>
       </div>
       <div>
        <h1 className="text-black text-md">Test by <a href="https://aungkaungmyint.com/" className="text-red-500 hover:text-black hover:underline text-lg">akm</a></h1>
       </div>

    </div>
  )
}

export default Home;