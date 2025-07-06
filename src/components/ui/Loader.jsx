// npm install --save react-spinners

import { HashLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div className="bg-menu/0 dark:bg-[#07142F] flex items-center justify-center h-screen w-full">
      <div className="flex flex-col items-center">
        <HashLoader color="#36D7B7" size={100} speedMultiplier={1.2} />
        <p className="mt-6 text-lg font-semibold">Loading, please wait...</p>
      </div>
    </div>
  )
}

export default Loader
