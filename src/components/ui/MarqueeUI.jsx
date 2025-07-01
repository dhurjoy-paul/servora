import Marquee from "react-fast-marquee";
import { FaBolt, FaBroom, FaCouch, FaFan, FaHouseMedical, FaLeaf, FaLock, FaPaintRoller, FaShower, FaTruckMoving, FaUserTie } from "react-icons/fa6";
const marqueeDivs = [
  { icon: <FaBroom />, text: "Home Cleaning" },
  { icon: <FaPaintRoller />, text: "Painting Services" },
  { icon: <FaTruckMoving />, text: "Moving Help" },
  { icon: <FaHouseMedical />, text: "House Setup" },
  { icon: <FaCouch />, text: "Furniture Build" },
  { icon: <FaBolt />, text: "Electric Fixes" },
  { icon: <FaFan />, text: "AC Maintenance" },
  { icon: <FaShower />, text: "Plumbing Works" },
  { icon: <FaLeaf />, text: "Garden Services" },
  { icon: <FaLock />, text: "Secure Locksmith" },
  { icon: <FaUserTie />, text: "Skilled Workers" }
];

const MarqueeUI = () => {
  return (
    <Marquee speed={60} direction='left' className="mt-16 mb-8 xl:mb-0 overflow-hidden no-scrollbar">
      {
        marqueeDivs.map((item, i) => <div key={i} className="text-2xl md:text-3xl font-funnel-display font-semibold flex items-center gap-4">
          <span className="text-brand">{item.icon}</span> <span className="mr-18">{item.text} </span>
        </div>)
      }
    </Marquee>
  )
}
export default MarqueeUI