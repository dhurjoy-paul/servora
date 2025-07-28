import { useEffect, useState } from "react";
import { Link } from "react-router";
import EmptyState from "../components/EmptyState";
import ServiceCard from "../components/ServiceCard";
import Loader from '../components/ui/Loader';

const Services = () => {
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");
  const [dataLoading, setDataLoading] = useState(false);

  const fetchServices = async (searchQuery = "") => {
    try {
      setDataLoading(true);
      const url = searchQuery
        ? `https://ph-assignment-11-server-sandy.vercel.app/services?search=${searchQuery}`
        : `https://ph-assignment-11-server-sandy.vercel.app/services`;
      const res = await fetch(url);
      const data = await res.json();
      setServices(data);
      setDataLoading(false);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    fetchServices(value);
  };
  if (dataLoading) return <Loader />

  return (
    <section className="w-full min-h-fit pt-16 md:pt-32 pb-10 px-4 sm:px-6 lg:px-0 bg-gradient-to-b from-[#D3E1FA] to-white dark:from-[#07142F] dark:to-[#0f0e0e] text-text">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Heading */}
        <h3 className="text-center text-3xl md:text-4xl font-bold mb-10 text-text mt-8">
          All Services <span className="text-brand font-funnel-display">Around You</span>
        </h3>

        {/* Search Input */}
        <div className="flex justify-center mb-10 px-2">
          <input
            autoFocus
            type="text"
            placeholder="Search services by name..."
            className="w-full max-w-[800px] mx-4 bg-input px-6 py-3 rounded-xl text-lg sm:text-xl text-text border border-text-muted/30 focus:outline-2 focus:outline-text text-center shadow-md"
            value={search}
            onChange={handleSearchChange}
          />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-10">
          {services.length > 0 ? (
            services.map((service) => (
              <Link to={`/services/${service._id}`} key={service._id}>
                <ServiceCard service={service} variant="horizontal" />
              </Link>
            ))
          ) : (
            <EmptyState
              title="No Service Found"
              description="Sorry for the inconvenience!! We are working on it."
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
