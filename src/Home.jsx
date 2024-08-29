import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-around items-center overflow-hidden">
       <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl flex justify-center text-black">Testing Projects</h1>
        <ul className="flex flex-col justify-center items-center gap-10 mt-10 text-2xl font-mono underline">
              <li><Link to="/loading" >Loading Page</Link></li>
              <li><Link to="/basic" >Basic</Link></li>
              <li><Link to="/dot" >Dot</Link></li>
              <li><Link to="/cursor" >Cursor</Link></li>
              <li><Link to="/pagetrans" >Page Animated Transition</Link></li>
              <li><Link to="/scroll" >Scrolling effect</Link></li>
        </ul>
       </div>
       <div>
        <h1 className="text-black text-2xl">Test by <a href="https://aungkaungmyint.com/" className="text-red-500 hover:text-black hover:underline text-2xl">akm</a></h1>
       </div>

    </div>
  )
}

export default Home;