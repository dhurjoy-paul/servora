import { Dialog, Transition } from "@headlessui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { Fragment, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaMapMarkerAlt, FaMoneyBillWave } from "react-icons/fa";
import { useLoaderData } from "react-router";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState(null);
  const [special, setSpecial] = useState("");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // toast notifications
  const notifySuccess = (msg) => toast.success(<ToastSuccess msg={msg} />);
  const notifyFailed = (error, msg) => toast.error(<ToastFailed error={error} msg={msg} />);
  const ToastSuccess = ({ msg }) => (
    <span className='text-lg text-green-600 font-semibold font-ibm leading-6'>{msg}</span>
  );
  const ToastFailed = ({ error, msg }) => (
    <div className='font-semibold font-ibm'>
      <div className='flex gap-3 mb-1'>
        <span className='text-lg text-red-600 font-semibold font-ibm leading-6'>{msg}</span>
      </div>
      <p>{error}</p>
    </div>
  );

  const {
    _id,
    image,
    name,
    description,
    location,
    price,
    providerName,
    providerImage,
    providerEmail,
  } = service;

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const handleBooking = async (e) => {
    e.preventDefault();

    if (!date) {
      return notifyFailed('', "Please select a valid date.");
    }

    const today = new Date().setHours(0, 0, 0, 0);
    const selectedDate = new Date(date).setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      return notifyFailed('', "You cannot select a past date!");
    }

    const bookingData = {
      serviceId: service._id,
      serviceName: service.name,
      serviceImage: service.image,
      providerEmail: service.providerEmail,
      providerName: service.providerName,
      providerImage: service.providerImage,
      userEmail: user?.email,
      userName: user?.displayName,
      price: service.price,
      date: date.toISOString(),
      specialInstruction: special,
      serviceStatus: "pending",
      createdAt: new Date().toISOString(),
    };

    try {
      const res = await fetch("https://ph-assignment-11-server-sandy.vercel.app/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(bookingData),
      });

      const result = await res.json();
      if (result.insertedId || result.acknowledged) {
        notifySuccess("Booking request submitted!");
        setIsOpen(false);
      } else {
        notifyFailed('', "Failed to book the service.");
      }
    } catch (err) {
      notifyFailed('', "Something went wrong!");
      console.error(err);
    }
  };


  return (
    <section className="w-full pt-20 md:pt-32 pb-14 px-4 sm:px-6 bg-gradient-to-b from-[#D3E1FA] to-white dark:from-[#07142F] dark:to-[#0f0e0e] text-text">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.h2
          className="text-center text-4xl md:text-5xl font-bold mb-14"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Service <span className="text-brand font-funnel-display">Details</span>
        </motion.h2>

        <motion.div
          className="bg-white dark:bg-[#3b4460] rounded-3xl shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 md:p-10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          data-aos="fade-up"
        >
          {/* Image */}
          <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[480px] rounded-2xl overflow-hidden">
            <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between gap-6">
            <div>
              <h3 className="text-3xl font-bold text-brand mb-4 font-funnel-display">{name}</h3>
              <div className="max-h-[250px] overflow-y-auto pr-2 custom-scrollbar">
                <p className="text-base md:text-lg whitespace-pre-line leading-relaxed mb-6">
                  {description}
                </p>
              </div>

              <div className="space-y-4 text-base mt-6">
                <div className="flex items-center gap-3 text-xl">
                  <FaMapMarkerAlt size={22} />
                  <span className="font-medium">Location:</span>
                  <span className="font-medium">{location}</span>
                </div>
                <div className="flex items-center gap-3 text-xl">
                  <FaMoneyBillWave size={22} />
                  <span className="font-medium">Price:</span>
                  <span className="text-brand font-bold text-2xl">${price}</span>
                </div>
              </div>
            </div>

            {/* Provider Info */}
            <motion.div className="flex items-center gap-4 border-t pt-6 mt-4" data-aos="fade-up">
              <img src={providerImage} alt={providerName} className="w-16 h-16 rounded-full object-cover border-2 border-brand" />
              <div>
                <p className="text-lg font-semibold">{providerName}</p>
                <p className="text-sm text-text/70">{providerEmail}</p>
              </div>
            </motion.div>

            {/* Book Now Button */}
            <motion.button
              onClick={openModal}
              whileHover={{ scale: 1.05 }}
              className="mt-6 px-6 py-3 text-white bg-gradient-to-r from-brand to-indigo-600 rounded-xl text-lg font-semibold shadow-md hover:shadow-lg transition"
            >
              Book Now
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* === Modal === */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-90"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-90"
          >
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto p-4">
            <div className="flex min-h-full items-center justify-center">
              <Dialog.Panel className="w-full max-w-2xl rounded-2xl bg-white dark:bg-[#1f2937] p-8 shadow-xl">
                <Dialog.Title className="text-2xl font-bold mb-4 text-center text-brand">
                  Book This Service
                </Dialog.Title>

                <form onSubmit={handleBooking} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input label="Service ID" value={_id} readOnly />
                    <Input label="Service Name" value={name} readOnly />
                    <Input label="Service Image" value={image} readOnly />
                    <Input label="Price" value={`$${price}`} readOnly />
                    <Input label="Provider Name" value={providerName} readOnly />
                    <Input label="Provider Email" value={providerEmail} readOnly />
                    <Input label="User Name" value={user?.displayName || ""} readOnly />
                    <Input label="User Email" value={user?.email || ""} readOnly />
                    <div className="flex flex-col">
                      <label className="font-semibold text-sm mb-1">Service Date</label>
                      <DatePicker
                        selected={date}
                        name="serviceTakingDate"
                        onChange={(date) => setDate(date)}
                        className="px-3 py-2 border rounded-md bg-white dark:bg-slate-800 dark:text-white"
                        placeholderText="Select a date"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-semibold text-sm mb-1">Special Instructions</label>
                    <textarea
                      rows={3}
                      name="specialInstruction"
                      placeholder="e.g. Your address, area, special requests..."
                      className="w-full px-3 py-2 border rounded-md bg-white dark:bg-slate-800 dark:text-white"
                      value={special}
                      onChange={(e) => setSpecial(e.target.value)}
                      required
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      onClick={handleBooking}
                      className="px-6 py-3 bg-brand text-white font-semibold rounded-xl hover:bg-brand/90 transition"
                    >
                      Purchase
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
};

// Reusable input component
const Input = ({ label, value, readOnly = false }) => (
  <div className="flex flex-col">
    <label className="font-semibold text-sm mb-1">{label}</label>
    <input
      type="text"
      value={value}
      readOnly={readOnly}
      className={`px-3 py-2 border rounded-md ${readOnly ? "bg-gray-100 dark:bg-slate-800 dark:text-white" : ""
        }`}
    />
  </div>
);

export default ServiceDetails;
