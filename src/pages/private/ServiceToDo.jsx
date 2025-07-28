import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaMoneyBillWave } from "react-icons/fa";
import { toast } from "react-toastify";
import EmptyState from "../../components/EmptyState";
import useAuth from "../../hooks/useAuth";

const statusOptions = ["pending", "working", "completed"];

const ServiceToDo = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    try {
      const res = await fetch(`https://ph-assignment-11-server-sandy.vercel.app/bookings?providerEmail=${user?.email}`, {
        credentials: "include",
      });

      const data = await res.json();
      setBookings(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Failed to fetch bookings:", err);
      setBookings([]);
    }
  };

  useEffect(() => {
    if (user?.email) {
      fetchBookings();
    }
  }, [user]);

  const handleStatusChange = async (bookingId, newStatus) => {
    try {
      const res = await fetch(`https://ph-assignment-11-server-sandy.vercel.app/bookings/${bookingId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ serviceStatus: newStatus }),
      });


      if (res.ok) {
        toast.success("Status updated successfully");
        fetchBookings();
      } else {
        toast.error("Failed to update status");
      }
    } catch (err) {
      toast.error("Request failed");
    }
  };

  return (
    <section className="w-full pt-20 md:pt-32 pb-14 px-4 sm:px-6 bg-gradient-to-b from-[#D3E1FA] to-white dark:from-[#07142F] dark:to-[#0f0e0e] text-text">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-center text-3xl md:text-4xl font-bold mb-10 mt-8 text-text">
          Service <span className="text-brand font-funnel-display">To Do</span>
        </h3>

        {bookings?.length === 0 ? (
          <EmptyState title="No booked services assigned to you." />
        ) : (
          <div className="max-w-5xl mx-auto space-y-8">
            {bookings?.map((booking) => (
              <motion.div
                key={booking._id}
                className="bg-white dark:bg-[#3b4460] rounded-3xl shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 md:p-10"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                data-aos="fade-up"
              >
                <div className="w-full h-auto rounded-2xl overflow-hidden">
                  <img
                    src={booking.serviceImage}
                    alt={booking.serviceName}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>

                <div className="flex flex-col justify-between gap-6">
                  <div>
                    <h3 className="text-3xl font-bold text-brand mb-4 font-funnel-display">
                      {booking.serviceName}
                    </h3>

                    <div className="space-y-2 text-base">
                      <div className="flex items-center gap-2 text-xl">
                        <FaMapMarkerAlt />
                        <span className="font-medium">Location:</span> <span>Unknown</span>
                      </div>
                      <div className="flex items-center gap-2 text-xl">
                        <FaMoneyBillWave />
                        <span className="font-medium">Price:</span>
                        <span className="text-brand font-bold text-2xl">${booking.price}</span>
                      </div>
                    </div>

                    <div className="mt-4 space-y-2">
                      <p><span className="font-semibold">Buyer:</span> {booking.userName} (<a href={`mailto:${booking.userEmail}`} className="text-blue-500">{booking.userEmail}</a>)</p>
                      <p><span className="font-semibold">Date:</span> {new Date(booking.date).toLocaleString()}</p>
                      <p><span className="font-semibold">Booked At:</span> {new Date(booking.createdAt).toLocaleString()}</p>
                      {booking.specialInstruction && (
                        <div className="max-h-[100px] overflow-y-auto mt-2 pr-1 custom-scrollbar">
                          <p><span className="font-semibold">Extra Info:</span> {booking.specialInstruction}</p>
                        </div>
                      )}
                    </div>

                    <div className="mt-4">
                      <label className="font-semibold">Status:</label>
                      <select
                        className="ml-3 px-3 py-1 rounded-md bg-white dark:bg-slate-800 dark:text-white border"
                        value={booking.serviceStatus}
                        onChange={(e) => handleStatusChange(booking._id, e.target.value)}
                      >
                        {statusOptions.map((status) => (
                          <option key={status} value={status}>
                            {status.charAt(0).toUpperCase() + status.slice(1)}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* <div className="flex gap-4 items-center mt-6">
                    <img
                      src={booking.providerImage}
                      alt={booking.providerName}
                      className="w-12 h-12 rounded-full object-cover border"
                    />
                    <div>
                      <p className="text-sm font-semibold">{booking.providerName}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-300">{booking.providerEmail}</p>
                    </div>
                  </div> */}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceToDo;
