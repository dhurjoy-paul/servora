import { useState } from "react"
import { Link, useLoaderData } from "react-router"
import ServiceCard from "./ServiceCard"

const PopularServices = () => {
  const data = useLoaderData()
  const [displayedServices] = useState(data?.slice(0, 6) || [])

  return (
    <section className="pt-8 pb-16 lg:py-16 bg-gradient-to-br from-[#f5f7ff] to-[#e4ecff] dark:from-[#0a0f2c] dark:to-[#152139] text-text">
      <h3 className="text-center text-3xl md:text-4xl font-bold mb-4 text-text">
        Our <span className="text-brand font-funnel-display">Popular</span> Services
      </h3>
      <p className="text-center text-lg text-para max-w-2xl mx-auto mb-12">
        Collect Your Awesome Deals Now
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
        {displayedServices.map((service, i) => (
          <ServiceCard key={i} service={service} />
        ))}
      </div>


      <Link to={`/services`} className='flex w-fit mx-auto items-center gap-2 group mt-12'>
        <p className="bg-blue-600 text-lg text-white px-6 py-2 rounded-full group-hover:bg-blue-700 transition">
          See More
        </p>
      </Link>

    </section>
  )
}

export default PopularServices
