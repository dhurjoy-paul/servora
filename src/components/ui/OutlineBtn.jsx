import { Link } from 'react-router'

const OutlineBtn = ({ to, label = 'Button' }) => {
  return (
    <Link to={to}
      className="w-fit px-6 py-2 bg-brand/10 text-brand font-medium border-2 border-brand text-lg rounded-lg hover:bg-brand/90 hover:text-white transition-all duration-300"
    >
      {label}
    </Link>
  )
}

export default OutlineBtn