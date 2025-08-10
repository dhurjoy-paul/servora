import { useState } from "react"
import { useLoaderData } from "react-router"
import OutlineBtn from './ui/OutlineBtn'
import PopularCard from "./ui/PopularCard"

const PopularServices = () => {
  const data = useLoaderData()
  const [displayedServices] = useState(data?.slice(0, 8) || [])

  return (
    <section
      className="py-16 lg:py-20 bg-gradient-to-br from-[#f5f7ff] to-[#e4ecff] dark:from-[#0a0f2c] dark:to-[#152139] text-text"
    >
      {/* <section className="py-16 lg:py-20 bg-white text-text"> */}

      <h3
        className="text-center text-3xl md:text-4xl font-bold mb-4 text-text"
        data-aos="fade-up"
      >
        Our <span className="text-brand font-funnel-display">Popular</span> Services
      </h3>

      <p
        className="text-center text-lg text-para max-w-2xl mx-auto mb-12"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Collect Your Awesome Deals Now
      </p>

      <div className="max-w-7xl mx-auto">
        <div className="grid gap-8 sm:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-8 sm:mx-6 xl:mx-0">
          {displayedServices.map((service, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 100}
              data-aos-duration="600"
            >
              <PopularCard service={service} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6" data-aos="fade-up" data-aos-delay="200">
        <OutlineBtn to='/services' label='See More' />
      </div>

      {/* <Link
        to={`/services`}
        className="flex w-fit mx-auto items-center gap-2 group mt-12"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <p className="bg-blue-600 text-lg text-white px-6 py-2 rounded-full group-hover:bg-blue-700 transition">
          See More
        </p>
      </Link> */}
    </section>
  )
}

export default PopularServices
