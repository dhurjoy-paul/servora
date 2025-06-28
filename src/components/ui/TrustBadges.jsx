import { motion } from "framer-motion";
import { FaTools } from "react-icons/fa";
import { FaHandshake, FaUserCheck } from "react-icons/fa6";

const trustBadges = [
  {
    icon: <FaHandshake className="text-blue-700 text-2xl" />,
    text: "Trusted Experts",
    bg: "bg-blue-100",
    border: "border-blue-300",
    textColor: "text-blue-800"
  },
  {
    icon: <FaTools className="text-green-700 text-xl" />,
    text: "On-Demand Repairs",
    bg: "bg-green-100",
    border: "border-green-300",
    textColor: "text-green-800"
  },
  {
    icon: <FaUserCheck className="text-purple-700 text-2xl" />,
    text: "Verified Staff",
    bg: "bg-purple-100",
    border: "border-purple-300",
    textColor: "text-purple-800"
  }
];

const TrustBadges = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-8">
      {trustBadges.map((badge, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.2 }}
          className={`flex items-center gap-2 px-4 py-2 rounded-full shadow-sm border ${badge.bg} ${badge.border} ${badge.textColor} cursor-default`}
        >
          {badge.icon}
          <span className="font-semibold">{badge.text}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default TrustBadges;
