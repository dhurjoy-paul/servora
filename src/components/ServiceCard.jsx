const ServiceCard = ({ service, variant = "full" }) => {
  service ||= {
    image: "https://res.cloudinary.com/dnxdrwrom/image/upload/v1753198096/repairman-02_cxmtlo.jpg",
    name: "AC Maintenance",
    description: "Keep your air conditioner running efficiently with our expert maintenance service.",
    price: 120,
    providerName: "John Doe",
    providerImage: "https://i.ibb.co/sample-avatar.jpg"
  }

  const { image, name, description, price, providerName, providerImage } = service
  const isCompact = variant === "compact"

  return (
    <div className={`group bg-white dark:bg-[#3b4460] rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-transparent hover:border-brand/10 overflow-hidden ${isCompact ? 'p-4' : 'p-6 md:p-8 mx-6'}`}>

      {/* Image Section */}
      <div className="w-full h-48 overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content Section */}
      <div className="mt-5">
        <h4 className={`font-semibold text-brand ${isCompact ? 'text-lg' : 'text-2xl bg-brand/15 w-fit px-4 py-2 rounded-full border border-brand/50'}`}>
          {name}
        </h4>

        <p className={`text-para mt-2 ${isCompact ? 'text-sm' : 'text-lg mt-4 ml-1 w-[90%]'} line-clamp-3`}>
          {description?.length > 100 ? description.slice(0, 100) + "..." : description}
        </p>
      </div>

      {/* Footer Section */}
      <div className={`mt-5 flex items-center justify-between ${isCompact ? 'gap-3' : 'ml-1 mt-6'}`}>
        {/* Provider Info */}
        <div className="flex items-center gap-3">
          <img
            src={providerImage}
            alt={providerName}
            className={`rounded-full object-cover border-2 border-brand ${isCompact ? 'w-10 h-10' : 'w-14 h-14'}`}
          />
          <span className={`${isCompact ? 'text-base' : 'text-xl'} font-medium text-text font-funnel-display`}>
            {providerName}
          </span>
        </div>

        {/* Price */}
        <span className={`${isCompact ? 'text-xl' : 'text-4xl'} text-brand font-bold font-funnel-display`}>
          ${price}
        </span>
      </div>

      {/* CTA */}
      <div className="mt-6">
        <button className={`btn ${isCompact ? 'btn-sm' : 'btn-lg'} btn-outline btn-primary rounded-full w-full group-hover:scale-105 transition-all duration-300`}>
          View Detail
        </button>
      </div>
    </div>
  )
}

export default ServiceCard
