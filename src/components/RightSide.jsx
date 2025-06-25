const userImg = [
  'https://i.ibb.co/p63KtVDc/user-01.png',
  'https://i.ibb.co/sd9BtBx6/user-02.png',
  'https://i.ibb.co/HTMjVYtF/user-03.png',
  'https://i.ibb.co/d0S5tqKb/user-04.png',
  'https://i.ibb.co/Kc40YkJS/user-05.png'
]

const RightSide = () => {
  return (
    <>
      {/* Large device */}
      <div className="flex-1 xs:grid hidden grid-cols-2 grid-rows-4 gap-4">
        <div className="flex flex-col items-start gap-1">
          <div className="flex -space-x-3">
            {userImg.map((user, i) => <img key={i} className="size-12 rounded-full border-2 border-white" src={user} alt="user" />)}
          </div>
          <p className="text-text"><span className='text-2xl font-bold'>20k</span> Total Customers</p>
        </div>

        <img src={`https://i.ibb.co/tM87p21f/repairman-02.jpg`} alt="electrician" className="w-full row-span-2 rounded-xl object-cover" />
        <img src={`https://i.ibb.co/S7mQ3tNb/repairman-03.jpg`} alt="delivery" className="w-full row-span-2 rounded-xl object-cover" />
        <img src={`https://i.ibb.co/qMXZWVCN/repairman-01.jpg`} alt="cleaning" className="w-full row-span-2 rounded-xl object-cover" />

        <div className="flex justify-around items-center bg-[#d5e2fc] dark:bg-[#0B1F47] rounded-xl text-center pl-3 pr-4 lg:pl-7 lg:pr-9">
          <img className='size-20 ' src={`https://i.ibb.co/kV2XBVnw/satisfaction.png`} />
          <div className='flex flex-col text-text'>
            <p className="text-2xl font-bold">100%</p>
            <p className="text-sm w-fit">Satisfaction Guarantee</p>
          </div>
        </div>
      </div>

      {/* Small (xs) device */}
      <div className="flex flex-col xs:hidden gap-4">

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