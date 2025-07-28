import { Dialog, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import { Fragment, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { FaEdit, FaMapMarkerAlt, FaMoneyBillWave, FaTrash } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import EmptyState from '../../components/EmptyState';
import Loader from '../../components/ui/Loader';
import useAuth from "../../hooks/useAuth";

const ManageServices = () => {
  const { user, loading } = useAuth();
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataLoading, setDataLoading] = useState(false);

  const fetchServices = async () => {
    try {
      setDataLoading(true)
      const res = await fetch(`https://ph-assignment-11-server-sandy.vercel.app/services?providerEmail=${user?.email}`, {
        credentials: 'include',
      });
      const data = await res.json();
      setServices(data || []);
      setDataLoading(false)
    } catch (err) {
      console.error("Failed to load services:", err);
    }
  };

  useEffect(() => {
    if (user?.email) fetchServices();
  }, [user]);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "This action cannot be undone!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    });

    if (!result.isConfirmed) return;

    try {
      const res = await fetch(`https://ph-assignment-11-server-sandy.vercel.app/services/${id}`, {
        method: "DELETE",
        credentials: 'include'
      });
      const result = await res.json();

      if (result.deletedCount > 0) {
        toast.success("Service deleted");
        fetchServices();
      } else {
        toast.error("Delete failed");
      }
    } catch (err) {
      toast.error("Delete request failed");
    }
  };

  const handleEdit = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleUpdateService = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedData = {
      name: form.name.value,
      price: parseFloat(form.price.value),
      description: form.description.value,
      image: form.image.value,
      location: form.location.value,
    };

    try {
      const res = await fetch(`https://ph-assignment-11-server-sandy.vercel.app/services/${selectedService._id}`, {
        method: "PATCH",
        credentials: 'include',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });

      if (res.ok) {
        toast.success("Service updated");
        setIsModalOpen(false);
        fetchServices();
      } else {
        toast.error("Update failed");
      }
    } catch (err) {
      toast.error("Update request failed");
    }
  };

  if (dataLoading || loading) return <Loader />

  return (
    <>
      <Helmet>
        <title>Manage Services | Servora</title>
        <meta name="description" content="Home page of FixMate SPA" />
      </Helmet>
      <section className="w-full pt-20 md:pt-32 pb-14 px-4 sm:px-6 bg-gradient-to-b from-[#D3E1FA] to-white dark:from-[#07142F] dark:to-[#0f0e0e] text-text">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-center text-3xl md:text-4xl font-bold mb-10 text-text mt-8">
            Manage <span className="text-brand font-funnel-display">Your</span> Services
          </h3>

          {services.length === 0 ? (
            <EmptyState title={"No services found."} />
          ) : (
            <div className="max-w-5xl mx-auto space-y-8">
              {services.map((service) => (
                <motion.div
                  key={service._id}
                  className="bg-white dark:bg-[#3b4460] rounded-3xl shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 md:p-10"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  data-aos="fade-up"
                >
                  <div className="w-full h-auto rounded-2xl overflow-hidden">
                    <img src={service.image} alt={service.name} className="w-full h-full object-cover rounded-2xl" />
                  </div>

                  <div className="flex flex-col justify-between gap-6">
                    <div>
                      <h3 className="text-3xl font-bold text-brand mb-4 font-funnel-display">{service.name}</h3>
                      <div className="max-h-[250px] overflow-y-auto pr-2 custom-scrollbar">
                        <p className="text-base md:text-lg whitespace-pre-line leading-relaxed mb-6">
                          {service.description}
                        </p>
                      </div>

                      <div className="space-y-4 text-base mt-6">
                        <div className="flex items-center gap-3 text-xl">
                          <FaMapMarkerAlt size={20} />
                          <span className="font-medium">Location:</span>
                          <span>{service.location}</span>
                        </div>
                        <div className="flex items-center gap-3 text-xl">
                          <FaMoneyBillWave size={20} />
                          <span className="font-medium">Price:</span>
                          <span className="text-brand font-bold text-2xl">${service.price}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        onClick={() => handleEdit(service)}
                        className="btn rounded-full border border-info text-info hover:bg-info transition duration-300"
                      >
                        <FaEdit className="text-lg" /> Edit
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        onClick={() => handleDelete(service._id)}
                        className="btn rounded-full border border-error text-error hover:bg-error transition duration-300"
                      >
                        <FaTrash className="text-lg" /> Delete
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* === Edit Modal === */}
          <Transition appear show={isModalOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={() => setIsModalOpen(false)}>
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
                  <Dialog.Panel className="w-full max-w-xl rounded-xl bg-white dark:bg-[#1f2937] p-6 shadow-xl relative">
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-red-500"
                    >
                      <FaXmark size={20} />
                    </button>

                    <Dialog.Title className="text-xl font-bold mb-4 text-brand text-center">
                      Edit Service
                    </Dialog.Title>

                    {selectedService && (
                      <form onSubmit={handleUpdateService} className="space-y-4">
                        <div>
                          <label className="font-semibold text-sm mb-1 block">Service Name</label>
                          <input
                            type="text"
                            name="name"
                            defaultValue={selectedService.name}
                            className="w-full px-3 py-2 border rounded-md bg-white dark:bg-slate-800 dark:text-white"
                            required
                          />
                        </div>
                        <div>
                          <label className="font-semibold text-sm mb-1 block">Price</label>
                          <input
                            type="number"
                            name="price"
                            step="0.01"
                            defaultValue={selectedService.price}
                            className="w-full px-3 py-2 border rounded-md bg-white dark:bg-slate-800 dark:text-white"
                            required
                          />
                        </div>
                        <div>
                          <label className="font-semibold text-sm mb-1 block">Description</label>
                          <textarea
                            name="description"
                            rows={3}
                            defaultValue={selectedService.description}
                            className="w-full px-3 py-2 border rounded-md bg-white dark:bg-slate-800 dark:text-white"
                          />
                        </div>
                        <div>
                          <label className="font-semibold text-sm mb-1 block">Image URL</label>
                          <input
                            type="text"
                            name="image"
                            defaultValue={selectedService.image}
                            className="w-full px-3 py-2 border rounded-md bg-white dark:bg-slate-800 dark:text-white"
                          />
                        </div>
                        <div>
                          <label className="font-semibold text-sm mb-1 block">Location</label>
                          <input
                            type="text"
                            name="location"
                            defaultValue={selectedService.location}
                            className="w-full px-3 py-2 border rounded-md bg-white dark:bg-slate-800 dark:text-white"
                          />
                        </div>
                        <div className="text-center">
                          <button
                            type="submit"
                            className="px-6 py-2 bg-brand text-white font-semibold rounded-xl hover:bg-brand/90 transition"
                          >
                            Save Changes
                          </button>
                        </div>
                      </form>
                    )}
                  </Dialog.Panel>
                </div>
              </div>
            </Dialog>
          </Transition>
        </div>
      </section>
    </>
  );
};

export default ManageServices;
