import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router";
import EmptyState from "../components/EmptyState";
import PopularCard from "../components/ui/PopularCard";
import SimpleLoader from "../components/ui/SimpleLoader";

const Services = () => {
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("latest");
  const [order, setOrder] = useState("desc");
  const [dataLoading, setDataLoading] = useState(false);

  const fetchServices = async (searchQuery = "", sortByValue = sortBy, orderValue = order) => {
    try {
      setDataLoading(true);
      const params = new URLSearchParams();

      if (searchQuery) params.append("search", searchQuery);
      if (sortByValue) params.append("sortBy", sortByValue);
      if (orderValue) params.append("order", orderValue);

      const url = `https://ph-assignment-11-server-sandy.vercel.app/services?${params.toString()}`;

      const res = await fetch(url);
      const data = await res.json();
      setServices(data);
      setDataLoading(false);
    } catch (error) {
      console.error("Error fetching services:", error);
      setDataLoading(false);
    }
  };

  useEffect(() => {
    fetchServices(search, sortBy, order);
  }, [sortBy, order]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    fetchServices(value, sortBy, order);
  };

  return (
    <>
      <Helmet>
        <title>Services | Servora</title>
        <meta name="description" content="Browse and find services around you" />
      </Helmet>
      <section className="w-full min-h-fit pt-16 md:pt-32 pb-10 px-4 sm:px-6 lg:px-0 bg-gradient-to-b from-[#D3E1FA] to-white dark:from-[#07142F] dark:to-[#0f0e0e] text-text">
        <div className="container mx-auto max-w-7xl px-4">
          {/* Heading */}
          <h3 className="text-center text-3xl md:text-4xl font-bold mb-10 text-text mt-8">
            All Services <span className="text-brand font-funnel-display">Around You</span>
          </h3>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-10">
            {/* Search Input */}
            <input
              autoFocus
              type="text"
              placeholder="Search services by name..."
              className="w-full md:w-[400px] bg-input px-6 py-3 rounded-xl text-lg sm:text-xl text-text border border-text-muted/30 focus:outline-2 focus:outline-text text-center shadow-md"
              value={search}
              onChange={handleSearchChange}
            />

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-input px-4 py-3 rounded-xl text-lg border border-text-muted/30 shadow-md"
            >
              <option value="latest">Sort by: Latest</option>
              <option value="price">Sort by: Price</option>
            </select>

            {/* Order */}
            <select
              value={order}
              onChange={(e) => setOrder(e.target.value)}
              className="bg-input px-4 py-3 rounded-xl text-lg border border-text-muted/30 shadow-md"
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>

          {/* Services Grid */}
          {dataLoading ? (
            <SimpleLoader />
          ) : (
            <div className="grid gap-8 sm:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-8 sm:mx-6 xl:mx-0 my-16">
              {services.length > 0
                ? 
                services.map((service) => (
                  <Link to={`/services/${service._id}`} key={service._id}>
                    <PopularCard service={service} />
                  </Link>
                ))
                : <EmptyState title="No Service Found" />
              }
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Services;
