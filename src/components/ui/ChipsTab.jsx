import { NavLink, useLocation } from "react-router";
import { motion } from "framer-motion";

const tabs = [
  { label: "Home", to: "/" },
  { label: "All Recipes", to: "/all-recipes" },
  { label: "Add Recipe", to: "/add-recipe" },
  { label: "My Recipes", to: "/my-recipes" },
];

const ChipTabs = () => {
  const location = useLocation();

  return (
    <div className="flex justify-between items-center md:gap-2 lg:gap-4 px-4 py-2">
      {tabs.map((tab) => (
        <NavLink key={tab.to} to={tab.to} className="relative">
          {({ isActive }) => (
            <div className={`text-base px-3 py-1 rounded-md font-medium transition-colors
              ${isActive
                  ? "text-white"
                  : "text-base-content hover:text-primary"
                }`}
            >
              <span className="relative z-10">{tab.label}</span>
              {isActive && (
                <motion.span layoutId="active-pill"
                  className="absolute inset-0 z-0 bg-primary rounded-md"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
            </div>
          )}
        </NavLink>
      ))}
    </div>
  );
};

export default ChipTabs;
