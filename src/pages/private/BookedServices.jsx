import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { FaMapMarkerAlt, FaMoneyBillWave } from "react-icons/fa";
import EmptyState from '../../components/EmptyState';
import Loader from '../../components/ui/Loader';
import useAuth from "../../hooks/useAuth";

const BookedServices = () => {
  const { user, loading } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);

  useEffect(() => {
    const fetchBookedServices = async () => {
      try {
        setDataLoading(true)
        const res = await fetch(
          `https://ph-assignment-11-server-sandy.vercel.app/bookings?userEmail=${user?.email}`,
          { credentials: 'include' }
        );
        const data = await res.json();
        setBookings(Array.isArray(data) ? data : []);
        setDataLoading(false)
      } catch (err) {
        console.error("Failed to load booked services:", err);
        setBookings([]);
      }
    };

    if (user?.email) {
      fetchBookedServices();
    }
  }, [user]);

  if (dataLoading || loading) return <Loader />

  return (
    <>
      <Helmet>
        <title>Booked Services | Servora</title>
        <meta name="description" content="Home page of FixMate SPA" />
      </Helmet>
      <section className="w-full pt-20 md:pt-32 pb-14 px-4 sm:px-6 bg-gradient-to-b from-[#F0F4FF] to-white dark:from-[#07142F] dark:to-[#0f0e0e] text-text">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-center text-3xl md:text-4xl font-bold mb-10 text-text mt-8">
            Your <span className="text-brand font-funnel-display">Booked</span> Services
          </h3>

          {bookings.length === 0 ? (
            <EmptyState title={"You have no service booked."} />
          ) : (
            <div className="max-w-5xl mx-auto space-y-8">
              {bookings.map((booking) => (
                <motion.div
                  key={booking._id}
                  className="bg-white dark:bg-[#3b4460] rounded-3xl shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 md:p-10"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  data-aos="fade-up"
                >
                  {/* Service Image */}
                  <div className="w-full h-auto rounded-2xl overflow-hidden">
                    <img
                      src={booking.serviceImage}
                      alt={booking.serviceName}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>

                  {/* Booking Details */}
                  <div className="flex flex-col justify-between gap-6">
                    <div>
                      <h3 className="text-3xl font-bold text-brand mb-4 font-funnel-display">{booking.serviceName}</h3>

                      <div className="space-y-3 text-base mb-6">
                        <div className="flex items-center gap-3 text-xl">
                          <FaMoneyBillWave size={20} />
                          <span className="font-medium">Price:</span>
                          <span className="text-brand font-bold text-2xl">${booking.price}</span>
                        </div>

                        <div className="flex items-center gap-3 text-lg">
                          <FaMapMarkerAlt size={18} />
                          <span className="font-medium">Provider:</span>
                          <div className="flex items-center gap-2">
                            <img src={booking.providerImage} alt="provider" className="w-7 h-7 rounded-full" />
                            <span>{booking.providerName}</span>
                          </div>
                        </div>

                        <div className="text-lg">
                          <span className="font-semibold">Status: </span>
                          <span
                            className={`font-bold uppercase ${booking.serviceStatus === "pending"
                              ? "text-yellow-500"
                              : booking.serviceStatus === "approved"
                                ? "text-green-500"
                                : "text-red-500"
                              }`}
                          >
                            {booking.serviceStatus}
                          </span>
                        </div>

                        <div>
                          <span className="font-semibold">Special Instructions:</span>
                          <p className="whitespace-pre-line text-gray-700 dark:text-gray-300">{booking.specialInstruction}</p>
                        </div>
                      </div>

                      <div className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                        <p><strong>Booking Date:</strong> {new Date(booking.date).toLocaleDateString()}</p>
                        <p><strong>Booked At:</strong> {new Date(booking.createdAt).toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default BookedServices;
