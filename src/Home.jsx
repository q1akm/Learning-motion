import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="mt-10 ">
        <h1 className="text-4xl flex justify-center">Testing Projects</h1>
        <ul className="flex flex-col justify-center items-center gap-10 mt-10 text-2xl font-mono underline">
            <li><Link to="/loading" >Loading Page</Link></li>
            <li><Link to="/basic" >Basic</Link></li>
            <li><Link to="/dot" >Dot</Link></li>
        </ul>
    </div>
  )
}

export default Home;