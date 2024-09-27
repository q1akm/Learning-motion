import { Link } from "react-router-dom"

const Button = (props) => {
  return (
    <div className={props.className}>
        <Link to="/" className="hover:text-red-500">Back</Link>/
        <Link to={props.next} className="hover:text-red-500">Next</Link>
    </div>
  )
}



export default Button
