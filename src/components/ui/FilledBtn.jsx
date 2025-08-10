import { Link } from "react-router"

const FilledBtn = ({ to, label }) => {
  return (
    <Link
      to={to}
      className="w-fit px-3 py-1 bg-brand text-white text-base rounded-md hover:bg-brand/90 transition-all duration-300"
    >
      {label}
    </Link>
  )
}

export default FilledBtn