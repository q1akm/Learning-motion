import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-around items-center">
       <div>
        <h1 className="text-4xl flex justify-center">Testing Projects</h1>
          <ul className="flex flex-col justify-center items-center gap-10 mt-10 text-2xl font-mono underline">
              <li><Link to="/loading" >Loading Page</Link></li>
              <li><Link to="/basic" >Basic</Link></li>
              <li><Link to="/dot" >Dot</Link></li>
              <li><Link to="/gsap" >Gsap</Link></li>
          </ul>
       </div>

       <div>
        <h1>Test by <a href="https://aungkaungmyint.com/" className="text-red-500 hover:text-black hover:underline">akm.web</a></h1>
       </div>

    </div>
  )
}

export default Home;