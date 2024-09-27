import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-full fixed flex flex-col justify-between items-start overflow-hidden p-10">
        <ul className="flex items-start gap-5 text-xl outfit-regular underline max-md:flex-col">
              <li><Link to="/loading" >Loading Page</Link></li>
              <li><Link to="/basic" >Basic</Link></li>
              <li><Link to="/dot" >Dot</Link></li>
              <li><Link to="/cursor" >Cursor</Link></li>
              <li><Link to="/pagetrans" >Page Animated Transition</Link></li>
              <li><Link to="/drag" >Drag - GSAP</Link></li>
              <li><Link to="/gsap001" >GSAP 001</Link></li>
              <li><Link to="/test" >Test</Link></li>
        </ul>
        <div className="flx items-center justify-center">
          <h1 className="text-black text-xl outfit-regular">Learning  
            <span className="indie-flower-regular text-4xl">
              Motion
            </span>
          </h1>
        </div>

    </div>
  )
}

export default Home;