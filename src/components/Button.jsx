import { Link } from "react-router-dom"

const Button = (props) => {
  return (
    <div className="w-20 h-20 text-white bg-black flex item-center">
        <Link to={props.back} className="hover:text-red-500">Back</Link>/
        <Link to={props.next} className="hover:text-red-500">Next</Link>
    </div>
  )
}



export default Button
