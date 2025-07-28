import { motion } from "framer-motion";

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
      <div className="flex-1 xs:grid hidden grid-cols-2 grid-rows-4 gap-4 px-4 2xl:px-0">
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start gap-1"
        >
          <div className="flex -space-x-3">
            {userImg.map((user, i) => (
              <img key={i} className="size-12 rounded-full border-2 object-cover border-white" src={user} alt="user" />
            ))}
          </div>
          <p className="text-text font-funnel-display"><span className='text-2xl font-bold'>20k</span> Total Customers</p>
        </motion.div>

        <motion.img
          src="https://res.cloudinary.com/dnxdrwrom/image/upload/v1753198097/repairman-01_wnnz5h.jpg"
          alt="electrician"
          className="w-full row-span-2 rounded-xl object-cover"
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        />

        <motion.img
          src="https://res.cloudinary.com/dnxdrwrom/image/upload/v1753198096/repairman-02_cxmtlo.jpg"
          alt="delivery"
          className="w-full row-span-2 rounded-xl object-cover"
          data-aos="fade-left"
        />

        <motion.img
          src="https://res.cloudinary.com/dnxdrwrom/image/upload/v1753198077/repairman-03_yqzvfs.jpg"
          alt="cleaning"
          className="w-full row-span-2 rounded-xl object-cover"
          data-aos="fade-right"
        />

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-around items-center bg-[#d5e2fc] dark:bg-[#0B1F47] rounded-xl text-center pl-3 pr-4 lg:pl-7 lg:pr-9"
        >
          <img className='size-20' src="https://res.cloudinary.com/dnxdrwrom/image/upload/v1753198999/satisfaction_xjklh2.png" />
          <div className='flex flex-col text-text font-funnel-displayc'>
            <p className="text-2xl font-bold">100%</p>
            <p className="text-sm w-fit">Satisfaction Guarantee</p>
          </div>
        </motion.div>
      </div>

      {/* Small (xs) device */}
      <div className="flex flex-col xs:hidden gap-4 px-4">
        <div className="grid grid-cols-6 grid-rows-4 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-3 row-span-2 flex flex-col items-start gap-1"
          >
            <div className="flex -space-x-3">
              {userImg.map((user, i) => (
                <img key={i} className="size-13 rounded-full border-2 border-white" src={user} alt="user" />
              ))}
            </div>
            <p className="text-text"><span className='text-xl font-bold'>20k</span> Total Customers</p>
          </motion.div>

          <div className="col-span-2 row-span-1"></div>

          <motion.img
            src="https://i.ibb.co/S7mQ3tNb/repairman-03.jpg"
            alt="delivery"
            className="col-span-3 row-span-3 w-full rounded-xl object-cover"
            data-aos="zoom-in"
          />

          <motion.div
            className="col-span-3 row-span-2 flex justify-around items-center bg-[#d5e2fc] dark:bg-[#0B1F47] rounded-xl text-center pl-3 pr-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img className='size-20' src="https://i.ibb.co/kV2XBVnw/satisfaction.png" />
            <div className='flex flex-col text-text'>
              <p className="text-2xl font-bold">100%</p>
              <p className="text-sm w-fit">Satisfaction Guarantee</p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <motion.img
            src="https://i.ibb.co/tM87p21f/repairman-02.jpg"
            alt="electrician"
            className="rounded-xl"
            data-aos="fade-up"
          />
          <motion.img
            src="https://i.ibb.co/qMXZWVCN/repairman-01.jpg"
            alt="cleaning"
            className="rounded-xl"
            data-aos="fade-up"
            data-aos-delay="100"
          />
        </div>
      </div>
    </>
  )
}
export default RightSide;
