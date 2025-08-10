// npm install --save react-spinners

import { HashLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div className="bg-transparent flex items-center justify-center h-[40vh] w-full">
      <div className="flex flex-col items-center">
        <HashLoader color="#36D7B7" size={100} speedMultiplier={1.2} />
      </div>
    </div>
  )
}

export default Loader
