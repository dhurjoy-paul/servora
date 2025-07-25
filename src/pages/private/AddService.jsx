import { motion } from "framer-motion";
import { useState } from "react";
import { MdMiscellaneousServices } from "react-icons/md";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";

const AddService = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [area, setArea] = useState("DHAKA");
  const [price, setPrice] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image || !name || !description || !price || parseInt(price) < 0) {
      return notifyFailed('', "Please fill all fields correctly.");
    }

    const serviceData = {
      image,
      name,
      description,
      location: area,
      price: parseInt(price),
      providerName: user?.displayName || "Unknown",
      providerEmail: user?.email || user?.providerData?.[0]?.email || null,
      providerImage: user?.photoURL || "",
      createdAt: new Date().toISOString()
    };
    n
    try {
      const res = await fetch('http://localhost:3000/services', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(serviceData)
      });

      if (!res.ok) throw new Error("Server error");

      notifySuccess("Congratulations!! Service submitted successfully.");
      navigate("/manage-services");
    } catch (err) {
      console.error(err);
      notifyFailed('', "Failed to submit service.");
    }
  };

  return (
    <section className="w-full min-h-fit pt-15 md:pt-25 pb-10 px-6 lg:px-0 bg-gradient-to-b from-[#D3E1FA] to-white dark:from-[#07142F] dark:to-[#0f0e0e] text-text">
      <div className="max-w-4xl mx-auto bg-[#0B1327]/2 dark:bg-[#0B1327] px-6 py-12 border-2 border-text-muted/30 rounded-4xl mt-6 shadow-lg">
        <div className="text-center mb-10">
          <h3 className="text-center text-3xl md:text-4xl font-bold mb-4 text-text font-funnel-display">
            Add <span className="text-brand font-ibm">New</span> Service
          </h3>
          <p className="text-text-muted mt-2">Provide your service details below</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Image URL */}
          <div>
            <label className="block text-text font-semibold mb-1">Image URL *</label>
            <input
              type="url"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="https://example.com/image.jpg"
              required
              className="w-full bg-input px-3 py-2 rounded-xl text-text border border-text-muted/30 focus:outline-2 focus:outline-text"
            />
          </div>

          {/* Name */}
          <div>
            <label className="block text-text font-semibold mb-1">Service Name *</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full bg-input px-3 py-2 rounded-xl text-text border border-text-muted/30 focus:outline-2 focus:outline-text"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-text font-semibold mb-1">Description *</label>
            <textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="w-full bg-input px-3 py-2 rounded-xl text-text border border-text-muted/30 focus:outline-2 focus:outline-text"
            />
          </div>

          {/* Area Dropdown */}
          <div>
            <label className="block text-text font-semibold mb-1">Location/Area *</label>
            <select
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="w-full bg-input px-3 py-2 rounded-xl text-text border border-text-muted/30 focus:outline-2 focus:outline-text"
            >
              <option>DHAKA</option>
              <option>COMILLA</option>
              <option>CHITTAGONG</option>
              <option>SYLHET</option>
              <option>RAJSHAHI</option>
              <option>BARISAL</option>
              <option>KHULNA</option>
              <option>RANGPUR</option>
            </select>
          </div>

          {/* Price */}
          <div>
            <label className="block text-text font-semibold mb-1">Price (৳) *</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              min={0}
              className="w-full bg-input px-3 py-2 rounded-xl text-text border border-text-muted/30 focus:outline-2 focus:outline-text"
            />
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full flex items-center justify-center gap-2 rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200 px-5 py-2 text-lg font-medium transition-colors"
          >
            <MdMiscellaneousServices size={22} />
            Submit Service
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default AddService;
