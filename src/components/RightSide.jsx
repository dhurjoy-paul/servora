const userImg = [
  'https://res.cloudinary.com/dnxdrwrom/image/upload/v1753198102/user-01_k6smlw.jpg',
  'https://res.cloudinary.com/dnxdrwrom/image/upload/v1753198103/user-02_wr3af6.jpg',
  'https://res.cloudinary.com/dnxdrwrom/image/upload/v1753198101/user-03_dy0eu3.jpg',
  'https://res.cloudinary.com/dnxdrwrom/image/upload/v1753198105/user-04_xcvoqe.jpg',
  'https://res.cloudinary.com/dnxdrwrom/image/upload/v1753198107/user-05_zhmyop.jpg'
]

const RightSide = () => {
  return (
    <>
      {/* Large device */}
      <div className="flex-1 xs:grid hidden grid-cols-2 grid-rows-4 gap-4  px-4 2xl:px-0">
        <div className="flex flex-col items-start gap-1">
          <div className="flex -space-x-3">
            {userImg.map((user, i) => <img key={i} className="size-12 rounded-full border-2 object-cover border-white" src={user} alt="user" />)}
          </div>
          <p className="text-text font-funnel-display"><span className='text-2xl font-bold'>20k</span> Total Customers</p>
        </div>

        <img src={`https://res.cloudinary.com/dnxdrwrom/image/upload/v1753198097/repairman-01_wnnz5h.jpg`} alt="electrician" className="w-full row-span-2 rounded-xl object-cover" />
        <img src={`https://res.cloudinary.com/dnxdrwrom/image/upload/v1753198096/repairman-02_cxmtlo.jpg`} alt="delivery" className="w-full row-span-2 rounded-xl object-cover" />
        <img src={`https://res.cloudinary.com/dnxdrwrom/image/upload/v1753198077/repairman-03_yqzvfs.jpg`} alt="cleaning" className="w-full row-span-2 rounded-xl object-cover" />

        <div className="flex justify-around items-center bg-[#d5e2fc] dark:bg-[#0B1F47] rounded-xl text-center pl-3 pr-4 lg:pl-7 lg:pr-9">
          <img className='size-20 ' src={`https://res.cloudinary.com/dnxdrwrom/image/upload/v1753198999/satisfaction_xjklh2.png`} />
          <div className='flex flex-col text-text font-funnel-displayc'>
            <p className="text-2xl font-bold">100%</p>
            <p className="text-sm w-fit">Satisfaction Guarantee</p>
          </div>
        </div>
      </div>

      {/* Small (xs) device */}
      <div className="flex flex-col xs:hidden gap-4 px-4">

        <div className="grid grid-cols-6 grid-rows-4 gap-4">

          <div className="col-span-3 row-span-2 flex flex-col items-start gap-1">
            <div className="flex -space-x-3">
              {userImg.map((user, i) => <img key={i} className="size-13 rounded-full border-2 border-white" src={user} alt="user" />)}
            </div>
            <p className="text-text"><span className='text-xl font-bold'>20k</span> Total Customers</p>
          </div>

          <div className="col-span-2 row-span-1"></div>

          <img src={`https://i.ibb.co/S7mQ3tNb/repairman-03.jpg`} alt="delivery" className="col-span-3 row-span-3 w-full rounded-xl object-cover" />

          <div className="col-span-3 row-span-2 flex justify-around items-center bg-[#d5e2fc] dark:bg-[#0B1F47] rounded-xl text-center pl-3 pr-4">
            <img className='size-20 ' src={`https://i.ibb.co/kV2XBVnw/satisfaction.png`} />
            <div className='flex flex-col text-text'>
              <p className="text-2xl font-bold">100%</p>
              <p className="text-sm w-fit">Satisfaction Guarantee</p>
            </div>
          </div>

        </div>

        <div className="grid grid-cols-2 gap-4">
          <img src={`https://i.ibb.co/tM87p21f/repairman-02.jpg`} alt="electrician" className="rounded-xl" />

          <img src={`https://i.ibb.co/qMXZWVCN/repairman-01.jpg`} alt="cleaning" className="rounded-xl" />
        </div>

      </div>


    </>
  )
}
export default RightSide