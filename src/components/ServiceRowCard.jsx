import { motion } from "framer-motion";
import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const ServiceRowCard = ({ data, variant = "manage", onEdit, onDelete, onStatusChange }) => {
  const [status, setStatus] = useState(data?.status || "pending");

  const statusOptions = ["pending", "working", "completed"];
  const isCard = variant !== "manage";

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    setStatus(newStatus);
    onStatusChange?.(data._id, newStatus);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className={`rounded-2xl border border-brand/10 p-4 md:p-6 shadow-md bg-white dark:bg-[#3b4460] transition-all duration-300
        ${isCard ? 'space-y-4' : 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center gap-4'}
      `}
    >
      {/* ======= Manage Services Layout ======= */}
      {variant === "manage" && (
        <div className="bg-white dark:bg-[#3b4460] rounded-3xl shadow-md border border-base-200 p-6 md:p-8 w-full transition hover:shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center md:gap-8">

            {/* Image */}
            <div className="w-full md:w-48 h-40 rounded-2xl overflow-hidden border">
              <img
                src={data.image}
                alt={data.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="flex-1 mt-4 md:mt-0 space-y-3">
              <h2 className="text-2xl font-semibold text-brand">{data.name}</h2>
              <p className="text-para text-base md:text-lg line-clamp-3">
                {data.description}
              </p>
              <p className="text-brand font-bold text-xl font-funnel-display">
                ${data.price}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row gap-3 justify-center mt-6 md:mt-0 md:ml-auto">
              <button
                onClick={() => onEdit(data)}
                className="btn btn-outline btn-info rounded-full md:btn-md"
              >
                <FaEdit className="text-lg" /> Edit
              </button>
              <button
                onClick={() => onDelete(data)}
                className="btn btn-outline btn-error rounded-full md:btn-md"
              >
                <FaTrash className="text-lg" /> Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ======= Booked Services Layout ======= */}
      {variant === "booked" && (
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <img src={data.image} alt={data.name} className="w-full max-w-xs h-48 rounded-xl object-cover" />

          <div className="flex-1 space-y-2">
            <h2 className="text-2xl font-bold text-brand">{data.name}</h2>
            <p className="text-sm text-para">{data.description}</p>
            {data.extraInfo && (
              <p className="text-xs mt-1 text-para italic line-clamp-3">{data.extraInfo}</p>
            )}

            <p className="text-lg font-semibold text-brand">${data.price}</p>

            <div className="flex items-center gap-4 mt-4">
              <img src={data.providerImage} alt="provider" className="w-12 h-12 rounded-full border-2 border-brand" />
              <div>
                <p className="text-text font-medium">{data.providerName}</p>
                <p className="text-sm text-para flex items-center gap-1">
                  <MdOutlineEmail /> {data.providerEmail}
                </p>
              </div>
            </div>

            <p className="badge badge-outline badge-info text-sm mt-2">{data.status || "pending"}</p>
          </div>
        </div>
      )}

      {/* ======= Service To Do Layout ======= */}
      {variant === "todo" && (
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 justify-between">
          <div className="flex-1 space-y-1">
            <h2 className="text-xl font-semibold text-brand">{data.name}</h2>
            <p className="text-sm text-para">👤 {data.buyerName}</p>
            <p className="text-sm text-para flex items-center gap-1">
              <MdOutlineEmail /> {data.buyerEmail}
            </p>
            <p className="text-sm text-para">📍 {data.location}</p>
            {data.extraInfo && (
              <p className="text-xs mt-1 text-para italic line-clamp-2">{data.extraInfo}</p>
            )}
            <p className="text-lg font-bold text-brand mt-1">${data.price}</p>
          </div>

          <div className="flex flex-col items-start gap-2 mt-4 lg:mt-0">
            <label className="text-sm font-medium text-para">Status:</label>
            <select
              value={status}
              onChange={handleStatusChange}
              className="select select-bordered select-sm text-sm font-semibold"
            >
              {statusOptions.map((option) => (
                <option key={option} value={option}>
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ServiceRowCard;
